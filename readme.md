# Visual tests dashboard

## What is this ?
The is a server providing :
- a dashboard of a set of visual regression tests
- an efficient report of a test with the ability to validate in a click a screenshot as the new reference.
- a simple and robust solution for sending the screenshots

## install

###  For development and demo
``` shell
yarn
yarn test:init #
yarn server:dev # http://localhost:8080
```
### For production
Modify the port
``` shell
yarn
yarn mkdir public
yarn server # http://localhost:8080
```

## How to add visual tests & screenshots

###
- All the data are in the `./public` directory.
- There is a folder for each visual test
- A test is defined by 3 parameters :
  - an `appId`, ex: "Drive" (could contain a version number or a release tag)
  - a `chrono`, ex: "0003" : the chrono is modified each time a test is run and some of the screenshots are added or updated
  - an `testId`, ex: ""
- the folder name is `[appId]-[]` (there is no folder for each run of a test, only the last one)
- in a test folder there ia
  - `after` : the screenshots of the last run
  - `before` : the reference screenshots
  - a file `test-description.json` :
- `test-description.json` content :
```
{}
```
-
