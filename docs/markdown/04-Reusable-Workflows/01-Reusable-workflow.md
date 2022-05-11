<!-- .slide: -->

# Reusable Workflows

- Since November 2021
- Reusable, avoid duplication 
- Reference an entire workflow in another one
- Composite != Reusable Workflows
- Can’t reference a reusable workflow that’s in a private repository
- Reusable workflows can’t be stacked on top of one another

Notes:

Thibauld

##==## 
<!-- .slide: class="two-column-layout with-code"-->
# Reusable Workflows
## Difference 

##--##

<br/>

**Without:**

```yaml
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: docker/setup-buildx-action@v1
      - uses: docker/login-action@v1
        with:
          username: ${{inputs.registry_username}}
          password: ${{inputs.registry_password}}
      - uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: user/app:latest
```

##--##

<br/>

**With :**

*Reusable Workflow*
```yaml
on:
  workflow_call:
    inputs:
      WORKING_DIRECTORY:
        type: string
        default: .
        
jobs:
  my-job:
    ....
```

_Caller_

```yaml
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: my-org/publish-docker@v1
        with:
          registry_username: ${{secrets.REGISTRY_USERNAME}}
          registry_password: ${{secrets.REGISTRY_PASSWORD}}
```

Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Reusable Workflows
## How to

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
