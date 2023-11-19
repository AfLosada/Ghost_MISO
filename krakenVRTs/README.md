# Guide

We are using an EC2 instance that hosts the version 4.45.0 of GHOST. This is the link [http://3.15.201.251/ghost/](http://3.15.201.251/ghost/).

And

We are using an EC2 instance that hosts the version 5.68.0 of GHOST. This is the link [http://3.138.112.48/ghost](http://3.138.112.48/ghost).

Make sure you can login to both with the given credentials.

## Features

Login and all of the following features:

1. Create page
2. Edit page
3. Publish page
4. Schedule page
5. Unschedule page
6. Create a new tag
7. Create a new internal tag
8. Delete a tag
9. Edit a tag
10. Validar color nuevo tag

Credentials:
- username: nedrocoli@gmail.com
- password: 122345678910

## Requirements

- node 16.20.2
- You need to be able to run kraken locally. Please try to install kraken by folliwing [this guide](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0).
- For the pages tests to work properly make sure to check that there are **NO** draft pages.

## Features

Guide to run pages feature tests in kraken

1. Navigate to the folder of the test you want to run and use to obtain screenshots. If you want to test kraken V4, go to v4 and the same for V5. When you are inside the folder, run `npm install` and proceed to the next steps.
2. `npm run kraken:doctor` to determine if your kraken installation is configured correctly. If it isn't install what this command tells you it is missing.
3.  `npm run kraken:run`. This should run all of the tests of the suite.
4. Verify that it is running correctly
5. If it isn't you can try debugging if something weird is going on with the kraken installation. 
6. You could also try running the tests with your own kraken configuration, to do this, just run `kraken-node run` in this folder.