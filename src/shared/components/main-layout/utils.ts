export function formatPath(path: string) {
  return path
    .replace(/^\//, '') // baştaki "/" kaldır
    .split('/') // multi-level route destekle
    .map(
      (segment) =>
        segment
          .replace(/-/g, ' ') // "-" yerine boşluk
          .replace(/^\w/, (c) => c.toUpperCase()), // ilk harf büyük
    )
    .join(' ')
}

export const capitalizeWords = (str: string | undefined): string => {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
