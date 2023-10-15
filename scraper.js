const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const targetURL = 'https://www.expats.cz/praguerealestate/apartments/for-sale'
const itemsPerPage = 15
const targetItemCount = 500
let scrapedProperties = []
console.info('SCRAPING STARTED...')

const getSiteData = async page => {
  const response = await axios.get(`${targetURL}/${page}`)
  const body = response.data
  const $ = cheerio.load(body) // Load HTML data and initialize cheerio

  // Get all list items from the unordered list with a class name of 'products'
  const propertyElements = $('.list div')
  const properties = []

  propertyElements.each((index, prop) => {
    const property = {}

    // Finding title
    property.title = $(prop).find('h2 > a').text()
    property.location = $(prop).find('h3').text()

    // Find image URLs
    property.image = $(prop).find('a > img').attr('src')
    if (property['title'] !== '') properties.push(property)
  })

  return properties
}

const scrapeData = async () => {
  let page = 1
  while (scrapedProperties.length <= targetItemCount) {
    const properties = await getSiteData(page)
    scrapedProperties = scrapedProperties.concat(properties)
    page++
    console.log('Scrapping page', page)
    // Break if there are no more items to scrape
    if (properties.length < itemsPerPage) break
  }

  // Create a 'properties.json' file with the scraped data
  fs.writeFile(
    './public/ads.json',
    JSON.stringify(scrapedProperties, null, 2),
    err => {
      if (err) {
        console.error(err)
        return
      }
      console.info('Data written to file successfully!')
    }
  )
}

scrapeData()
