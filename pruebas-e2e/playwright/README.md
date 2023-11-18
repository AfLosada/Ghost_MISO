# Playwright guide

## Requirements

- node 18.18.x
- FRESH ghost install. If you don't have it please follow the guide found [here](../../README.md)

## Testing version 5 
### Steps to run the tests

1. Make sure you have installed a fresh version of ghost. If you want to follow this tutorial correctly, please follow the README.md in the root of this repository. If you have installed a version of ghost make SURE you uninstall it and reinstall it, as this tutorial has signup and login. [README.md](../../README.md)
2. Make sure you are in the folder pruebas-e2e/playwright, the same one where this README.md lives.
3. `npm install`
4. `npm run test:pages`
5. Click on the tests called V5 and run them

## Testing version 4
### Steps to run the tests

1. Make sure you have installed a fresh version of ghost. If you want to follow this tutorial correctly, please follow the README.md in the root of this repository. If you have installed a version of ghost make SURE you uninstall it and reinstall it, as this tutorial has signup and login. [README.md](../../README.md)
2. Make sure you are in the folder pruebas-e2e/playwright, the same one where this README.md lives.
3. `npm install`
4. `npm run test:pages`
5. Click on the tests called V4 and run them

### If you cannot see any playwright tests in the ui
1. Click on the top left where you see `Projects:`, make sure it has selected setup and chromium. You can enable the tests for firefox and webkit if you like, but we only support chromium tests. 
#### Step 1
![image1](./images/step%201%20playwright.png)
#### Step 2
![image2](./images/step%202%20playwright.png)