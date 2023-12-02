# Tags

## Requirements

1. Node v18.18.2 to be able to install ghost and playwright
2. No folder called local inside pages in [this route](./pages)

## Ghost Installation

1. Make sure you are able to run the `ghost:install<version you want to install>` command succesfully. Some common mistakes are:
    - There is a folder called local in the repository and it is not empty.
    - You are not using the correct version. 
    When you want to install ghost version 4, you need to use node version 16.13.0
    - The last `npm run ghost:uninstall` command was ran unsuccesfully.