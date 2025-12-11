'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { AvatarShape, AvatarSize, GetAvatarContent } from './types'
import { getNoUser, getShapeClasses, getSizeStyle } from './utils'
import { Spinner } from '../spinner'

export type AvatarProps = {
  alt?: string
  icon?: React.ReactNode
  shape?: AvatarShape
  size?: AvatarSize
  src?: string | React.ReactNode
  width?: number
  height?: number
  onError?: () => boolean
}

const getAvatarContent = ({
  src,
  alt,
  imgError,
  imgLoading,
  handleImgError,
  handleImgLoad,
  icon,
  width = 40,
  height = 40,
  noUser = 'No User',
  ...rest
}: GetAvatarContent & { imgLoading: boolean; handleImgLoad: () => void }): React.ReactNode => {
  switch (true) {
    case typeof src === 'string' && !imgError:
      return (
        <>
          {imgLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner className="text-white" />
            </div>
          )}
          <Image
            src={String(src)}
            alt={alt}
            onError={handleImgError}
            onLoad={handleImgLoad}
            width={width}
            height={height}
            className={clsx("h-full w-full object-cover", {
              "opacity-0": imgLoading,
              "opacity-100": !imgLoading,
            })}
            {...rest}
          />
        </>
      )

    case typeof src === 'object' && src !== null:
      return src

    default:
      return icon || <span className="text-base font-medium">{noUser}</span>
  }
}

export const Avatar: React.FC<AvatarProps> = ({
  alt = '',
  icon,
  shape = 'circle',
  size = 'middle',
  src,
  width = 32,
  height = 32,
  onError,
}) => {
  const [imgError, setImgError] = React.useState(false)
  const [imgLoading, setImgLoading] = React.useState(true)

  const handleImgError = () => {
    const preventDefault = onError?.() === false
    if (!preventDefault) {
      setImgError(true)
      setImgLoading(false)
    }
  }

  const handleImgLoad = () => {
    setImgLoading(false)
  }

  // src değiştiğinde loading state'ini sıfırla
  React.useEffect(() => {
    if (typeof src === 'string' && src) {
      setImgLoading(true)
      setImgError(false)
    } else {
      setImgLoading(false)
    }
  }, [src])

  const shapeClassName = getShapeClasses(shape)
  const sizeStyle = getSizeStyle(size)
  const noUser = getNoUser(alt)

  const avatar = getAvatarContent({
    src,
    alt,
    imgError,
    imgLoading,
    handleImgError,
    handleImgLoad,
    icon,
    width,
    height,
    noUser,
  })

  return (
    <div className={clsx(shapeClassName, "relative")} style={sizeStyle}>
      {avatar}
    </div>
  )
}

export default Avatar

