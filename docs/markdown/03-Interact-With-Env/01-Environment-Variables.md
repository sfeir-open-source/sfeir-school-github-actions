<!-- .slide: class="with-code" -->
# Environment Variables : Context

|Context|Use case|Example|
| :--- | :----: | ---: |
| Header | Reference custom environment variables defined in the workflow. | `${{env.MY_VARIABLE}}` |
| env | Reference information about the workflow run and the event that triggered the run. | `${{github.repository}}` |

##==##
<!-- .slide: class="with-code"-->
# Environment Variables : Types

Three types of variable : 
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

##==##
# Environment Variables : Naming conventions

* Filesystem : `_PATH` suffix, except for `HOME`, `GITHUB_ENV`, and `GITHUB_WORKSPACE`.

* Some name are already used : `GITHUB_REF`, `GITHUB_SHA`, `GITHUB_ENV`...

<br><br>
More information at : 
- `https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables`