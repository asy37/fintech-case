import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export const SummaryCardSkeleton = () => {
  return (
    <Card className={`
      flex h-[105px] w-full items-center justify-center bg-white/40 px-5 py-6
      md:w-[222px]
    `}>
      <CardContent className={`
        flex w-full items-center justify-center gap-2 p-0
        md:justify-start
      `}>
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}
