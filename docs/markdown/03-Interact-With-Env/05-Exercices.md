<!-- .slide: class="exercice" -->

# Interact with the Environment

## Exercice 1

Update the workflow that will print

**Goal** : Use the environment varable to print the shor Sha-1 

<ul>
    <li class="fragment">Add a new step that will get the Sha-1 to the sort format <br>&emsp;Use <code>${GITHUB_SHA::7}</code> to get the short Sha-1</li>
    <li class="fragment">Add a new step that will print the shrot Sha-1 from the previous step</li>
</ul>
<div class="fragment"> </br><strong>Bonus</strong> : Use both the GITHUB_ENV and the Steps outputs</div>

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

        - name: get-short-hash
          id: shorthash
          env:
            GITHUB_SHA: ${{ github.sha }}
          shell: bash
          run: echo "::set-output name=sha_short::${GITHUB_SHA::7}"

        - name: print-short-hash
          env:
              SHA_SHORT: ${{ steps.shorthash.outputs.sha_short }}
          run: echo "The short Sha-1 is ${SHA_SHORT}"  

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
