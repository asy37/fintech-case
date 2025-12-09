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
