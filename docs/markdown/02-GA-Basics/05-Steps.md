<!-- .slide: class="with-code" -->
# Steps

* Step can run :
  * Shell script 
  * Github Actions
* Steps are executed in order and are dependent on each other.
* Each step is executed on the same runner (VM)
* Single-responsibility principle (SRP) recommended

```yaml
   steps:
      - name: echo a string 
        run: |
          echo "Hello"
          echo "there"
      - name: cloning repo files into the vm 
        uses: actions/checkout@v2.3.4
```

Notes:

Thibauld



##==##
<!-- .slide: -->
# Jobs and Steps

![center](./assets/images/overview-actions-simple.png)

Notes:

Gaetan
