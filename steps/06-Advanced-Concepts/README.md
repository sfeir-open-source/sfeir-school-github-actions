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
        - name: run test
          shell: bash
          run: |
            npm test

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
            npm install
            npm test
```


## Use the cache to make it works

* use the [cache](https://github.com/marketplace/actions/cache) to cache `~/.npm`

## Use a matrix to run test on several configurations

* Run test on :
  * node version `14`,`16`,`lts`
  * runner `ubuntu-latest` and `ubuntu-18.04`

## Conditional

