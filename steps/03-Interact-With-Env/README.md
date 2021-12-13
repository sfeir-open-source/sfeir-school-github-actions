# TODO :

Update the previous workflow to use the environment variable.

**Goal** : Create a workflow which interact with github

## ⚠️ Prerequisite

* create a file `.github/workflows/ex3.yaml` on `main` branch
* update your file `.github/workflows/ex3.yaml` on `feat/myfeature` branch with the following code

```yaml
name: interact with Github API
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
* create a pull request

## Switch Node version
 
* Specify a environnement variable NODE_VERSION=14
* Use this variable to setup node
* Check node version with the command `node -v`

## Interact with Github API

* Replace `.github/workflows/ex2.yaml` on `feat/myfeature` branch with the following code

```yaml
name: npm test
on: 
  pull_request:

jobs:
  run-npm-test:
    runs-on: ubuntu-latest
    steps:
```

* Add a step which create an issue with [Github API](https://docs.github.com/en/rest/issues/issues#create-an-issue) when workflow is triggered 
  * Reduce SHA on 7 characters with `${{GITHUB_SHA::7}}` in a step and use it as output in next step
  * Use the short-sha in the issue title

## Bonus

* Generate a PAT (Personal access Token) and use it from secret for calling Github API
