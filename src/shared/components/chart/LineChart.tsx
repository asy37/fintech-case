'use client'

import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

interface LineChartProps {
  title?: string
  xData: string[]
  incomeSeries: number[]
  expenseSeries: number[]
}

export default function LineChart({
  title,
  xData,
  incomeSeries,
  expenseSeries,
}: LineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)

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
        formatter: (params: any) => {
          const item = params[0]
          return `
              <div style="padding:6px 4px;">
                <div style="font-size:16px; font-weight:600;">
                  ${item.seriesName}: ${item.value.toLocaleString()}₺
                </div>
              </div>
            `
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
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: { color: '#2A8A63' },
          lineStyle: { width: 3, color: '#2A8A63' },
          data: incomeSeries,
        },
        {
          name: 'Expenses',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: { color: '#D0E73C' },
          lineStyle: { width: 3, color: '#D0E73C' },
          data: expenseSeries,
        },
      ],
    }

    chart.setOption(option)

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      chart.dispose()
      window.removeEventListener('resize', handleResize)
    }
  }, [title, xData, incomeSeries, expenseSeries])

  return <div ref={chartRef} className="h-[300px] w-full" />
}
