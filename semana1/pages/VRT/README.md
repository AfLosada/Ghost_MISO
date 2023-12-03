# Guide

We are using an EC2 instance that hosts the version 4.45.0 of GHOST. This is the link [http://3.15.201.251/ghost/](http://3.15.201.251/ghost/).

And

We are using an EC2 instance that hosts the version 5.68.0 of GHOST. This is the link [http://3.138.112.48/ghost](http://3.138.112.48/ghost).

Make sure you can login to both with the given credentials.

You can also test this locally by following the instructions in [here](../README.md)

## Features

Login and all of the following features:

1. Create page with markdown
2. Create page with feature image
3. Create page with spotify embed

Credentials:
- username: nedrocoli@gmail.com
- password: 122345678910

## Requirements

- node 16.20.2 || 14.17.0
- For the pages tests to work properly make sure to check that there are **NO** draft pages nor scheduled.

#### End to End tests

#### Visual Regression Tests

If you would like to see the results of the tests, you only have to open [this url](./backstop_data/html_report/index.html). 

To be able to have VRT's, you need to run v4 & v5 tests in playwright. Please follow the guide found [here](../playwright/README.md).

Otherweise, if you would like to run these tests please follow these steps carefully.

1. Make sure you have ran v4 & v5 playwright end to end tests.
2. `npm install` in this folder
3. Replace the backstop.json found in this folder with the one found in `backstop-versions/v4`
4. Run `npm run backstop:test`. This test will fail, but it is expected as we are setting the default initial version.
5. Run `npm run backstop:approve`. This test will fail, but it is expected as we are setting the default initial version.
6. Replace the backstop.json found in this folder with the one found in `backstop-versions/v5`
7. Run `npm run backstop:test`. You will see the results that are major changes in the user interfaces for the pages features.
8. You can check the results in [this url](./backstop_data/html_report/index.html).