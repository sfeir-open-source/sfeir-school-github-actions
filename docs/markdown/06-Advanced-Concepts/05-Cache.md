<!-- .slide: class="with-code"-->
# Cache

"*Use caching when you want to reuse files that don't change often between jobs or workflow runs.*"

* Embedded cache

  * npm, yarn, pnpm	=> setup-node
  * pip, pipenv |	setup-python
  * gradle, maven |	setup-java
  * ruby gems |	setup-ruby

* Explicit cache
  * use `actions/cache`
