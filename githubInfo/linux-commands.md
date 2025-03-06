## `linux-commands.md`

```markdown
# Linux Commands Cheat Sheet

A quick reference for common Linux commands and their basic usage.

## Table of Contents

1. [Navigation and Directory Operations](#navigation-and-directory-operations)
2. [File Management](#file-management)
3. [File Viewing and Editing](#file-viewing-and-editing)
4. [System Information and Monitoring](#system-information-and-monitoring)
5. [Permissions and Ownership](#permissions-and-ownership)

---

## Navigation and Directory Operations

| Command          | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `pwd`            | Prints the current working directory.                       |
| `cd <directory>` | Changes to the specified directory.                         |
| `ls`             | Lists the files and directories in the current directory.   |
| `ls -l`          | Lists the files and directories in a long format (details). |
| `ls -a`          | Lists **all** files (including hidden files).               |
| `cd ..`          | Moves one directory **up** (to the parent directory).       |

---

## File Management

| Command                     | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| `touch <filename>`          | Creates an empty file or updates timestamp if it exists. |
| `mkdir <dirname>`           | Creates a new directory.                                 |
| `cp <source> <destination>` | Copies a file or directory to a new location.            |
| `mv <source> <destination>` | Moves (renames) a file or directory.                     |
| `rm <filename>`             | Removes (deletes) a file.                                |
| `rm -r <directory>`         | Removes a directory **and** its contents recursively.    |

---

## File Viewing and Editing

| Command                             | Description                                                            |
| ----------------------------------- | ---------------------------------------------------------------------- |
| `cat <filename>`                    | Displays the entire contents of a file.                                |
| `more <filename>`                   | Shows file content page by page (press space to continue).             |
| `less <filename>`                   | Similar to `more`, but allows backward movement with arrow keys.       |
| `head <filename>`                   | Displays the first 10 lines of a file (use `head -n <num>` to change). |
| `tail <filename>`                   | Displays the last 10 lines of a file (use `tail -n <num>` to change).  |
| `nano <filename>`                   | Opens a simple text editor in the terminal.                            |
| `vi <filename>` or `vim <filename>` | Opens the Vi/Vim editor (more advanced text editing).                  |

---

## System Information and Monitoring

| Command    | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| `whoami`   | Shows the current logged-in username.                                 |
| `uname -a` | Displays system information (kernel name, version, etc.).             |
| `top`      | Monitors running processes and system resource usage in real-time.    |
| `ps aux`   | Lists all running processes with detailed information.                |
| `df -h`    | Shows disk usage of all mounted filesystems in human-readable format. |
| `free -h`  | Displays memory usage (RAM) in human-readable format.                 |

---

## Permissions and Ownership

| Command                       | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `chmod <permissions> <file>`  | Changes the file or directory permissions (e.g., `chmod 755 script.sh`). |
| `chown <user>:<group> <file>` | Changes the owner and group of a file (requires `sudo` if not root).     |
| `ls -l`                       | Shows file permissions, ownership, and other details.                    |

---

### Additional Resources

- **Linux Documentation**: [https://www.kernel.org/doc/html/latest/](https://www.kernel.org/doc/html/latest/)
- **GNU Core Utilities**: [https://www.gnu.org/software/coreutils/manual/](https://www.gnu.org/software/coreutils/manual/)
```

---
