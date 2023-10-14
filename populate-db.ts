// const { Pool } = require('pg')
// const fs = require('fs')

// const dbConfig = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'luxo_task_db',
//   password: 'docker',
//   port: 5432
// }

// const pool = new Pool(dbConfig)
// const jsonFilePath = './public/ads.json'
// const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))

// const insertQuery = `INSERT INTO ads (title, location, image_url) VALUES ($1, $2, $3)`
// ;(async () => {
//   console.info('POPULATION STARTED...')
//   const client = await pool.connect()
//   try {
//     await client.query('BEGIN')

//     for (const data of jsonData) {
//       const values = [data.title, data.location, data.image]
//       await client.query(insertQuery, values)
//     }

//     await client.query('COMMIT')
//   } catch (error) {
//     await client.query('ROLLBACK')
//     throw error
//   } finally {
//     console.info('POPULATION COMPLETED...')
//     client.release()
//   }
// })()
