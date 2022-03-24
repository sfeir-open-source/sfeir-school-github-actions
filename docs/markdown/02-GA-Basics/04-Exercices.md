<!-- .slide: class="exercice" -->

# Basics Workflow
## Exercice 1

Create a workflow that will test the Node application.

**Goal** : Complete the workflow file located in order to test the npm command.


 
<ul>
    <li class="fragment">Add the checkout step using the <a href="https://github.com/marketplace/actions/checkout">marketplace</a></li>
    <li class="fragment">Setup Node in the GA with the <code>lts/*</code> version</li>
    <li class="fragment">Run the command <code>npm install</code> in a specific step</li>
    <li class="fragment">Run the command <code>npm test</code> in a specific step</li>
    <li class="fragment">Run the GA with the manual trigger</li>
</ul>
<div class="fragment"> </br><strong>Bonus</strong> : Run the differents command in the same step </div>


##--##
<!-- .slide: class="transition blue"-->

# Solution

##--##
<!-- .slide: class="with-code" -->

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