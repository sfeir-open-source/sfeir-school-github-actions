<!-- .slide: class="with-code" -->

# GitHub Runner

* [**GitHub-hosted**](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
  * quicker, simpler way to run your workflows

```yaml[]
    runs-on: [ubuntu-latest]
```

<!-- .element: class="big-code" -->

<br/>

* Self-hosted
  * highly configurable way to run workflows

```yaml[]
    runs-on: [self-hosted, linux, ARM64]
```

<!-- .element: class="big-code" -->

Notes:

1 job = 1 Runner
Azure / MacOS Github Cloud
Ip on demand via API


##==##
<!-- .slide: -->

# Virtual environments available

| Virtual environment |        YAML workflow label         |           Notes |
|:--------------------|:----------------------------------:|----------------:|
| Windows Server 2025 | `windows-latest` or `windows-2025` | `latest` = 2025 |
| Windows Server 2022 |            windows-2022            |                 |
| Ubuntu 24.04        | `ubuntu-latest` or `ubuntu-24.04`  |                 |
| Ubuntu 22.04        |           `ubuntu-22.04`           |                 |
| macOS Ventura 13    |             `macos-13`             | arm64 available |
| macOS Sonoma 14     |             `macos-14`             | arm64 available |
| macOS Sequoia 15    |    `macos-15` or `macos-latest`    | arm64 available |

Notes:

##==##
<!-- .slide: -->

# Hardware and Pricing

| Virtual environment                      | CPU (AVG) | RAM (AVG) | SSD Disk space |
|:-----------------------------------------|:---------:|----------:|---------------:|
| Ubuntu / Windows Server (public repos)   |  4 vCPU   |     16 GB |          14 GB |
| Ubuntu / Windows Server (private repos)  |  2 vCPU   |      7 GB |          14 GB |
| MacOS                                    |   3 CPU   |     14 GB |          14 GB |

<br/>

* [**Billing**](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
  * Free for public repository or 2000 min/month for **Free plan**

<br/>
<br/>

| Operating system | Minute multiplier |
|:-----------------|:------------------|
| Linux            | 1                 |
| macOS            | 10                |
| Windows          | 2                 |

Notes:

Billing summary on workflow or usage report at organization level

##==##
<!-- .slide: class="with-code" -->

# Preinstalled software

* [**Ubuntu 24.04 LTS**](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md):

```
Bash 5.2.21(1)-release
Node.js 20.19.5
Perl 5.38.2
Python 3.12.3
Ruby 3.2.3
...
```

* Customize tools

```yaml[]
    - name: Install jq tool
      run: |
          sudo apt-get update
          sudo apt-get install jq
```

Notes:

apt-get, brew, choco etc
