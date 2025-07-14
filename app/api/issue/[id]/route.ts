import { NextResponse } from 'next/server'
import { db } from '@/db'
import { issues } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idString } = await params
    const id = parseInt(idString)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid issue ID' }, { status: 400 })
    }

    const issue = await db.query.issues.findFirst({
      where: eq(issues.id, id),
    })

    if (!issue) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
    }

    return NextResponse.json(issue)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch issue' },
      { status: 500 }
    )
  }
}
