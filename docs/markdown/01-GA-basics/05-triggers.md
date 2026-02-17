<!-- .slide: class="with-code" -->
# Triggers

## [Event List](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

```yaml[]
on:
  push:
    branches: # Filter which branch
      - 'main'
      - 'foo/*' # foo/folder1 and foo/folder2 not foo/folder1/subfolder1
    tags: # Filter which tag
      - '*'
  pull_request:
    paths: # Filter path modification
      - 'myapp'
  schedule:
    - cron: '*/15 * * * *'
  issues:
    types:
      - opened
  workflow_dispatch:
```

Notes:

https://docs.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events)
