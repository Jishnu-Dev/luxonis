import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Pool } from 'pg'

interface QueryParameters {
  page: string | null
  limit: string | null
}

const pool = new Pool({
  host: 'backend',
  port: 5432,
  user: 'postgres',
  database: 'luxo_task_db',
  password: 'docker'
})

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { page, limit } = getQueryParameters(searchParams)

    if (page !== null) {
      const client = await pool.connect()
      const offset =
        (parseInt(page) - 1) * (limit !== null ? parseInt(limit) : 0)

      try {
        const res = await client.query(`SELECT * FROM ads OFFSET $1 LIMIT $2`, [
          offset,
          limit !== null ? parseInt(limit) : 0
        ])

        const rows = res.rows
        const totalRes = await client.query(`SELECT COUNT(*) FROM ads`)
        const totalCount = parseInt(totalRes.rows[0].count, 10)
        const totalPages = Math.ceil(
          totalCount / (limit !== null ? parseInt(limit) : 1)
        )

        return NextResponse.json({ rows, totalPages })
      } finally {
        client.release()
      }
    }
  } catch (e: any) {
    const error = e as Error
    console.error(error.message)
    return NextResponse.json({
      error: error.message
    })
  }
}

function getQueryParameters(searchParams: URLSearchParams): QueryParameters {
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  return { page, limit }
}
