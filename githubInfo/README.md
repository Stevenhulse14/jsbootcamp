````markdown
# How to Push Code to GitHub with a Personal Access Token on a Shared Machine

Avoid mixing up credentials on school computers by using **HTTPS** and a **Personal Access Token (PAT)**. Below you’ll find step-by-step guidance, plus tips for both macOS and Windows, **drop-down sections**, and helpful resource links. ✨

---

## Table of Contents

1. [Generate a Personal Access Token](#generate-a-personal-access-token)
2. [Configure Git to Avoid Saving Credentials](#configure-git-to-avoid-saving-credentials)
3. [Pushing to GitHub (macOS)](#pushing-to-github-macos)
4. [Pushing to-GitHub (Windows)](#pushing-to-github-windows)
5. [Cleaning Up After Each Session](#cleaning-up-after-each-session)
6. [Additional Tips](#additional-tips)

---

## Generate a Personal Access Token

1. Go to [GitHub Settings ⚙️](https://github.com/settings/profile).
2. On the left panel, click **Developer settings**.
3. Click **Personal access tokens** (or **Personal access tokens (classic)**).
4. Click **Generate new token** and give it a clear name (e.g. `SchoolComputerPAT`).
5. Enable the **repo** scope (or whichever scope you need).
6. **Generate** the token, then **copy** and keep it private! (You won’t see it again after leaving the page.)

> **Helpful Link**: [Creating a personal access token (classic) – GitHub Docs 🚀](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

## Configure Git to Avoid Saving Credentials

By default, Git might store credentials in a credential manager. On a shared machine, **we don’t want that**. Disable it:

```bash
git config --global --unset credential.helper
```
````

You can run this command on **macOS** or **Windows** (via Git Bash / PowerShell).

- If Git complains there's nothing to unset, you're already good to go.

Additionally, you can configure your author info per project:

```bash
cd /path/to/your/repo
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

This ensures commits are attributed to you, not another student.

---

## Pushing to GitHub (macOS)

<details>
<summary>Click to expand macOS instructions 🍎</summary>

1. **Open Terminal** (found in `Applications > Utilities > Terminal`).
2. Navigate to your project directory:
   ```bash
   cd /path/to/your/repo
   ```
3. If you haven't set a remote yet:

   ```bash
   git remote add origin https://github.com/<USERNAME>/<REPO>.git
   ```

   Replace `<USERNAME>` and `<REPO>` with your actual GitHub username and repository name.

4. **Add and commit** your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
5. **Push** to GitHub using HTTPS:

   ```bash
   git push origin main
   ```

   Replace `main` with your branch name if necessary (e.g. `master` or `dev`).

6. When prompted:

   - **Username** = your GitHub username
   - **Password** = your Personal Access Token

7. Since we unset the credential helper, your token won’t be stored. Next time you push, you’ll be prompted again.

</details>

---

## Pushing to GitHub (Windows)

<details>
<summary>Click to expand Windows instructions 💻</summary>

1. **Open Git Bash**, **Command Prompt**, or **PowerShell**.
2. Navigate to your project folder:
   ```bash
   cd "C:\path\to\your\repo"
   ```
3. If you haven’t set a remote yet:
   ```bash
   git remote add origin https://github.com/<USERNAME>/<REPO>.git
   ```
4. **Add and commit** your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
5. **Push** to GitHub:
   ```bash
   git push origin main
   ```
6. When prompted:

   - **Username** = your GitHub username
   - **Password** = your Personal Access Token

7. Make sure the Windows Credential Manager doesn’t store your credentials. (We already unset `credential.helper`, but double-check in **Control Panel > User Accounts > Credential Manager**.)

</details>

---

## Cleaning Up After Each Session

1. **Unset local user info** in your repository (optional but recommended):
   ```bash
   git config --unset user.name
   git config --unset user.email
   ```
2. **Remove any stored credentials** if they exist:
   - **macOS**: Open **Keychain Access** and remove any entries for `github.com`.
   - **Windows**: Open **Credential Manager** > **Windows Credentials** and remove any GitHub entries.

> This prevents the next student from accidentally pushing commits under your GitHub account.

---

## Additional Tips

- **Use ephemeral accounts**: If your school can set up user accounts that reset after logoff, that’s ideal.
- **Try GitHub Classroom**: If you’re teaching, [GitHub Classroom 🎉](https://classroom.github.com/) can simplify assignment distribution and submission.
- **Explore cloud-based IDEs**: [GitHub Codespaces ☁️](https://docs.github.com/en/codespaces) or [Replit 🌐](https://replit.com/) can bypass local credential issues entirely.
- **GitHub CLI**: The [GitHub CLI 👩‍💻](https://cli.github.com/) can handle tokens more gracefully. Just remember to sign out after each session on a shared machine.

---
