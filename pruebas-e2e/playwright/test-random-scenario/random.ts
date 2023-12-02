import { faker } from "@faker-js/faker"
import { TestOptions } from "../tests/page"

export const generateRandomEvil = (): TestOptions => ( {
    create_page_content: faker.random.alphaNumeric(),
    create_page_title: faker.random.alphaNumeric(),
    edit_page_content: faker.random.alphaNumeric(),
    edit_page_title: faker.random.alphaNumeric(),
    publish_page_position: faker.random.numeric(),
    schedule_date: faker.date.anytime().toString(),
    schedule_page_position: faker.random.numeric(),
    unschedule_page_position: faker.random.numeric()
})

export const generateRandom = (): TestOptions => ({
  create_page_content: faker.lorem.paragraph(),
  create_page_title: faker.lorem.sentence(),
  edit_page_content: faker.lorem.paragraph(),
  edit_page_title: faker.lorem.sentence(),
  publish_page_position: faker.number.int().toString(),
  schedule_date: faker.date.anytime().toString(),
  schedule_page_position: faker.number.int().toString(),
  unschedule_page_position: faker.number.int().toString()
})