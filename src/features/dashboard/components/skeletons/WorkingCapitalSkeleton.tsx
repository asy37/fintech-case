import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export const WorkingCapitalSkeleton = () => {
  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-4">
        <Skeleton className="h-5 w-32" />

        <div className="flex items-center gap-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-20" />
        </div>

        <Skeleton className="h-40 w-full rounded-md" />
      </CardContent>
    </Card>
  )
}
