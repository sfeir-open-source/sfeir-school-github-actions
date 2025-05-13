<!-- .slide: -->
# Cache

"*Use caching when you want to reuse files that don't change often between jobs or workflow runs.*"

* Embedded cache

  * npm, yarn, pnpm	=> setup-node
  * pip, pipenv |	setup-python
  * gradle, maven |	setup-java
  * ruby gems |	setup-ruby
  * go.sum | 	setup-go

* Explicit cache
  * use `actions/cache`

Notes:

##==##
<!-- .slide: -->

# Cache

## actions/cache

![float-right h-200](./assets/images/action_cache.png)

* Provided by GitHub
* Cache directories, path, or pattern
* Restore cache based on the key
  * partially restore key with restore-keys
* Upload new cache in case of no exact match
* Delete by UI or API

<br/>
<br/>

* Limitations 
  * 10 Go in a repository
  * 7 days without access

Notes:

##==##
<!-- .slide: class="with-code"-->

# Cache

## Code

```yaml[]
- name: Cache node modules
  uses: actions/cache@v4
  env:
    cache-name: cache-node-modules
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm
    key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-build-${{ env.cache-name }}-
      ${{ runner.os }}-build-
      ${{ runner.os }}-
```

Notes:

##==##
<!-- .slide: -->

# Cache

## cache miss

![center h-800](./assets/images/workflow-run-with-cache-miss.png)

Notes:

##==##
<!-- .slide: -->

# Cache

## cache hit

![center h-800](./assets/images/workflow-run-with-cache-hit.png)

Notes:
