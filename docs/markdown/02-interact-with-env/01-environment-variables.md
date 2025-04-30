<!-- .slide: class="with-code" -->
# Contexts 
## [Context](https://docs.github.com/en/actions/learn-github-actions/contexts)

| Context |                                      Use case                                      |                    Example |
|:--------|:----------------------------------------------------------------------------------:|---------------------------:|
| env     |          Reference custom environment variables defined in the workflow.           |     `${{env.MY_VARIABLE}}` |
| github  | Reference information about the workflow run and the event that triggered the run. |   `${{github.repository}}` |
| vars    |   Contains variables set at the repository, organization, or environment levels.   |    `${{vars.MY_VARIABLE}}` |
| secrets |   Contains the names and values of secrets that are available to a workflow run.   | `${{secrets.MY_VARIABLE}}` |
| ....    |                                        ....                                        |                      `...` |



Notes:

##==##
<!-- .slide: class="with-code"-->
# Environment Variables 
## Scope

Three variable scopes : 
* for the entire workflow : `OPERATING_SYSTEM`
* for specific jobs : `GREETING`
* for specific steps : `FIRST_NAME`

```yaml [1-2|7-8|12-13]
env:
  OPERATING_SYSTEM: Linux

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      GREETING: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$GREETING $FIRST_NAME. The best operating system is $OPERATING_SYSTEM !"
        env:
          FIRST_NAME: Linus
```

Notes:


##==##
# Environment Variables 
## Naming conventions

* Filesystem : `_PATH` suffix (except for `HOME`,`GITHUB_ENV` and `GITHUB_WORKSPACE`)

<br>
<br>

* Must match :
  * alphanumeric characters ([a-z], [A-Z], [0-9]) 
  * underscores (_)
  * UPPER_CASE

<br>
<br>

* Some [**names**](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) are already used : 
  * `GITHUB_REF`
  * `GITHUB_SHA`
  * `GITHUB_ENV`
  * ...

Notes: 
More information at : 
- `https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables`


##==##
<!-- .slide: class="with-big-code"-->
# Environment Variables 
## Values between steps and jobs

* `GITHUB_ENV` :

```yaml [5,9]
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
<br>

* Steps outputs : 

```yaml [3,4,6]
steps:
  - name: Set selected color
    id: random-color-generator
    run: echo 'SELECTED_COLOR=green' >> $GITHUB_OUTPUT
  - name: Get color
    run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}" # This will output 'green'
```

Notes: 
* GITHUB_ENV file is unique to the current step and changes for each step in a job. 
For example, /home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a. 
* EOF can be used too
* Outputs containing secrets are redacted on the runner and not sent to GitHub Actions.
* update are only available to any subsequent steps

eg. if a step update a environment variable, the environment variable doesn't have access to the new value but subsequent steps do.


##==##
<!-- .slide: class="with-big-code"-->
# Environment Variables 
## Values between steps and jobs

* Jobs outputs :


<script style="css">
.code-wrapper { height:600px;}
</script>

```yaml [1-2,4-5,7,9,11,13,17]
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      url: ${{ steps.step1.outputs.url }} 
    steps:
      - id: step1
        name: send url to other job
        run: echo 'url=https://google.com' >> $GITHUB_OUTPUT

  job2:
      runs-on: ubuntu-latest
      needs: job1
      steps:
        - run: user/some-action@v1
          with:
            url: ${{ needs.job1.outputs.url }}
```

Notes:


##==##
<!-- .slide: class="two-column"-->
# Environment Variables 
## Share variables between workflows

3 levels:
* organization
* repository
* environment

Notes:
1,000 organization, 500 repository, 100 per environment
48 KB
less 256 KB
##--##

![mr-200 mt-200](./assets/images/github_actions_variables.png)
