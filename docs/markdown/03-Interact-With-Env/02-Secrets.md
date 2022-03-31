<!-- .slide: class="with-code" -->
# Secrets 

![float-left h-600](./assets/images/secrets.png)

- Encrypted storage
- Hidden from log

<div style="display: flex">

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
<!-- .element: class="big-code" -->

</div>

Notes: 

1,000 organization secrets, 100 repository secrets, and 100 environment secrets.
size limit 64 KB 
Préco (Gaet): utiliser un outil tiers pour stocker des secrets et les injecter par une action 

only alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed.
unique at the level
no starting with the GITHUB_ prefix.
no starting with a number.
no case-sensitive.

