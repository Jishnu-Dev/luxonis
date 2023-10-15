import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Pool } from 'pg'

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'luxo_task_db',
//   password: 'docker',
//   port: 5432
// })

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   console.log('searchParams::', searchParams)
//   const page = searchParams.get('page')
//   const client = await pool.connect()
//   try {
//     const res = await client.query('SELECT * FROM ads')
//     const rows = res.rows
//     return NextResponse.json({ rows })
//   } finally {
//     client.release()
//   }
// }

// import { NextResponse } from 'next/server'
// import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'luxo_task_db',
  password: 'docker',
  port: 5432
})

export async function GET(request: NextRequest) {
  const limit = 10
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page')

  // Calculate the offset based on the page and limit
  const offset = (page - 1) * limit

  const client = await pool.connect()
  try {
    // Query the database with pagination
    const res = await client.query(`SELECT * FROM ads OFFSET $1 LIMIT $2`, [
      offset,
      limit
    ])

    const rows = res.rows

    // Query the database to get the total count of rows
    const totalRes = await client.query(`SELECT COUNT(*) FROM ads`)
    const totalCount = parseInt(totalRes.rows[0].count, 10)

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({ rows, totalPages })
  } finally {
    client.release()
  }
}
