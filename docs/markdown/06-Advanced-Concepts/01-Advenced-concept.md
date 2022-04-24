<!-- .slide: class="with-code"-->
# if 

to get a boolean result :
* ==, !=, <, <=, >, >=, &&, || ,...

`if: ${{ <expression> }}`

<br>

```yaml 
 - name: My backup step
    if: ${{ failure() }}
    uses: actions/backupAction@1.0.0
```

##==##
<!-- .slide: class="with-code"-->
# Debug
![float-right w-800](./assets/images/debug_action.png)

`ACTIONS_STEP_DEBUG=true`

<br>

* View
* search
* delete
* download 


