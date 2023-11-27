import path from 'path'
import { parseCsv } from '../utils/parseCSV'

export const readDynamicContent = () => {
  const parentFolderPath = path.resolve(__dirname, '..')
  const neighboringFolderPath = path.join(parentFolderPath, 'test-dynamic-pool')
  const filePath = path.join(neighboringFolderPath, 'MOCK_DATA.csv')
  const records = parseCsv(filePath)

  return records[Math.floor(Math.random() * records.length)]
}

export const readEvilDynamicContent = () => {
  const parentFolderPath = path.resolve(__dirname, '..')
  const neighboringFolderPath = path.join(parentFolderPath, 'test-dynamic-pool')
  const filePath = path.join(neighboringFolderPath, 'MOCK_DATA_EVIL.csv')
  const records = parseCsv(filePath)

  return records[Math.floor(Math.random() * records.length)]
}
