import path from 'path'
import { parseCsv } from '../utils/parseCSV'

export const apriori = () => {
  const parentFolderPath = path.resolve(__dirname, '..')
  const neighboringFolderPath = path.join(parentFolderPath, 'tests-a-priori')
  const filePath = path.join(neighboringFolderPath, 'MOCK_DATA.csv')
  const records = parseCsv(filePath)

  return records[Math.floor(Math.random() * records.length)]
}
