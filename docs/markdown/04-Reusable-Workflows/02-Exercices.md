<!-- .slide: class="exercice" -->

# Reusable Workflow
## Exercice 1

Update the workflow that will test the Node application to make it reusable

**Goal** : Use the reusable workflows in a other GA

<ul>
    <li class="fragment">Update the trigger</a></li>
    <li class="fragment">Create a new GA with a manual workflow that call our reusable workflows</li>
    <li class="fragment">Run the GA with the manual trigger</li>
</ul>

##--##
<!-- .slide: class="transition blue"-->

# Solution

##--##
<!-- .slide: class="with-code"-->
# Solution

```yaml
name: npm test
on: 
  workflow_call:

jobs:
  run-npm-test:
    runs-on: ubuntu-latest
    steps:
        - name: checkout
          uses: actions/checkout@v2
          with:
            fetch-depth: 0

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
##--##
<!-- .slide: class="with-code"-->
# Solution

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
          with:
            fetch-depth: 0

        - name : test app
          uses: myRepo/ReusableWorkflow/.github/workflows/test-npm.yaml@main
```