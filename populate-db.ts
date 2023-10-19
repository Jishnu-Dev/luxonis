const { Pool } = require('pg')
const fs = require('fs')

console.info('Info:: ENTERED SCRIPT...')

const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'postgres',
  database: 'luxo_task_db',
  password: 'docker'
})

async function createTables() {
  console.info('Info:: CONNECTING TO DB...')
  const client = await pool.connect()
  console.info('Info:: CREATING TABLE...')
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS ads (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        location VARCHAR(255),
        image_url TEXT
      )
    `)
  } catch (e) {
    console.error(e)
  } finally {
    client.release()
  }
}

async function populateAdsTable() {
  const client = await pool.connect()
  console.info('Info:: POPULATING TABLE...')

  try {
    await client.query('BEGIN')
    const jsonFilePath = './public/ads.json'
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))

    for (const data of jsonData) {
      const values = [data.title, data.location, data.image_url]
      await client.query(
        'INSERT INTO ads (title, location, image_url) VALUES ($1, $2, $3)',
        values
      )
    }
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}

async function main() {
  try {
    await createTables()
    await populateAdsTable()
    console.info(
      'Database and tables created, and data populated successfully.'
    )
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await pool.end()
  }
}

main()
