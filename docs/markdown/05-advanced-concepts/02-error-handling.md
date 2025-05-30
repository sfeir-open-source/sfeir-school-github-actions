<!-- .slide: class="with-code"-->
# Error Handling

## Job and Step

<br/>

* `continue-on-error`

  * Prevents a workflow/job run from failing when a job/step fails.

* `timeout-minutes`
  * Default Job timeout : 360 minutes

* Rerun failed job or all job

![center](./assets/images/rerun-checks-drop-down.webp)

Notes:


##==##
<!-- .slide: class="with-code"-->
# Error Handling

## Matrix

* `strategy.fail-fast`

   cancel all in-progress and queued jobs.

You can mix `fail-fast` and `continue-on-error`
  
```
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: ${{ matrix.experimental }}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```

Notes:
