<!-- .slide: -->

# Reusable Workflows
## Avoid duplication

- Since November 2021
- Reference an entire workflow
- Composite != Reusable Workflows
- Can’t reference a reusable workflow that’s in a private repository
- A **Caller** is a workflow that uses a reusable workflow
- A reusable workflow can’t be caller of another reusable workflow
- Many reusable workflows in a caller

```yaml

jobs:
  call-workflow-1-in-local-repo:
    uses: octo-org/this-repo/.github/workflows/workflow-1.yml@main
    
  call-workflow-2-in-local-repo:
    uses: ./.github/workflows/workflow-2.yml
    
  call-workflow-in-another-repo:
    uses: octo-org/another-repo/.github/workflows/workflow.yml@v1
 
 ```

Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Reusable Workflows
## 👉 [**How to**](https://docs.github.com/en/actions/using-workflows/reusing-workflows)

```yaml
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
