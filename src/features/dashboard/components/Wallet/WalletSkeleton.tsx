import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export const WalletSkeleton = () => {
  return (
    <Card className="relative h-[359px] w-full">
      <CardContent className="space-y-4 p-1.5">
        <div className={`
          flex h-[210px] w-full flex-col space-y-5 rounded-2xl bg-neutral-300/40
          p-5
          md:w-[334px]
        `}>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-7 w-10 rounded" />
            <Skeleton className="h-7 w-10 rounded" />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-5 w-40" />
            <div className="flex w-full items-center justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-8 w-12 rounded-md" />
            </div>
          </div>
        </div>
        <div className={`
          absolute top-44 left-4 z-10 h-[172px] w-[90%] rounded-2xl
          bg-neutral-200/60 p-4 backdrop-blur-sm
          md:w-[314px]
        `}>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
