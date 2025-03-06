Below are **two separate Markdown files**, each with its own content. One focuses on **Git commands**, the other on **Linux commands**. Feel free to adjust or expand them as needed!

---

## 1) `git-commands.md`

```markdown
# Git Commands Cheat Sheet

A quick reference for common Git commands and their purposes.

## Table of Contents

1. [Setup and Configuration](#setup-and-configuration)
2. [Creating and Cloning Repositories](#creating-and-cloning-repositories)
3. [Staging and Committing](#staging-and-committing)
4. [Branching and Merging](#branching-and-merging)
5. [Syncing with Remote](#syncing-with-remote)
6. [Inspecting and Debugging](#inspecting-and-debugging)

---

## Setup and Configuration

| Command                                  | Description                               |
| ---------------------------------------- | ----------------------------------------- |
| `git config --global user.name "Name"`   | Sets your Git username (global).          |
| `git config --global user.email "Email"` | Sets your Git email address (global).     |
| `git config --list`                      | Shows all current configuration settings. |

---

## Creating and Cloning Repositories

| Command                      | Description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `git init`                   | Initializes a new Git repository in the current directory.                                      |
| `git clone <repository-url>` | Downloads an existing repository from a remote location (e.g. GitHub) and creates a local copy. |

---

## Staging and Committing

| Command                    | Description                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| `git status`               | Shows the state of the working directory and staging area.                                        |
| `git add <file>`           | Stages a specific file for the next commit.                                                       |
| `git add .`                | Stages **all** changed files in the current directory and below.                                  |
| `git commit -m "message"`  | Commits the staged changes with a message describing what changed.                                |
| `git commit -am "message"` | Stages all tracked files and commits them in one step. (Note: untracked files won’t be included.) |

---

## Branching and Merging

| Command                         | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `git branch`                    | Lists all local branches. The `*` marks the current branch.         |
| `git branch <branch-name>`      | Creates a new branch off the current branch.                        |
| `git checkout <branch-name>`    | Switches to the specified branch.                                   |
| `git checkout -b <branch-name>` | Creates **and** switches to a new branch in one command.            |
| `git merge <branch-name>`       | Merges the specified branch into the current branch.                |
| `git branch -d <branch-name>`   | Deletes a local branch that has been merged or is no longer needed. |

---

## Syncing with Remote

| Command                              | Description                                                                |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `git remote -v`                      | Lists remote connections (e.g. `origin`).                                  |
| `git remote add origin <remote-url>` | Adds a remote repository (commonly named `origin`).                        |
| `git pull origin <branch>`           | Fetches and merges changes from the remote branch to local branch.         |
| `git push origin <branch>`           | Pushes local commits to the remote branch.                                 |
| `git push -u origin <branch>`        | Pushes and sets a remote branch as the default upstream for future pushes. |

---

## Inspecting and Debugging

| Command             | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `git log`           | Displays the commit history.                                                           |
| `git log --oneline` | Shows a more concise commit history (one commit per line).                             |
| `git diff`          | Shows changes between your working directory and the staging area, or between commits. |
| `git blame <file>`  | Shows which commit last modified each line of a file.                                  |
| `git show <commit>` | Shows changes for a specific commit (e.g. `git show 1a2b3c4`).                         |

---

### Additional Resources

- **Official Git Documentation**: [https://git-scm.com/docs](https://git-scm.com/docs)
- **Pro Git Book (Free)**: [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)
```

---
