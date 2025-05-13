# 01-GA-Basics

**Goal** : Create a workflow that will test the Node application.

## ⚠️ Prerequisite

* create new github repository or use an existing one

## Create a github workflow file

* create a file `.github/workflows/ex1.yaml` on `main` branch with the following code

```yaml[]
name: npm test
on: 
  workflow_dispatch:
               
jobs:
  job1:
    runs-on: ubuntu-latest
    steps: 
      # TO COMPLETE      
```

## Create one job with `npm install`

* Add the checkout action using the [marketplace](https://github.com/marketplace/actions/checkout)
* Setup Node `lts/*` version with this [action](https://github.com/actions/setup-node)
* Run the command `npm install`

## Create another job with `npm test` with a dependency on the first job

* Add the checkout action using the [marketplace](https://github.com/marketplace/actions/checkout)
* Setup Node `lts/*` version with this [action](https://github.com/actions/setup-node)
* Specify dependency `need` [keyword](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds) 
* Run the command `npm test`

## Watch workflow fails

* Trigger the workflow
* It fails on `npm test`
* Ask you why ?!

## Let's fix it

* Run `npm test` in the same job as `npm install` in different steps
* Trigger the workflow
* It works !

## Bonus

* Run `npm test` in the same step as `npm install`
