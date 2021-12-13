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

Default retention period is 90 days.

Notes:

Gaetan

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## Uploading files

```yaml
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v3
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
          retention-days: 5
```

Notes:

Gaetan

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## Downloading files

* Retrieve a single artifact

```yaml
- name: Download a single artifact
  uses: actions/download-artifact@v3
  with:
    name: my-artifact
```

* Retrieve all artifacts (one directory for each artifact)

```yaml
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v3
```

<br/>

*You can only download artifacts in a workflow that were uploaded during the same workflow run.*

Notes:

Gaetan

##==##
<!-- .slide: class="with-code"-->
# Artifacts
## UI

![center h-800](./assets/images/passing-data-between-jobs-in-a-workflow-updated.png)

Notes:

Gaetan