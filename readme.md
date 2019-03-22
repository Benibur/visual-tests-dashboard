# Visual tests dashboard

## What is this ?
This is a node.js server providing :
- a dashboard of a set of visual regression tests
- an efficient report of a test with the ability to validate in a click a screenshot as the new reference.
- a simple and robust solution for sending the screenshots

## Install

###  For development and demo
Prerequisites : node, yarn, webpack (installed globally)
```shell
yarn
yarn test:init #
yarn server:dev # http://localhost:8080
```
### For production
Modify the listening port (in `./src-server/server.js )`
```shell
yarn
yarn mkdir public
yarn server # http://localhost:8080
```

## How to add visual tests & screenshots

### Data structure
- All the data are in the `./public` directory.
- There is a folder for each visual test
- A test is defined by 3 parameters :
  - `appId` - the tested application ID - ex: "Drive" (could contain a version number or a release tag)
  - `seq` : the id of the sequence test for an app. Ex: "0004"
  - `runId` - ex: "run-0003" - the runId is modified each time a test is run and some of the screenshots are added or updated. It is used to check if a visual comparison must be triggered.
- the `testId` is the concatenation of `[appID]-[seq]`  ex: "Drive-0004"
- the folder name of a tests is the `testId` (aka :`[appId]-[seq]`) (there is no folder for each run of a test, only the last one)
- in a test folder there is :
  - `after/` : contains the screenshots of the last run
  - `before/` : contains the reference screenshots (with same filename as in the `after/` directory)
  - `test-description.json` : a file with the test parameters
- `test-description.json` contains :
```JSON
{
    "testId": "Drive-0002",
    "appId": "Drive",
    "seq": "0002",
    "runId": "run-005",
    "title": "directory 2 creation in a folder with many other folders"
}
```
### How to init
- you are in charge of creating & deleting the test directory (filename = `[appID]-[seq]` )
- and in this directory you create
  - the `after` directory with your screenshots
  - the `test-description.json` with the correct data
- then you can start the server (`yarn `)

### How to update
- you can delete and create tests folders
- you can add/remove/update screenshots in `after/` directory
- and when you finished the updates, you can create or update `test-description.json` (in case of an update you are likely to just modify the runId)
This is the update of this file wich will trigger the run of the visual comparison.
All those operations can be done live, but for the init, if you have a lot of tests you don't want to re-run, it is better to init and then start the server (concurrency limits are manage only during server initialisation, this could be improved, be re-running tests seems the easiest solution)
