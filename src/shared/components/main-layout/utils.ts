export function formatPath(path: string) {
  return path
    .replace(/^\//, '')
    .split('/')
    .map((segment) =>
      segment.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
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
