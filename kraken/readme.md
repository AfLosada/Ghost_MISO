# Guide

## Requirements

- node 16.20.2
- You need to be able to run kraken locally. Please try to install kraken by folliwing [this guide](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0).
- You need to have a ghost instance running locally. Please refer to each scenario in order to follow its respective instructions.

## Features


Guide to run pages feature tests in kraken

1. In this folder `kraken`, you should find a package.json. Run npm install for it using `node 16.20.2`.
2. `npm run kraken:doctor` to determine if your kraken installation is configured correctly. If it isn't install what this command tells you it is missing.
3.  `npm run kraken:run`. This should run all of the tests of the suite.
4. Verify that it is running correctly. Please make sure to follow

### Pages configuration

In order to correctly test the suite, make sure to:
1. Have a FRESH ghost install running, you can find some instructions to do it locally [in this README.md](../README.md)