<!-- .slide: class="with-code" -->
# Interact with Github

Github provide a token to interact with Github

- automatically generated for each job
- Default permissions (RW/ RO) for **current repository**

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  ...
  issues: read|write|none
```
- it's a secret ! `${{ secrets.GITHUB_TOKEN }}`
- **Don't trigger new workflow**

Notes: 
Can configure restrictive or permissive mode at org/repo level
if not enough, create a PAT(personal access token) token 

