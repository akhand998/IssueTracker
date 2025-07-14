import { getIssue } from '@/lib/dal'
import IssueForm from '@/app/components/IssueForm'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function EditIssuePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const issue = await getIssue(parseInt(id))

  if (!issue) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Link
        href={`/issues/${id}`}
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        Back to Issue
      </Link>

      <h1 className="text-2xl font-bold mb-6">Edit Issue</h1>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <IssueForm userId={issue.userId} issue={issue} isEditing />
      </div>
    </div>
  )
}
