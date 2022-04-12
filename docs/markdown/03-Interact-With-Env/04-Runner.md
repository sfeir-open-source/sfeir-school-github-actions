<!-- .slide: class="with-code" -->
# Github Runner

* GitHub-hosted
  * quicker, simpler way to run your workflows

```yaml
    runs-on: [ubuntu-latest]
```
<!-- .element: class="big-code" -->

<br/>

* Self-hosted
  * highly configurable way to run workflows

```yaml
    runs-on: [self-hosted, linux, ARM64]
```
<!-- .element: class="big-code" -->


Notes: 

1 job = 1 Runner

# GitHub-hosted runners:

* Receive automatic updates for the operating system, preinstalled packages and tools, and the self-hosted runner application.
* Are managed and maintained by GitHub.
* Provide a clean instance for every job execution.
* Use free minutes on your GitHub plan, with per-minute rates applied after surpassing the free minutes.

# Self-hosted runners:

* Receive automatic updates for the self-hosted runner application only, though you may disable automatic updates of the runner. 
* You are responsible for updating the operating system and all other software.
* Can use cloud services or local machines that you already pay for.
* Are customizable to your hardware, operating system, software, and security requirements.
* Don't need to have a clean instance for every job execution.
* Are free to use with GitHub Actions, but you are responsible for the cost of maintaining your runner machines.

##==##
<!-- .slide: -->
# Virtual environment available

| Virtual environment  |        YAML workflow label         |           Notes |
| :------------------- | :--------------------------------: | --------------: |
| Windows Server 2022  | `windows-latest` or `windows-2022` | `latest` = 2022 |
| Windows Server 2019  |            windows-2019            |                 |
| Ubuntu 20.04         | `ubuntu-latest` or `ubuntu-20.04`  |                 |
| Ubuntu 18.04         |           `ubuntu-18.04`           |                 |
| macOS Big Sur 11     |    `macos-latest` or `macos-11`    |   `latest` = 11 |
| macOS Catalina 10.15 |           `macos-10.15`            |                 |

##==##
<!-- .slide: -->
# Hardware and Pricing

| Virtual environment    |  CPU  |   RAM | SSD Disk space |
| :--------------------- | :---: | ----: | -------------: |
| Ubuntu / Window Server | 2 CPU |  7 GB |          14 GB |
| MacOS                  | 3 CPU | 14 GB |          14 GB |


<br/>


* Free for public repository or 2000 min/month (**Free plan**)

<br/>
<br/>

| Operating system | Minute multiplier |
| :--------------- | :---------------- |
| Linux            | 1                 |
| macOS            | 10                |
| Windows          | 2                 |

##==##
<!-- .slide: class="with-code" -->

# Preinstalled software

* [Ubuntu 20.04.4 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-Readme.md): 

```
Bash 5.0.17(1)-release
Node 16.14.2
Python3 3.8.10
Helm 3.8.1
Pip 20.0.2
... 
```

* Customize tools

```yaml
    - name: Install jq tool
    run: |
        sudo apt-get update
        sudo apt-get install jq
```

Notes: 
apt-get, brew, choco etc
