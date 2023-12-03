import fs from 'fs'

const dynamic = async () => {
  const response = await fetch('https://my.api.mockaroo.com/pages.json?key=e47bb9e0')
  const data = await response.text()
  const filePath = './test-dynamic-pool/MOCK_DATA.csv'
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`)
    } else {
      console.log(`File ${filePath} has been written successfully.`)
    }
  })
}

const dynamicEvil = async () => {
  const response = await fetch('https://my.api.mockaroo.com/pages-evil.json?key=e47bb9e0')
  const data = await response.text()
  const filePath = './test-dynamic-pool/MOCK_DATA_EVIL.csv'
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`)
    } else {
      console.log(`File ${filePath} has been written successfully.`)
    }
  })
}

const setDynamicPool = async () => {
  await dynamic()
  await dynamicEvil()
}

export default () => setDynamicPool()
