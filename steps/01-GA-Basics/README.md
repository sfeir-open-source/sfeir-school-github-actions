# TO DO :

Create a workflow that will test the Node application.

**Goal** : Complete the workflow file located in order to test the npm command.

## Create one job with `npm install` 

* Add the checkout action using the [marketplace](https://github.com/marketplace/actions/checkout)
* Setup Node `lts/*` version with this [action](https://github.com/actions/setup-node)
* Run the command `npm install`

## Create another job with `npm test` with a dependency on the first job

* Add the checkout action using the [marketplace](https://github.com/marketplace/actions/checkout)
* Setup Node `lts/*` version with this [action](https://github.com/actions/setup-node)
* Specify dependency [need keyword](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds) 
* Run the command `npm test`

## Watch workflow fails

* Trigger the workflow
* It fails on `npm test`
* Ask you why ?! 

## Let's fix it

* Run `npm test` in the same job as `npm install`
* Trigger the workflow
* It works !
 
## Bonus

* Run `npm test` in the same step as `npm install`
