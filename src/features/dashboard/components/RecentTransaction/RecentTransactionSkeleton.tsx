import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export const RecentTransactionSkeleton = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className={`
          mb-4 grid grid-cols-2 gap-3
          sm:grid-cols-4
        `}>
          <Skeleton className="h-4 w-24" />
          <Skeleton className={`
            mx-0 h-4 w-14
            sm:mx-auto
          `} />
          <Skeleton className={`
            mx-0 h-4 w-16
            sm:mx-auto
          `} />
          <Skeleton className={`
            ml-0 h-4 w-20
            sm:ml-auto
          `} />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className={`
                grid grid-cols-2 items-center gap-3
                sm:grid-cols-4
              `}
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-md" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>

              <Skeleton className={`
                mx-0 h-3 w-16
                sm:mx-auto
              `} />

              <Skeleton className={`
                mx-0 h-3 w-20
                sm:mx-auto
              `} />

              <Skeleton className={`
                ml-0 h-3 w-20
                sm:ml-auto
              `} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
