# Guide

This repo contains a package json to install ghost, please follow the instructions carefully. Most tests require a FRESH install of ghost so please follow the instructions carefully

## Requirements

- node 18.18.x

## Steps 

1. `npm install`
  1.1. If you want to retry the tests from scratch you can run `npm run ghost:uninstall` 
2. `npm run ghost:install`
3. `npm run ghost:start`

## Pruebas

- [Playwright](./pruebas-e2e/playwright/README.md)