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

```yaml{}
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

