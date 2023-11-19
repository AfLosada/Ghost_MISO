# Guide

This repo contains a package json to install ghost, please follow the instructions carefully. Most tests require a FRESH install of ghost so please follow the instructions carefully

## Requirements

- node 18.18.2

## Steps 
1. `mkdir local`
2. `npm install`
  1.1. If you want to retry the tests from scratch you can run `npm run ghost:uninstall` 
3. `npm run ghost:install`. If the install fails, it is probably because you haven't configured the tools ghost requires to install, or because the local folder is not empty. For the first one you would have to debug and understand why ghost isn't installing. For the second, you should delete ALL of the contents of the local folder.
4. `npm run ghost:start`

## Tests

- [Playwright](./pruebas-e2e/playwright/README.md) 5 scenarios
- [Cyptess - posts](./pruebas-e2e/cypress/readme.md) 5 scenarios
- [Cyptess - tags](./cypress/e2e/ghost_testing.cy.js) 5 scenarios
- [Kraken](./kraken/README.md) 20 scenarios

## Miembros del equipo
- Eduardo Benito Castro - e.benito@uniandes.edu.co
- Andres Felie Losada - af.losada@uniandes.edu.co
- Jhon Goyes - j.goyesg@uniandes.edu.co
- Andres pelaez Gaviria - j.pelaezg@uniandes.edu.co

You should use this credentials in ghost:
- email: nedrocoli@gmail.com
- password: 12345678910
