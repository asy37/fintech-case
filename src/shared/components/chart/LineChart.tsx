'use client'

import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { formatCurrency } from '@/shared/utils/currency-format'

interface LineChartProps {
  readonly title?: string
  readonly xData: string[]
  readonly incomeSeries: number[]
  readonly expenseSeries: number[]
  readonly currency?: string
  readonly width?: string | number
  readonly height?: string | number
}

export default function LineChart({
  title,
  xData,
  incomeSeries,
  expenseSeries,
  currency = 'TRY',
  width = '100%',
  height = '300px',
}: LineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    chartInstanceRef.current = chart

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: { color: '#e8f0ff', width: 40, opacity: 0.2 },
        },
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 1,
        textStyle: { color: '#000', fontWeight: 600 },
        padding: 10,
        formatter: (
          params:
            | echarts.TooltipComponentFormatterCallbackParams
            | echarts.TooltipComponentFormatterCallbackParams[],
        ) => {
          const paramsArray = Array.isArray(params) ? params : [params]
          if (paramsArray.length === 0) return ''

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const firstParam = paramsArray[0] as any
          const month = firstParam.axisValue || firstParam.name || ''
          let tooltipContent = `<div style="padding:6px 4px;">
            <div style="font-size:14px; font-weight:600; margin-bottom:4px; color:#333;">
              ${month}
            </div>`

          paramsArray.forEach((item) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const itemAny = item as any
            if (itemAny.seriesName && itemAny.value !== undefined) {
              const color = itemAny.color || '#000'
              const value =
                typeof itemAny.value === 'number' ? itemAny.value : 0

              const formattedValue = formatCurrency(value, currency)
              tooltipContent += `
                <div style="font-size:14px; font-weight:600; margin-top:4px;">
                  <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color:${color}; margin-right:6px;"></span>
                  ${formattedValue}
                </div>
              `
            }
          })

          tooltipContent += '</div>'
          return tooltipContent
        },
      },

      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '15%',
        containLabel: true,
      },

      xAxis: {
        type: 'category',
        data: xData,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: '#A0A6B1', fontSize: 13 },
      },

      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: { color: 'rgba(200,200,200,0.2)' },
        },
        axisLabel: {
          color: '#A0A6B1',
          formatter: (v: number) => `${v / 1000}K`,
        },
      },

      series: [
        {
          name: 'Income',
          type: 'line',
          smooth: 0.3,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: { color: '#2A8A63' },
          lineStyle: { width: 3, color: '#2A8A63' },
          data: incomeSeries,
          connectNulls: false,
        },
        {
          name: 'Expenses',
          type: 'line',
          smooth: 0.3,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: { color: '#D0E73C' },
          lineStyle: { width: 3, color: '#D0E73C' },
          data: expenseSeries,
          connectNulls: false,
        },
      ],
    }

    chart.setOption(option)

    const resizeObserver = new ResizeObserver(() => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize()
      }
    })

    resizeObserver.observe(chartRef.current)

    const handleResize = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize()
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose()
        chartInstanceRef.current = null
      }
    }
  }, [title, xData, incomeSeries, expenseSeries, currency])

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return <div ref={chartRef} style={style} />
}
