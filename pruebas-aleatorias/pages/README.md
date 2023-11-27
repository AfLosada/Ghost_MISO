# Playwright guide

## Requirements

- node 18.18.x
- FRESH ghost install. If you don't have it please follow the guide found [here](../../README.md)
- There should be **NO** nor **Scheduled** draft pages, if there are pages in the draft state, please publish them manually in the version's respective URL.

## Testing version 5 

URL: [http://3.138.112.48/ghost](http://3.138.112.48/ghost)

### Steps to run the tests

1. Make sure you have installed a fresh version of ghost. If you want to follow this tutorial correctly, please follow the README.md in the root of this repository. If you have installed a version of ghost make SURE you uninstall it and reinstall it, as this tutorial has signup and login. [README.md](../../README.md)
2. Make sure you are in the folder pruebas-e2e/playwright, the same one where this README.md lives.
3. `npm install`
4. `npx playwright install` to install playwrights browsers
4. `npm run test:pages`
5. Enable the tests you want to run. The tests are split like this: 
   1. Create Page works: 
      1. apriori
      2. dynamic
      3. random
   2. Create Page Fails:
      1. apriori
      2. dynamic
      3. random
   3. Edit Page Works: 
      1. apriori
      2. dynamic
      3. random
   2. Edit Page Fails:
      1. apriori
      2. dynamic
      3. random
   3. Publish Page Works: 
      1. apriori
      2. dynamic
      3. random
   2. Publish Page Fails:
      1. apriori
      2. dynamic
      3. random
   3. Schedule Page Works: 
      1. apriori
      2. dynamic
      3. random
   2. Schedule Page Fails:
      1. apriori
      2. dynamic
      3. random
   3. Unschedule Page Works: 
      1. apriori
      2. dynamic
      3. random
   2. Unschedule Page Fails:
      1. apriori
      2. dynamic
      3. random
6. You can test each batch by configuring playwrights projects so it is able to run the tests you are interested. Each configuration can be seen like this:



7. **IMPORTANT** Tests will most likely fail the first time you run them, so please try running them again a second time. Before running them again, please try running the authentication before. This is because it is setting up the authentication and playwright preloads the pages when it is setting up the tests.  

![step0](./images/step%200%20playwright.png)


![step0](./images/step%200%20playwright.png)

## If you cannot see any playwright tests in the ui
1. Click on the top left where you see `Projects:`, make sure it has selected setup and chromium. Here, you should enable the tests that you want to try ONLY ENABLE ONE SUIT AT AT A TIME. For example, if you want to enable V4 tests, you have to selecte V4 & setupV4. The same goes for V5 tests. If this isn't enabled it WILL NOT WORK.
#### Step 1
![image1](./images/step%201%20playwright.png)
#### Step 2
![image2](./images/step%202%20playwright.png)