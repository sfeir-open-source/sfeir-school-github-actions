<!-- .slide: -->
# Migrating to GitHub Actions 

## GitHub Actions Importer

Prerequisites:

- Docker is installed and running.
- GitHub CLI is installed.
- [gh-actions-importer](https://github.com/github/gh-actions-importer)
 
Notes:


##==##
<!-- .slide: -->

# Migrating to GitHub Actions

## Paradigm differences

![full-width](./assets/images/workflows.png)

Notes:

Explain how to perform this schema in GitHub

- diff between the "standard way" and the gitops
  - `wait` 
  - not a gitops approach
  - user input shouldn't be present

##==##
<!-- .slide: -->

# Migrating to GitHub Actions

## Paradigm differences

Solution:

- set up environments 
- add required reviewer
- disable bypass on protection rules

- [deployement review](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/reviewing-deployments)

Notes:
 
