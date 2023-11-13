# Guide

This repo contains a package json to install ghost, please follow the instructions carefully. Most tests require a FRESH install of ghost so please follow the instructions carefully

## Requirements

- node 18.18.x

## Steps 

1. `npm install`
  1.1. If you want to retry the tests from scratch you can run `npm run ghost:uninstall` 
2. `npm run ghost:install`
3. `npm run ghost:start`

## Tests

- [Playwright](./pruebas-e2e/playwright/README.md)
- [Cyptess - posts](./pruebas-e2e/cypress/readme.md)
- [Kraken](./kraken/README.md)

## Miembros del equipo
- Eduardo Benito Castro - e.benito@uniandes.edu.co
- Andres Felie Losada - af.losada@uniandes.edu.co
- Jhon Goyes
- Andres pelaez Gaviria

You should use this credentials in ghost:
- email: nedrocoli@gmail.com
- password: 12345678910
