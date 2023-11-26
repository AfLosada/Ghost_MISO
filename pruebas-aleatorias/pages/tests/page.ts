
import { test as base } from '@playwright/test';
import { apriori } from '../tests-a-priori/apriori';

export type TestOptions = {
  create_page_title: string,
  create_page_content: string,
  schedule_date: string,
  edit_page_title: string,
  edit_page_content: string,
  publish_page_position: string,
  schedule_page_position: string,
  unschedule_page_position: string,
};

const usableTest = apriori();

export const test = base.extend<TestOptions>({
  create_page_title: [usableTest.create_page_title, {option: true}],
  create_page_content: [usableTest.create_page_content, {option: true}],
  schedule_date: [usableTest.schedule_date, {option: true}],
  edit_page_title: [usableTest.edit_page_title, {option: true}],
  edit_page_content: [usableTest.edit_page_content, {option: true}],
  publish_page_position: [usableTest.publish_page_position, {option: true}],
  schedule_page_position: [usableTest.schedule_page_position, {option: true}],
  unschedule_page_position: [usableTest.unschedule_page_position, {option: true}]
})




