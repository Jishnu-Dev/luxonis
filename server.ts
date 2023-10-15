// const express = require('express')
// const next = require('next')
// const { getAdsData } = require('./app/api/route')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()
//   server.get(
//     '/api/ads',
//     async (req: any, res: { json: (arg0: any) => void }) => {
//       const ads = await getAdsData()
//       res.json(ads)
//     }
//   )

//   server.get('*', (req: any, res: any) => {
//     return handle(req, res)
//   })

//   server.listen(8080, (err: any) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:8080')
//   })
// })
