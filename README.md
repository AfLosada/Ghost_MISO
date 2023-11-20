# Guide

This repo contains a package json to install ghost, please follow the instructions carefully. Most tests require a FRESH install of ghost so please follow the instructions carefully

## Requirements

- node 18.18.2

### Ghost install Steps 
1. `mkdir local`
2. `npm install`
  1.1. If you want to retry the tests from scratch you can run `npm run ghost:uninstall` 
3. `npm run ghost:install`. If the install fails, it is probably because you haven't configured the tools ghost requires to install, or because the local folder is not empty. For the first one you would have to debug and understand why ghost isn't installing. For the second, you should delete ALL of the contents of the local folder.
4. `npm run ghost:start`

## Tests

### End to End tests
- [Playwright](./pruebas-e2e/playwright/README.md) 5 scenarios
- [Cyptess - posts](./pruebas-e2e/cypress/readme.md) 5 scenarios
- [Cyptess - tags](./cypress/e2e/ghost_testing.cy.js) 5 scenarios
- [Kraken V5](./kraken/README.md) 20 scenarios
- [Kraken V4](./krakenv4/README.md) 20 scenarios

### Visual Regression Tests

#### Tested features

Login and all of the following features:

1. Create page
2. Edit page
3. Publish page
4. Schedule page
5. Unschedule page

- [Kraken](./krakenVRTs/README.md)
- [Playwright](./pruebas-e2e/playwright/README.md)

Our preferred VRT is backdrop.js and we used it with the playwright tests. Please follow [this link](./pruebas-e2e/VRT/README.md) to run and see the results.

## Team members
- Eduardo Benito Castro - e.benito@uniandes.edu.co
- Andres Felie Losada - af.losada@uniandes.edu.co
- Jhon Goyes - j.goyesg@uniandes.edu.co
- Andres pelaez Gaviria - j.pelaezg@uniandes.edu.co

You should use this credentials in ghost:
- email: nedrocoli@gmail.com
- password: 12345678910
