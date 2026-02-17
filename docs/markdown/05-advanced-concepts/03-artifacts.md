<!-- .slide: class="with-code"-->
# Artifacts

"*Artifacts allow you to share data between jobs in a workflow and store data once that workflow has completed.*"

* Uploading files: 
  * use `upload-artifact` action

* Downloading files: 
  * use `download-artifact` action
  * use UI.
  * use API

<br/><br/>

* retention period
  * 90 days for public / max 400 days for private


Notes:

Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs.

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## Uploading files

```yaml[]
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v6
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v6
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v6
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
          retention-days: 5
```

Notes:

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## Downloading files

* Retrieve a single artifact

```yaml[]
- name: Download a single artifact
  uses: actions/download-artifact@v6
  with:
    name: my-artifact
```

* Retrieve all artifacts (one directory for each artifact)

```yaml[]
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v6
```

<br/>

*You can only download artifacts in a workflow that were uploaded during the same workflow run.*

Notes:

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## UI

![center h-800](./assets/images/passing-data-between-jobs-in-a-workflow-updated.png)

Notes:
