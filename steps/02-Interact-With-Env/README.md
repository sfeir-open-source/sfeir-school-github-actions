# TODO :

Update the previous workflow to use the environment variable.

**Goal** : Use the environment variable to print the short Sha-1 

## ⚠️ Prerequisite

* create a file `.github/workflows/ex2.yaml` on `main` branch
* update your file `.github/workflows/ex2.yaml` on `feat/myfeature` branch with the following code

```yaml   
name: npm test
on: 
  pull_request:

jobs:
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


## Switch Node version
 
* Specify a environnement variable NODE_VERSION=14
* Use this variable to setup node
* Check node version with the command `node -v`

## Interact with Github API

//LABELER

## Docker Build and Push on ghcr.io
