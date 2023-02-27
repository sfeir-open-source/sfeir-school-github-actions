<!-- .slide: class="with-code" -->
# Steps

* Steps are executed in order and if the previous job is executed with success
* Each step is executed on the same runner (VM)
* Single-responsibility principle (SRP) recommended
* Step can run :
  * Shell script
  * Github Actions

```yaml[]
   steps:
      - name: list files
        run: ls 
      - name: echo a string 
        run: |
          echo "Hello"
          echo "there"
      - name: cloning repo files into the vm 
        uses: actions/checkout@v3
```

Notes:

Thibauld
