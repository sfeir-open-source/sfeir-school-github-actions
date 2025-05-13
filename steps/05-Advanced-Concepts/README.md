# 05-Advanced Concepts

**Goal** : Use Github Actions advanced concepts

## Use the cache action to store node_modules's data

* create a file `.github/workflows/ex6-cache.yaml` on `main` branch with the following code

```yaml[]
name: cache
on: 
  workflow_dispatch:

jobs:
  run-npm-install:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v4
        - name : setup node
          uses: actions/setup-node@v4
          with:
            node-version: 'lts/*'
        - name: run install
          shell: bash
          run: |
            npm install

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-install
    steps:
        - name: checkout
          uses: actions/checkout@v4
        - name : setup node
          uses: actions/setup-node@v4
          with:
            node-version: 'lts/*'
        - name: run test
          shell: bash
          run: |
            npm test
```

* use the [cache](https://github.com/marketplace/actions/cache) to cache `./node_modules`

## Use a matrix to perform a test on several configurations

* create a file `.github/workflows/ex6-matrix.yaml` on `main` branch with the following code

```yaml[]
name: npm test
on: 
  workflow_dispatch:

jobs:
  run-npm-install:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v4
        - name : setup node
          uses: actions/setup-node@v4
          with:
            node-version: 'lts/*'
        - name: run install
          shell: bash
          run: |
            npm install
            npm test
```

* Run test on :
  * node version `20`, `lts`
  * runner os `ubuntu-latest` and `ubuntu-22.04`

* Bonus : 
  * Run the node version `18` only for the os `ubuntu-latest` 

## Build on PR and build docker image on main

* create a file `.github/workflows/ex6-build-docker.yaml` on `main` branch with the following code

```yaml[]
name: build docker
on: 
  pull_request:
  push:
    branches: 
      - main

jobs:
  run-npm-install:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v4
        - name : setup node
          uses: actions/setup-node@v4
          with:
            node-version: 'lts/*'
        - name: run install
          shell: bash
          run: |
            npm install
            npm test
```

* Add a job to build the dockerfile only for the main branch with the command : `docker build -t ${{ github.sha }} .`
* Check your workflow run 
* Merge your pull request and check the workflow run
