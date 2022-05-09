# TODO :

**Goal** : Make a reusable workflow and use it

## ⚠️ Prerequisite

* create a file `.github/workflows/ex3.yaml` on `main` branch with the following code

```yaml   
name: npm test
on: 
  workflow_dispatch:

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
            node -v
            npm install
            npm test
 
```

## Make your workflow reusable and use it in the same repository

* Use the [docs](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
* Add a required input to specify node version

 
