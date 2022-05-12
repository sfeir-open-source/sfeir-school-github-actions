# TODO :

**Goal** : Use Github Actions advanced concepts 

## ⚠️ Prerequisite

* create a file `.github/workflows/ex6.yaml` on `main` branch with the following code

```yaml
name: npm test
on: 
  workflow_dispatch:

jobs:
  run-npm-install:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v2
        - name : setup node
          uses: actions/setup-node@v2
          with:
            node-version: 'lts/*'
        - name: run install
          shell: bash
          run: |
            npm install

  run-npm-test:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v2
        - name : setup node
          uses: actions/setup-node@v2
          with:
            node-version: 'lts/*'
        - name: run test
          shell: bash
          run: |
            npm test
```

## Use the cache action to store node_modules's data

* use the [cache](https://github.com/marketplace/actions/cache) to cache `./node_modules`

## Use a matrix to perform a test on several configurations

* Run test on :
  * node version `14`, `lts`
  * runner os `ubuntu-latest` and `ubuntu-18.04`

* Bonus : 
  * Run the node version `12` only for the os `ubuntu-latest` 

## Build on PR and build docker image on main

* Change trigger to pull_request on new branch
* Create a pull request
* Add a new trigger on push to main branch
* Add a job to build the dockerfile only for the main branch with the command : `docker build -t {{ github.sha }} .`
* Check your workflow run 
* Merge your pull request and check the workflow run
