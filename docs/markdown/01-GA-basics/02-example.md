<!-- .slide: class="with-code" -->
# Example

```yaml[]
name: learn-github-actions          # Name of the workflow
on: [push]                          # On which events this workflow should be triggered. We can use this as an array as well (on: [push, pull_request, issue])
jobs:
  check-bats-version:               # Name of the job 1
    runs-on: ubuntu-latest          # Selecting a GitHub Hosted Runner (Here selected an ubuntu machine)
    steps:                          # Automated Steps of the job
      - name: Check out repository  # Name of the Step (Optional)
        uses: actions/checkout@v6   # Signature of the action you want to use here from the market place
      - name: Install Node.js  
        uses: actions/setup-node@v6 
        with:
          node-version: '20'        # Input node version 
      - name: Install bats
        run: npm install -g bats    # command of the step 1
      - name: Run bats
        run: bats -v
```

Notes:

##==##
<!-- .slide: class="with-code" -->
# Example

![center](./assets/images/overview-actions-event.png)

Notes:
