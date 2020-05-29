const fs = require('fs')
const faker = require('faker')

// TODO: parse original csv here
// const demoData = require('./xxxx.json')

const newDemo = demoData.map((tx) => ({ ...tx, description: faker.company.companyName() }))

fs.writeFileSync('demo.json', JSON.stringify(newDemo))
