# Guide

This repo contains a package json to install ghost, please follow the instructions carefully. Most tests require a FRESH install of ghost so please follow the instructions carefully

## Requirements

- node 18.18.2 for playwright and ghost
- node 16.20.2 for kraken

### Ghost install Steps 
1. `mkdir local`
2. `npm install`
  1.1. If you want to retry the tests from scratch you can run `npm run ghost:uninstall` 
3. `npm run ghost:install`. If the install fails, it is probably because you haven't configured the tools ghost requires to install, or because the local folder is not empty. For the first one you would have to debug and understand why ghost isn't installing. For the second, you should delete ALL of the contents of the local folder.
4. `npm run ghost:start`

## Tests

### End to End tests
- [Playwright (v4 & v5)](./pruebas-e2e/playwright/README.md) 10 scenarios
- [Cyptess - posts (v4 & v5)](./pruebas-e2e/cypress/readme.md) 10 scenarios
- [Cyptess - tags (v4 & v5)](./cypress/e2e/ghost_testing.cy.js) 10 scenarios
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

#### Tests

- [Kraken](./krakenVRTs/README.md)
- [Playwright](./pruebas-e2e/playwright/README.md)

Our preferred VRT is backdrop.js and we used it with the playwright tests. Please follow [this link](./pruebas-e2e/VRT/README.md) to run and see the results.

### Data Generation

Please navigate to [the following README.md](./pruebas-aleatorias/README.md)

## Team members
- Eduardo Benito Castro - e.benito@uniandes.edu.co
- Andres Felie Losada - af.losada@uniandes.edu.co
- Jhon Goyes - j.goyesg@uniandes.edu.co
- Andres pelaez Gaviria - j.pelaezg@uniandes.edu.co

You should use this credentials in ghost:
- email: nedrocoli@gmail.com
- password: 12345678910
