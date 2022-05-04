<!-- .slide: class="with-code"-->
# Expressions

```${{ <expression> }}```

**Operators:**

* Logical group (`()`, `&&`, `||`, `!`)
* Comparison (`<`, `<=`, `>`, `>=`, `==`, `!=`)
* Index / property access (`[]`, `.`)
 
<br/>

**Functions:**

* contains, startsWith, endsWith, format, hashFiles, ...

**Status Check Functions:**

* success, always, cancelled, failure

Notes: 
  https://docs.github.com/en/actions/learn-github-actions/expressions
  If the types do not match, GitHub coerces the type to a number. 

##==##
<!-- .slide: class="with-code"-->
# if 

* use with an expression with / without `${{ }}`

```yaml
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod' # Conditional Job
    runs-on: ubuntu-latest
    steps:
    - name: My first step
      if: ${{ env.super_secret != '' }} # Conditional Step
      uses: octo-org/action-name@main
    - name: My backup step
      if: failure() # Conditional Step
      uses: actions/heroku@1.0.0
```

##==##
<!-- .slide: -->
# Debug

* Add secret `ACTIONS_STEP_DEBUG=true` // STEP extra logs
* Add secret `ACTIONS_RUNNER_DEBUG=true` // RUNNER extra logs

![center h-500](./assets/images/action_step_debug.png)


##==##
<!-- .slide: class="with-code"-->

# Job Matrice

* `matrix`
* multiple jobs - multiple configurations 
* run in parallel
* maximum of 256 jobs per workflow run - `max-parallel: $n`

##==## 
<!-- .slide: class="two-column-layout with-code"-->

# Example 

##--##

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

<br>

* {version: 10, os: ubuntu-latest}
* {version: 10, os: windows-latest}
* {version: 12, os: ubuntu-latest}
* {version: 12, os: windows-latest}
* {version: 14, os: ubuntu-latest}
* {version: 14, os: windows-latest}

##--##

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-18.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.version }}
```

##==## 
<!-- .slide: class="two-column-layout with-code"-->

# Expanding configurations 

##--##

```yaml
strategy:
  matrix:
    fruit: [apple, pear]
    animal: [cat, dog]
    include:
      - color: green
      - color: pink
        animal: cat
      - fruit: apple
        shape: circle
      - fruit: banana
      - fruit: banana
        animal: cat
```

##--##

* {fruit: apple, animal: cat, color: pink, shape: circle}
* {fruit: apple, animal: dog, color: green, shape: circle}
* {fruit: pear, animal: cat, color: pink}
* {fruit: pear, animal: dog, color: green}
* {fruit: banana}
* {fruit: banana, animal: cat}

##==##
<!-- .slide: class="with-code"-->
# Example

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node }}
      - if: ${{ matrix.npm }}
        run: npm install -g npm@${{ matrix.npm }}
      - run: npm --version
```

##==##
<!-- .slide: class="two-column-layout with-code"-->
# Excluding configurations 
##--##

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: ${{ matrix.os }}
```

##--##

* {os: macos-latest, version: 12, environment: staging}
* {os: macos-latest, version: 14, environment: staging}
* {os: macos-latest, version: 14, environment: production}
* {os: macos-latest, version: 16, environment: staging}
* {os: macos-latest, version: 16, environment: production}
* ...
 

Notes: 

All include combinations are processed after exclude. This allows you to use include to add back combinations that were previously excluded.

##==##
<!-- .slide: class="with-code"-->
# Workflow concurrency

* single job or workflow will run at a time. 

* queued job or workflow : 
  * are pending 
  * cancel the older 
* must be unique
* fallback value for event trigger 

```yaml
  concurrency: ci-${{ github.ref }}

  concurrency: 
    group: ${{ github.head_ref || github.run_id }}
    cancel-in-progress: true

  concurrency: 
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true

```

Notes:

* default :  any in-progress job or run
* ensure that only a single job or workflow using the same concurrency group will run at a time. 
* `||` fallback value
* To only cancel in-progress runs of the same workflow, you can use the `github.workflow` property to build the concurrency group - eg PR same workflow
