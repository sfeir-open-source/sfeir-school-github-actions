<!-- .slide: class="two-column"-->
# Secrets 

* Encrypted storage
* Hidden from log
* 3 levels
  * repository
  * environment
  * organization

##--##

![mr-200 mt-200 ](./assets/images/secrets.png)

Notes:

Gaetan <br/>
48 KB size limit. <br/>
1,000 organization secrets, 100 repository secrets, and 100 environment secrets. <br/>
access 100 <br/>

only alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. <br/>
no starting with the GITHUB_ prefix. <br/>
no starting with a number. <br/>
no case-sensitive. <br/>

##==##
<!-- .slide: class="two-column"-->

## Secret in action: 

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
```

##--##

## Secret in bash :

```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
      echo ${{ secrets.SuperSecret }}
```

Notes: 

Gaetan <br/>
Préco (Gaet): utiliser un outil tiers pour stocker des secrets et les injecter par une action <br/>
secret.github_token dispo sans variable d'environnement


