<!-- .slide:  -->
# Triggers

<br>

### Event List
* push, pull_request, schedule, issue, workflow_dispatch

[Exhaustive list float-right](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events)

### Use event attributes
```yaml
name: event-triggers-example
on:
  push:
    branches: # Filter which branch
      - 'main'
      - 'foo/*' # foo/folder1 and foo/folder2 not foo/folder1/subfolder1
      - 'foo/**' # foo/folder1 and foo/folder2 and foo/folder1/subfolder1
    tags: # Filter which tag
      - '*'
  pull_request:
    path: # Filter path modification
      - 'myapp'
  schedule:
    - cron: '*/15 * * * *'
jobs:
  my-awesome-job:
   ....
```
