<!-- .slide: class="two-column-layout"-->
# Environment Variables

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

