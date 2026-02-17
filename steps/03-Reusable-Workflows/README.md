# 03-Reusable Workflows

**Goal** : Make a reusable workflow

## ⚠️ Prerequisite

* create a file `.github/workflows/ex4.yaml` on `main` branch with the following code

```yaml[]
name: reusable workflow
on: 
  workflow_dispatch:

jobs:
  run-npm-test:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v6
        - name : setup node
          uses: actions/setup-node@v6
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
* Add a input to specify node version with a default value `lts`

## Bonus

* Initialize a new repository with the exercise template
* Create a new workflow using the reusable workflow from your first workflow 
