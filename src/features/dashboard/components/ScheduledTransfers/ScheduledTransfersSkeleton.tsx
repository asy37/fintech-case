import { CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export const ScheduledTransfersSkeleton = () => {
  return (
    <CardContent className="flex w-full flex-col space-y-6">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-5 w-16" />
      </div>

      {Array.from({ length: 3 }, (_, i) => i).map((index) => (
        <div key={`skeleton-${index}`} className="space-y-4">
          <div className={`
            flex w-full items-center justify-between border-b border-border
            pt-1.5 pb-2.5
            last:border-none
          `}>
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />

              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>

            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      ))}
    </CardContent>
  )
}
