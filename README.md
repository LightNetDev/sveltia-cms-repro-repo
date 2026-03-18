# Sveltia CMS Repro Starter

This repository is a minimal Astro project meant to stay clean on `main` and act as the starting point for reproducing Sveltia CMS issues.

The baseline includes:
- A small Astro app that mounts Sveltia CMS at `/`
- A typed JSON config route at `/config.json`
- A reusable entry collection with a minimal editing surface
- A single file-collection example built as a todo list
- Sample content that can be edited or copied when creating issue-specific branches

## Intended Workflow

Treat `main` as the stable starter branch.

For each issue reproduction:
1. Create a new branch from `main`.
2. Make the smallest possible change set that reproduces one issue.
3. Record the exact steps, expected behavior, and actual behavior in the branch, commit message, PR, or issue report.
4. Share that branch or open a PR without folding unrelated fixes into it.

## Local Development

```sh
npm install
npm run dev
```

Open `http://localhost:4321/` to load the CMS.
Run `npm run check` for Astro diagnostics and `npm run build` to confirm the starter still builds.

## Project Layout

```text
/
├── AGENTS.md
├── README.md
├── src/
│   ├── content/
│   │   ├── entry-collection/
│   │   └── file-collection/
│   └── pages/
│       ├── config.json.ts
│       └── index.astro
└── package.json
```

Key files:
- `src/pages/config.json.ts`: the Sveltia CMS config served to the app
- `src/content/entry-collection/*.json`: starter entry data for entry-collection issues
- `src/content/file-collection/todo-list.json`: starter file-collection data for a simple list-based example
- `AGENTS.md`: repo-specific guidance for coding agents working on reproductions

## Official Docs

These links come from the Sveltia CMS docs index at `https://sveltiacms.app/llms.txt`.

- Getting Started: https://sveltiacms.app/en/docs/start
- Astro Integration Guide: https://sveltiacms.app/en/docs/frameworks/astro
- Configuration Basics: https://sveltiacms.app/en/docs/config-basics
- Collections Overview: https://sveltiacms.app/en/docs/collections
- Entry Collections: https://sveltiacms.app/en/docs/collections/entries
- File Collections: https://sveltiacms.app/en/docs/collections/files
- Troubleshooting: https://sveltiacms.app/en/docs/troubleshooting
