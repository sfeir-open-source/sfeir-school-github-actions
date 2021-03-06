<!-- .slide: class="with-code" -->
# Environment Variables 
## 👉 [Context](https://docs.github.com/en/actions/learn-github-actions/contexts)

| Context |                                      Use case                                      |                  Example |
| :------ | :--------------------------------------------------------------------------------: | -----------------------: |
| env     |          Reference custom environment variables defined in the workflow.           |   `${{env.MY_VARIABLE}}` |
| github  | Reference information about the workflow run and the event that triggered the run. | `${{github.repository}}` |

Notes:

Thibauld

##==##
<!-- .slide: class="with-code"-->
# Environment Variables 
## Scope

Three variable scopes : 
* for the entire workflow : `OPERATING_SYSTEM`
* for specific jobs : `GREETING`
* for specific steps : `FIRST_NAME`

```yaml
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

Thibauld

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

* Some 👉 [**names**](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) are already used : 
  * `GITHUB_REF`
  * `GITHUB_SHA`
  * `GITHUB_ENV`
  * ...

Notes: 
More information at : 
- `https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables`

Thibauld

##==##
<!-- .slide: class="with-big-code"-->
# Environment Variables 
## Values between steps and jobs

* `GITHUB_ENV` :

```yaml
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

```yaml
steps:
  - name: Set selected color
    run: echo '::set-output name=SELECTED_COLOR::green'
    id: random-color-generator

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

Thibauld

##==##
<!-- .slide: class="with-big-code"-->
# Environment Variables 
## Values between steps and jobs

* Jobs outputs : 

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      url: ${{ steps.step1.outputs.url }} 
    steps:
      - id: step1
        name: send url to other job
        run: echo "::set-output name=url::https://google.com"
```

<br>
<br>

```yaml
job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: user/some-action@v1
        with:
          url: ${{ needs.job1.outputs.url }} 

```

Notes:

Thibauld
