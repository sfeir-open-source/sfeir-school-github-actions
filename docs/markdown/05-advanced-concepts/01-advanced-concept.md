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

Thibauld

##==##
<!-- .slide: class="with-code"-->
# If 

* use with an expression with / without `${{ }}`

```yaml[]
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
      uses: actions/github-script@v7
```

Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Workflow concurrency

* Only one single job or workflow will run at a time.

* queued job or workflow
* cancel oldest job or workflow
* group must be unique
* fallback value for event trigger

```yaml[]
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

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Matrix

* `strategy.matrix` key
* multiple jobs - multiple configurations 
* run in parallel
* maximum of 256 jobs per workflow run - `max-parallel: $n`

Notes:

Thibauld

##==## 
<!-- .slide: class="two-column-layout with-code"-->
# Matrix
## Example 

##--##

<br/>

```yaml[]
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
```

##--##

<br/>

```yaml[]
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-24.04]
        version: [18, 20, 22]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.version }}
```

Notes:

Thibauld

##==## 
<!-- .slide: class="two-column-layout with-code"-->
# Matrix
## Example 

##--##

<br/>

```yaml[]
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
```

<br/>

* {version: 18, os: ubuntu-latest}
* {version: 18, os: windows-latest}
* {version: 20, os: ubuntu-latest}
* {version: 20, os: windows-latest}
* {version: 22, os: ubuntu-latest}
* {version: 22, os: windows-latest}

##--##

<br/>

```yaml[]
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-24.04]
        version: [18, 20, 22]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.version }}
```

Notes:

Thibauld

##==## 
<!-- .slide: class="two-column-layout with-code"-->

# Expanding configurations 

##--##

```yaml[]
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

Notes:

Thibauld
{color: green} is added to all of the original matrix combinations because it can be added without overwriting any part of the original combinations.
{color: pink, animal: cat} adds color:pink only to the original matrix combinations that include animal: cat. This overwrites the color: green that was added by the previous include entry.
{fruit: apple, shape: circle} adds shape: circle only to the original matrix combinations that include fruit: apple.
{fruit: banana} cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination.
{fruit: banana, animal: cat} cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination. It does not add to the {fruit: banana} matrix combination because that combination was not one of the original matrix combinations.

##==## 
<!-- .slide: class="two-column-layout with-code"-->

# Expanding configurations 

##--##

```yaml[]
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


Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Expanding configurations 
## Example

```yaml[]
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [18, 20, 22]
        include:
          - os: windows-latest
            node: 22
            npm: 10
        exclude:
          - os: ubuntu-latest
            node: 22
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.node }}
      - if: ${{ matrix.npm }}
        run: npm install -g npm@${{ matrix.npm }}
      - run: npm --version
```

Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Matrix
## Dynamic

```yaml[]
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix
        run: echo "matrix={\"include\":[{\"os\":\"ubuntu\",\"node\":\"20\"},{\"os\":\"windows\",\"node\":\"24\"}]}" >> $GITHUB_OUTPUT
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
      - run: build
```

Notes:

##==##
<!-- .slide: -->
# Debug

* Add secret `ACTIONS_STEP_DEBUG=true` // STEP extra logs
* Add secret `ACTIONS_RUNNER_DEBUG=true` // RUNNER extra logs

<br>
<br>

![center h-500](./assets/images/action_step_debug.png)

Notes:

