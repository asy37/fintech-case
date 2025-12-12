import clsx from 'clsx'
import React from 'react'

import { AvatarShape, AvatarSize } from './types'

export const getSizeStyle = (size: AvatarSize): React.CSSProperties => {
  if (typeof size === 'number') {
    return { width: size, height: size }
  }

  const sizeMap: Record<string, number> = {
    small: 24,
    middle: 32,
    large: 40,
  }

  if (typeof size === 'string') {
    return { width: sizeMap[size], height: sizeMap[size] }
  }

  return {
    width: 32,
    height: 32,
  }
}

export const getShapeClasses = (shape: AvatarShape) => {
  return clsx(
    'flex items-center justify-center overflow-hidden bg-slate-dark text-white',
    {
      'rounded-full': shape === 'circle',
      'rounded-sm': shape === 'square',
    },
  )
}

export const getNoUser = (alt: string) => {
  return alt.charAt(0).toUpperCase()
}
