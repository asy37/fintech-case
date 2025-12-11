export function formatFullDate(dateString: string) {
  const date = new Date(dateString)

  const formatted = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return formatted.replace(',', ' at')
}
