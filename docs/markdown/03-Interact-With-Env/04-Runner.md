<!-- .slide: -->
# Github Runner

* GitHub-hosted
  * quicker, simpler way to run your workflows

* Self-hosted
  * highly configurable way to run workflows

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

| Virtual environment  |        YAML workflow label         |                                                                           Notes |
| :------------------- | :--------------------------------: | ------------------------------------------------------------------------------: |
| Windows Server 2022  | `windows-latest` or `windows-2022` | The `windows-latest` label currently uses the Windows Server 2022 runner image. |
| Windows Server 2019  |            windows-2019            |                                                                                 |
| Ubuntu 20.04         | `ubuntu-latest` or `ubuntu-20.04`  |                                                                                 |
| Ubuntu 18.04         |           `ubuntu-18.04`           |                                                                                 |
| macOS Big Sur 11     |    `macos-latest` or `macos-11`    |                The macos-latest label currently uses the macOS 11 runner image. |
| macOS Catalina 10.15 |           `macos-10.15`            |                                                                                 |

##==##
<!-- .slide: -->
# Hardware specification

<br>

## Windows and Linux virtual machines

* 2-core CPU
* 7 GB of RAM memory
* 14 GB of SSD disk space
<br>
<br>
<br>
<br>

## MacOS virtual machines

* 3-core CPU
* 14 GB of RAM memory
* 14 GB of SSD disk space


##==##
<!-- .slide: class="with-code" -->

# Preinstalled software

Ubuntu 20.04.4 LTS: 

* Bash 5.0.17(1)-release
* Node 16.14.2
* Python3 3.8.10
* Helm 3.8.1
* Pip 20.0.2
* ...

```yaml
    - name: Install jq tool
    run: |
        sudo apt-get update
        sudo apt-get install jq
```

Notes: 
apt-get, brew, choco etc

##==##
<!-- .slide: class="with-code" -->

# Usage

Using default labels to route jobs

* self-hosted - Run this job on a self-hosted runner.
* linux - Only use a Linux-based runner.
* ARM64 - Only use a runner based on ARM64 hardware.

```yaml
    runs-on: [self-hosted, linux, ARM64]
```

Using custom labels to route jobs

* self-hosted - Run this job on a self-hosted runner.
* linux - Only use a Linux-based runner.
* x64 - Only use a runner based on x64 hardware.
* gpu - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.


```yaml 
runs-on: [self-hosted, linux, x64, gpu]
```
