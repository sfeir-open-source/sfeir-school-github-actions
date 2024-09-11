# 03-Interact-With-Env

Update the previous workflow to use the environment variable.

**Goal** : Create a workflow which interact with github

## ⚠️ Prerequisite

* create a file `.github/workflows/ex3_switch_node_version.yaml` on `feat/myfeature` branch with the following code

```yaml[]
name: Switch Node version
on: 
  pull_request:

jobs:
  run-npm-test:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v3
        - name : setup node
          uses: actions/setup-node@v3
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

* Replace `.github/workflows/ex3_interact_with_github_api.yaml` on `feat/myfeature` branch with the following code

```yaml[]
name: interact with Github API
on: 
  pull_request:

jobs:
  create-issue:
    runs-on: ubuntu-latest
    steps:
```

* Add a step which create an issue with [Github API](https://docs.github.com/en/rest/issues/issues#create-an-issue) when workflow is triggered
  * don't forget auth `--header 'authorization: Bearer <my-token>`
  * Reduce SHA on 7 characters with `${GITHUB_SHA::7}` in a step and use it as output in next step
  * Use the short-sha in the issue title

<details>
  <summary>Tips</summary>

* Curl request
  
```bash
  curl --request POST \
  --url https://api.github.com/repos/<specify your repo with github context>/issues \
  --header 'authorization: Bearer <specify github token>' \
  --header 'content-type: application/json' \
  --data '{
    "title": "Automated issue for commit: ${{ steps.short_sha.outputs.sha_short }}",
    "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ steps.short_sha.outputs.sha_short }}_."
    }' \
  --fail
```

* Create a step with id: `short_sha` for sha_short output

</details>

## Bonus

* Generate a PAT (Personal access Token) and use it from secret for calling Github API
