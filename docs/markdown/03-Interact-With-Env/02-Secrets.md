<!-- .slide: class="with-code" -->
# Secrets 

![float-right w-800](./assets/images/secrets.png)

- Encrypted storage
- Hidden from log


use in action: 

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
```

use in bash :

```yaml
steps:
  - shell: bash #pwsh #cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```


Notes: 

1,000 organization secrets, 100 repository secrets, and 100 environment secrets.
size limit 64 KB 
Préco (Gaet): utiliser un outil tiers pour stocker des secrets et les injecter par une action 

only alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed.
unique at the level
no starting with the GITHUB_ prefix.
no starting with a number.
no case-sensitive.

