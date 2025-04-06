This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Repository Template

## Git conventions to follow for working on the project

Source (in french): [conventions_git.docx](https://epitechfr-my.sharepoint.com/:w:/r/personal/arthur_lefrancois_epitech_eu/_layouts/15/Doc.aspx?sourcedoc=%7BFAF1372D-4F0E-48FB-853C-8E1A11E3B0F0%7D&file=proposition_conventions_git.docx&action=default&mobileredirect=true).

### Architecture and release

There are three types of branches:

- **Task branches**: detailed below.

- **Main**: corresponds to the production version if necessary, otherwise to the development version.

- **Dev**: present only if a production version exists; it helps avoid critical changes on the main branch, which is sensitive.

### Branch creation

The branch should be created from the dev branch if present, otherwise from the main branch.

The branch title must follow this convention:

#### Basic rules

1. Do not use accents (this causes Jira integration issues).

2. Replace spaces with underscores ‘\_’.

3. Follow this structure: `{prefix}/{Jira card ID}-{card title}`.

4. Do not use double dashes (‘\_\_’ or ‘--‘).

5. Do not end the branch title with a dash.

#### Prefixes

**feat**: for new features.

**fix**: for bug fixes.

**docs**: for documentation.

**tests**: for tests.

**other**: for exceptions.

If the branch includes an environment modification (such as adding a new library) that requires action from other developers (installing the new library), please add a ‘!’ at the end of the prefix.

### Commits

There is no strict naming convention for commits, just make sure they are clear.

### Development pull requests

#### Creation

You can create a pull request in ‘draft’ status as soon as the branch is created, or wait until the task is complete to create a pull request in ‘ready’ status.

The title of a pull request must follow the same name as the branch (except underscores ‘\_’ can be replaced with spaces).

[!WARNING]
(! If your branch contains only one commit, the pull request will not automatically take the branch name!)

For a pull request to be in ‘ready’ status, several conditions must be met:

1. The task is fully completed.

2. The developed code is correctly formatted.

3. The code passes the tests.

4. The code is rebased onto _dev_ (or _main_ if _dev_ does not exist) (no merge).

[!TIP]
A tutorial on rebasing a branch is available here: [Git rebase | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase).

#### Description

[!IMPORTANT]
If a pull request template is available, please follow it.

#### Merge

A pull request can only be merged after approval by another developer and must be squashed (squash & merge). The merge description must be CLEAR AND PRECISE.

After merging the branch, the Jira card can be marked as ‘done’.

### Production pull requests

They follow the same pattern as development pull requests, except that the name of the pull request corresponds to the release version name.

Production pull requests are always made from dev to main.

### Jira card exceptions

In rare cases, a branch can be created without a Jira card (minor formatting fixes, variable renaming, etc.). In this case, use the ‘other’ prefix in the branch name (without specifying a Jira card). All other rules still apply.

#### Example branch names
