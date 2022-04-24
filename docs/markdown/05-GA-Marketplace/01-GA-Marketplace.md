<!-- .slide: -->
# What is the marketplace

* List of free and paid tools
* GitHub Actions and Apps
* Anyone can share their apps
* Anyone can publish an action in GitHub Marketplace

Notes:
ex paid : https://github.com/marketplace/wip
* only apps owned by organizations can sell their app

##==##
# Risk 

* Credential stealing
  * Opportunistic
  * Intentional
* Any maintainer can update a branch or a tag

Notes :
Opportunistic - sensitive information is accidentally output to the log and an attacker finds it and uses it
Intentional - an attacker is able to insert a program into your workflow that steals credentials and sends them to the attacker
Use SHA-1 instead of version 

##==##
# How to use

* https://github.com/marketplace?type=actions

![float-left w-800](./assets/images/githubsearch.png)

![float-right w-800](./assets/images/githubaction_marketplace_action.png)

##==## 
<!-- .slide: class="with-code"-->

# Use an GitHub Action from the marketplace

## Using versioned actions

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: actions/checkout@v3
  # Reference a specific version
  - uses: actions/checkout@v3.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

<br>
<br> 

## Using a public action

`{owner}/{repo}@{ref}`

```yaml
- name: Inject slug/short variables
  uses: rlespinasse/github-slug-action@v4
  with:
    short-length: 8
```

