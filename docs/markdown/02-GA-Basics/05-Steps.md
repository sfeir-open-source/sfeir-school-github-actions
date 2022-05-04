<!-- .slide: class="with-code" -->
# Steps

* Step can run 
  * a shell script 
  * Github Actions
* Steps are executed in order and are dependent on each other.
* each step is executed on the same runner (VM)
* SRP recommended

```yaml
   steps:
      - name: echo a string 
        run: echo "Hello"   
      - name: cloning repo files into the vm 
        uses: actions/checkout@v2.3.4
```

##==##
<!-- .slide: -->
# Jobs and Steps

![center](../../assets/images/overview-actions-simple.png)
