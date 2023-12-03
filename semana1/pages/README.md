# Pages

## Requirements

1. Node v18.18.2 to be able to install ghostv5 and playwright. You need to have version 14.17.0 to use ghost v4 locally.
You can also use our amazon ec2 instances, but they are not encouraged as they are flaky due to their resources. 
2. No folder called local inside pages in [this route](./pages)
3. If you are unable to run the playwright tests you should try running this command to install its browsers `npx playwright install`

## Ghost Installation

1. Make sure you are able to run the `ghost:install<version you want to install>` command succesfully. Some common mistakes are:
    - There is a folder called local in the repository and it is not empty.
    - You are not using the correct version. 
    When you want to install ghost version 4, you need to use node version 14.17.0
    - The last `npm run ghost:uninstall` command was ran unsuccesfully.
2. You shouldn't require a login, because the tests should do that automatically but if you would like to you can do it like this:

## Playwright installation

1. Node version 18.18.2
2. `npx playwright install`

```json
{
    "email": "nedrocoli@gmail.com",
    "password": "123475678910"
}
```

### Tests

You will find the following tests in this folder

1. [End to End](./e2e/README.md)
1. [VRT](./VRT/README.md)
1. [Data Generation](./data-generation/README.md)