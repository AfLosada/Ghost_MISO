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
5. Enable the tests you want to run, in this case it would be setupV5 & V5. Running them means clicking on the play button above the auth setup and the pagev5.
6. **IMPORTANT** Tests will most likely fail the first time you run them, so please try running them again a second time. Before running them again, please try running the authentication before. This is because it is setting up the authentication and playwright preloads the pages when it is setting up the tests.  

![step0](./images/step%200%20playwright.png)

## Testing version 4

URL: [http://3.15.201.251/ghost](http://3.15.201.251/ghost)

### Steps to run the tests

1. Make sure you have installed a fresh version of ghost. If you want to follow this tutorial correctly, please follow the README.md in the root of this repository. If you have installed a version of ghost make SURE you uninstall it and reinstall it, as this tutorial has signup and login. [README.md](../../README.md)
2. Make sure you are in the folder pruebas-e2e/playwright, the same one where this README.md lives.
3. `npm install`
4. `npm run test:pages`
5. Enable the tests you want to run, in this case it would be setupV4 & V4. Running them means clicking on the play button above the auth setup and the pagev5.
6. **IMPORTANT** Tests will most likely fail the first time you run them, so please try running them again a second time. Before running them again, please try running the authentication before. This is because it is setting up the authentication and playwright preloads the pages when it is setting up the tests.  

![step0](./images/step%200%20playwright.png)

### If you cannot see any playwright tests in the ui
1. Click on the top left where you see `Projects:`, make sure it has selected setup and chromium. Here, you should enable the tests that you want to try ONLY ENABLE ONE SUIT AT AT A TIME. For example, if you want to enable V4 tests, you have to selecte V4 & setupV4. The same goes for V5 tests. If this isn't enabled it WILL NOT WORK.
#### Step 1
![image1](./images/step%201%20playwright.png)
#### Step 2
![image2](./images/step%202%20playwright.png)