import { faker } from "@faker-js/faker"
import { TestOptions } from "../tests/page"

export const generateRandomEvil = (): TestOptions => ( {
    create_tag_name: faker.random.alphaNumeric(),
    create_tag_color: faker.random.alphaNumeric(),
    
})

export const generateRandom = (): TestOptions => ({
  create_tag_name: faker.lorem.sentence(),
  create_tag_color: faker.random.hexcolor(),
  
})