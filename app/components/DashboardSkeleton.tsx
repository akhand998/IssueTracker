export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton: simulating the page title and New Issue button */}
      <div className="flex items-center justify-between mb-8">
        <div className="h-8 w-32 bg-gray-300 rounded" />
        <div className="h-10 w-36 bg-gray-300 rounded" />
      </div>
      {/* Skeleton for issues list */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Header row skeleton */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="col-span-5 h-4 bg-gray-300 rounded" />
          <div className="col-span-2 h-4 bg-gray-300 rounded" />
          <div className="col-span-2 h-4 bg-gray-300 rounded" />
          <div className="col-span-3 h-4 bg-gray-300 rounded" />
        </div>
        {/* Issue row skeletons */}
        <div className="divide-y divide-gray-200">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center"
            >
              <div className="col-span-5 h-4 bg-gray-300 rounded" />
              <div className="col-span-2 h-4 bg-gray-300 rounded" />
              <div className="col-span-2 h-4 bg-gray-300 rounded" />
              <div className="col-span-3 h-4 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
