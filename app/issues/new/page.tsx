import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import NewIssue from '@/app/components/NewIssue'

export default async function NewIssuePage() {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        Back to Dashboard
      </Link>

      <h1 className="text-2xl font-bold mb-6">Create New Issue</h1>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <NewIssue />
        </Suspense>
      </div>
    </div>
  )
}
