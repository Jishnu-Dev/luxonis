import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'luxo_task_db',
  password: 'docker',
  port: 5432
})

export async function GET(request: NextRequest) {
  try {
    const limit = 10
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')

    if (page) {
      const offset = (parseInt(page) - 1) * limit
      const client = await pool.connect()
      try {
        const res = await client.query(`SELECT * FROM ads OFFSET $1 LIMIT $2`, [
          offset,
          limit
        ])

        const rows = res.rows
        const totalRes = await client.query(`SELECT COUNT(*) FROM ads`)
        const totalCount = parseInt(totalRes.rows[0].count, 10)
        const totalPages = Math.ceil(totalCount / limit)

        return NextResponse.json({ rows, totalPages })
      } finally {
        client.release()
      }
    }
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'An error occurred' })
  }
}
