<!-- .slide: class="with-code" -->
# Environment Variables

|Context|Use case|Example|
| :--- | :----: | ---: |
| Header | Reference custom environment variables defined in the workflow. | `${{env.MY_VARIABLE}}` |
| env | Reference information about the workflow run and the event that triggered the run. | `${{github.repository}}` |

##==##
<!-- .slide: class="two-column-layout"-->
# Environment Variables types
##--##

Three types of variable : 
* for the entire workflow : `OPERATING_SYSTEM`
* for specific jobs : `GREETING`
* for specific steps : `FIRST_NAME`
##--##

<!-- .slide: class="with-code" -->
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
# Environment Variables best practices

