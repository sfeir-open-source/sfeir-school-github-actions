<!-- .slide: class="with-code" -->
# Interact with Github

Github provide a token to interact with Github

- Automatically generated for each job
- Default permissions (RW/ RO) for **current repository**

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  ...
  issues: read|write|none
```
- It's a secret ! `${{ secrets.GITHUB_TOKEN }}`
- **Does'n't trigger new workflows**

Notes: 
Can configure restrictive or permissive mode at org/repo level
if not enough, create a PAT(personal access token) token 

