# Guide

We are using a EC2 instance that hosts the version 4.45.0 of GHOST. This is the link [http://3.15.201.251/ghost/](http://3.15.201.251/ghost/).
We are using an EC2 instance that hosts the version 5.68.0 of GHOST. This is the link [http://3.138.112.48/ghost](http://3.138.112.48/ghost).

## Features

Login and all of the following features:

1. Create post

Credentials:
- username: nedrocoli@gmail.com
- password: 122345678910

## Requirements

- node 16.20.2
- You need to be able to run kraken locally. Please try to install kraken by folliwing [this guide](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0).
- For the pages tests to work properly make sure to check that there are **NO** draft pages.

## Features

Guide to run post creation feature tests in kraken

1. In this folder there are several bash files, make sure they have execution permissions. Run `chmod +x *.sh` if you are using UNIX/LINUX based os.
2. Run `npm install` to install the dependencies.
3. Run `./run-e2e.sh` to execute the e2e testing. This should run all of the e2e tests inside the folder "e2e/features". There are a new scenario added to the existings related with the post creation.
4. Run `./run-vrt.sh` to execute the visual regresion testing. This should run all of the vrt tests inside the folder "vrt/features-v4" and "vrt/features-v5". Now resemble generate only a report for each scenario. The step comparison is inside the html.
5. Run `./run-aleatorias.sh` to execute the random data testing. This should run all of the random data tests inside the folder "aleatorias/features". There was added new scenarios for data-apriori tests.
6. Sometimes, because the kraken browser hasn't warmped up, tests seem to fail. If this happens be mindful and try to run the tests again.
