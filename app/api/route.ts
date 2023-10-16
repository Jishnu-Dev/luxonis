import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'db',
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

      console.error('Connecting to the database......')
      const client = await pool.connect()
      console.error('Connected to the database.')

      console.error('Executing query...')
      try {
        const res = await client.query(`SELECT * FROM ads OFFSET $1 LIMIT $2`, [
          offset,
          limit
        ])
        console.info('Query executed.')

        const rows = res.rows
        const totalRes = await client.query(`SELECT COUNT(*) FROM ads`)
        const totalCount = parseInt(totalRes.rows[0].count, 10)
        const totalPages = Math.ceil(totalCount / limit)

        console.info('Completed.')
        return NextResponse.json({ rows, totalPages })
      } catch (e) {
        console.error('Eeeeee', e)
      } finally {
        client.release()
      }
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      console.error(e.message)
      return NextResponse.json({ error: e.message })
    } else {
      console.error(e)
      return NextResponse.json({ error: 'An unexpected error occurred' })
    }
  }
}
