<!-- .slide: class="with-code" -->
# Example

```yaml
name: Any-Name #Name of the workflow
on: [push] # On which events this workflow should be triggered. We can use this as an array as well (on: [push, pull_request, issue])
jobs:
  run-shell-command:         # Name of the job 1
    runs-on: ubuntu-latest # Selecting a GitHub Hosted Runner (Here selected an ubuntu machine)
    steps:                      # Automated Steps of the job
      - name: echo a string   # Name of the Step 1 (Optional)
        run: echo "Hello"     # command of the step 1
      - name: multiline commands  # Name of the Step 2 
        run: |                    # Multiline commands of the step 2
          node -v
          npm -v
      - name: cloning repo files into the vm   # Consuming pre published actions from the marketplace
        uses: actions/checkout@v2.3.4          # Signature of the action you want to use here from the market place
```
