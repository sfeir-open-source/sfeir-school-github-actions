<!-- .slide: class="with-code" -->
# Interact with Github 

- Automatically generated token for each job
- Expire when job finish (or after 24h)
- Default permissions (RW/ RO) for current repository
- Override permissions in job or workflow
- Don't trigger new workflow
- **it's a secret !**

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  deployments: read|write|none
  issues: read|write|none
  
jobs:
  myjob:
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```

Notes: 
Can configure restrictive or permissive mode at org/repo level
if not enough, create a PAT(personal access token) token 

