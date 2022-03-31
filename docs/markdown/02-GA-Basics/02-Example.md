<!-- .slide: class="with-code" -->
# Example 1

```yaml
name: hello-world-example
on:
  push:
jobs:
  say-hello:
    runs-on: ubuntu-latest
    steps:
      - name: Say Hello
        run: echo "Hello world!"
      - name: Do stuff
        run: |
          echo "Step 1..."
          echo "Step 2..."
          echo "Step 3..."
      - name: Say Goodbye
        run: echo "Goodbye!"
```

##--##

<!-- .slide: class="with-code" -->
# Example 2

```yaml
name: hello-world-example
on:
  push:
jobs:
  say-hello:
    runs-on: ubuntu-latest
    steps:
      - name: Say Hello
        run: echo "Hello world!"
      - name: Do stuff
        run: |
          echo "Step 1..."
          echo "Step 2..."
          echo "Step 3..."
      - name: Say Goodbye
        run: echo "Goodbye!"
```
