<!-- .slide: class="exercice" -->

# GitHub Action from the Marketplace
## Exercice 1

Update the workflow that will add a marketplace action

**Goal** : Use the GA https://github.com/marketplace/actions/create-pull-request

<ul>
    <li class="fragment">get the short SHA-1 from a other step</a></li>
    <li class="fragment">add a new file or a change to an existing file</a></li>
    <li class="fragment">add the action to the current workflow</a></li>
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

      - name: get-short-hash
        id: shorthash
        env:
          GITHUB_SHA: ${{ github.sha }}
        shell: bash
        run: echo "::set-output name=sha_short::${GITHUB_SHA::7}"

      - name: generate change 
          env:
            SHA_SHORT: ${{ steps.shorthash.outputs.sha_short }}
          run: |
            echo "I am \"Finding\" difficult to find something to change in this PR so i add the ${SHA_SHORT}" >> file.txt 

      - name: Create Pull Request
        id: cpr
        uses: peter-evans/create-pull-request@v4
        with:
          commit-message: 'Chore: Something new.'
          committer: GitHub <noreply@github.com>
          author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
          branch: feat/new_thing
          delete-branch: true
          title: 'Chore: Something new.'
          body: |
            A nice PR
            - Auto-generated
          draft: false
          base: main
```