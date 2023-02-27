<!-- .slide: -->

# Reusable Workflows
## Avoid duplication

- Since November 2021
- Reference an entire workflow
- Allow to reuse and share workflow
- Composite != Reusable Workflows
- A **Caller** is a workflow that uses a reusable workflow

```yaml[]

jobs:
  call-workflow-1-in-local-repo:
    uses: octo-org/this-repo/.github/workflows/workflow-1.yml@main
    
  call-workflow-2-in-local-repo:
    uses: ./.github/workflows/workflow-2.yml
    
  call-workflow-in-another-repo: # need public repo or specific setting if private
    uses: octo-org/another-repo/.github/workflows/workflow.yml@v1
 ```

Notes:

Thibauld

##==##
<!-- .slide: -->

# Reusable Workflows
## Avoid duplication

- 4 levels of nested workflows
  - caller-workflow → called-workflow-1 → called-workflow-2 → called-workflow-3
- Max 20 reusable workflows in a caller
- env context not propagated
- use variables to share between
- Allow inputs and secrets sharing

##==##
<!-- .slide: class="with-code"-->
# Reusable Workflows
## 👉 [**How to**](https://docs.github.com/en/actions/using-workflows/reusing-workflows)

```yaml[]
name: Create and Publish Docker Image

on:
  workflow_call:
    inputs:
      image_name:
        required: true
        type: string
      tag: 
        type: string
    secrets:
      registry_username:
        required: true
      registry_password:
        required: true
```

Notes: 

Only `workflow_call:` matter in this example

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Reusable Workflows
## Usage

```yaml 
name: Reusable Workflow user

on:
  workflow_dispatch:

jobs:
  docker-images:
    uses: myGitUser/ReusableWorkflow/.github/workflows/buildAndPublishDockerImage.yml@main 
    with:
      image_name: my-awesome-app
      tag: ${{ github.sha }}
    secrets:
      registry_username: ${{secrets.REGISTRY_USERNAME}}
      registry_password: ${{secrets.REGISTRY_PASSWORD}}
```

Notes:

Thibauld
