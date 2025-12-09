import type { Configuration } from 'webpack'
import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module ??= {}
    config.module.rules ??= []

    // Mevcut SVG loader'ı devre dışı bırak
    config.module.rules = config.module.rules.map((rule) => {
      if (
        rule &&
        typeof rule === 'object' &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
      ) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        }
      }
      return rule
    })

    // SVG dosyalarını React component olarak yükle
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
          },
        },
      ],
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  turbopack: {},
}

export default nextConfig
