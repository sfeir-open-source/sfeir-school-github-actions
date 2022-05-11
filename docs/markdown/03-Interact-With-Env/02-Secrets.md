<!-- .slide: class="two-column-layout with-code"-->
# Secrets 

##--##

* Encrypted storage
* Hidden from log

##--##
![](./assets/images/secrets.png)

Notes:

Gaetan <br/>
3 levels and uniques <br/>
64 KB size limit. <br/>
1,000 organization secrets, 100 repository secrets, and 100 environment secrets. <br/>
access 100 <br/>

only alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. <br/>
no starting with the GITHUB_ prefix. <br/>
no starting with a number. <br/>
no case-sensitive. <br/>

##==##
<!-- .slide: class="two-column-layout with-code"-->
# Secrets 


<br/><br/><br/><br/><br/><br/><br/><br/>

##--##

Secret in action: 

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
```

##--##

Secret in bash :

```yaml
steps:
  - shell: bash #pwsh #cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```

Notes: 

Gaetan <br/>
Préco (Gaet): utiliser un outil tiers pour stocker des secrets et les injecter par une action <br/>
secret.github_token dispo sans variable d'environnement


