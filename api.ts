const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'luxo_task_db',
  password: 'docker',
  port: 5432
})

export async function getAdsData() {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM ads')
    return result.rows
  } finally {
    client.release()
  }
}
