# Guide

We are using a EC2 instance that hosts GHOST. This is the link [http://3.138.112.48/ghost/](http://3.138.112.48/ghost/).


## Strategy

### Priory data pool:

Files: a1*-posts.feature (10 test cases)

We use Gherkin data tables to use them in the tests

#### Test cases 

1. Create post Positive
2. Create post with sql injection
3. Schedule a post in the past
4. Schedule a post in the future
5. Edit a post with sql iunjection
6. Edit a post with special characters
7. Create a draft save it and edit with a normal title
8. Create a draft save it and edit with an empty title
9. Edit the url of a post (positive)
10. Edit the url of a post (negative)

### Pseudorandom dynamic:

Files: b1*-posts.feature (10 test cases)


We use Mockaroo 2 apis: 
1. Whith valid data: [Api](https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170)
2. Whith invalid data: [Api](https://my.api.mockaroo.com/post-content.json?key=35c2a170)

#### Features 

1. Create post and edit the content several times (with normal data)
2. Create post and edit the content several times (with dirty data)
3. Edit a post  (with normal data)
4. Edit a post  (with dirty data)
5. Edit a post and view preview several times (with normal data)
6. Edit a post and view preview several times (with dirty data)
7. Create a draft save it and edit it (with normal data)
8. Create a draft save it and edit it (with dirty data)
9. Edit the url of a post (with normal data)
10. Edit the url of a post (with dirty data)

### Pseudorandom dinamic:

Files: c1*-posts.feature (10 test cases)

Use faker and kraken's faker integration

#### Features 

1. Create a post
2. Unplublish a post an shecdule it for later
3. Edit a plublished post
4. Create a draft save it and edit it
5. Update the url of a post
6. Change the expert of a post
7. Change publish date of a post
8. Change pots facebook card
9. Add code injection to the header of the post
10. Create a post with a button

## Credentials:
- username: nedrocoli@gmail.com
- password: 122345678910

## Requirements

- node 16.20.2
- You need to be able to run kraken locally. Please try to install kraken by folliwing [this guide](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0).
- For the pages tests to work properly make sure to check that there are **NO** draft pages.

## Features

Guide to run pages feature tests in kraken

1. In this folder `kraken`, you should find a package.json. Run npm install for it using `node 16.20.2`.
2. `npm run kraken:doctor` to determine if your kraken installation is configured correctly. If it isn't install what this command tells you it is missing.
3.  `npm run kraken:run`. This should run all of the tests of the suite.
4. Verify that it is running correctly
5. If it isn't you can try debugging if something weird is going on with the kraken installation. 
6. You could also try running the tests with your own kraken configuration, to do this, just run `kraken-node run` in this folder.
7. Sometimes, because the kraken browser hasn't warmped up, tests seem to fail. If this happens be mindful and try to run the tests again being careful that there are NO **draft** or **scheduled** pages.
