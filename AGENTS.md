# AGENTS.md

This repository is a baseline for reproducing Sveltia CMS issues.

Use `main` as the clean starter branch.
Create one branch per reproduction.
Keep each branch focused on a single issue.
Prefer the smallest possible config and content changes that still reproduce the problem.
Do not rewrite the general starter unless the task is to improve the baseline itself.

Project-specific notes:

- The CMS config is served from [`src/pages/config.json.ts`](/src/pages/config.json.ts).
- The main reusable entry collection lives in [`src/content/entry-collection`](/src/content/entry-collection).
- The file collection example is a single todo-list file at [`src/content/file-collection/todo-list.json`](/src/content/file-collection/todo-list.json).
- The homepage mounts Sveltia CMS directly from [`src/pages/index.astro`](/src/pages/index.astro).

Official Sveltia CMS docs:

- Getting Started: https://sveltiacms.app/en/docs/start
- Astro Integration Guide: https://sveltiacms.app/en/docs/frameworks/astro
- Configuration Basics: https://sveltiacms.app/en/docs/config-basics
- Collections Overview: https://sveltiacms.app/en/docs/collections
- Entry Collections: https://sveltiacms.app/en/docs/collections/entries
- File Collections: https://sveltiacms.app/en/docs/collections/files
- Test Backend: https://sveltiacms.app/en/docs/backends/test
- Troubleshooting: https://sveltiacms.app/en/docs/troubleshooting

Docs source:

- `https://sveltiacms.app/llms.txt`
