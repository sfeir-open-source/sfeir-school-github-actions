<!-- .slide: class="with-code" -->
# Interact with GitHub

GitHub provides a token to interact with the GitHub API

- Automatically generated for each job
- Default permissions (RO) for **current repository**

```yaml[]
job:
  job1:
    permissions:
      actions: read|write|none
      checks: read|write|none
      ...
      issues: read|write|none
```
- It's a secret ! `${{ secrets.GITHUB_TOKEN }}`
- **Doesn't trigger new workflows**

Notes:

Can configure restrictive or permissive mode at org/repo level <br/>
if not enough, create a PAT(personal access token) token <br/>
GITHUB_TOKEN expires when a job finishes or after a maximum of 24 hours. <br/>
