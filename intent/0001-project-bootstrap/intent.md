# Intent: First Codex Cloud website

Status: ACCEPTED
Owner: Repository owner
Acceptance evidence: User's original request explicitly says “My accepted intent”; follow-up confirms kcloud1/codex-cloud-hello-site and says “go ahead”.

## Desired outcome
Build my first small, working website entirely through Codex Cloud, with visual proof that natural-language instructions become working software without a local laptop or CLI.

## Scope and constraints
A responsive single page with a welcome, three learning steps, interactive checklist/progress, and greeting button. Plain HTML, CSS, JavaScript; no dependencies, server, database, login, CI, or infrastructure. Preserve the task prompt. One cohesive PR; no auto-merge or hosting-setting changes. The user has already saved GitHub Pages source settings.

## Verified facts and success evidence
The repository contains starter guidance but no website. Repository identity was corrected by the user to kcloud1/codex-cloud-hello-site. Validate using the available browser at desktop/mobile sizes and capture a screenshot; no automated test suite. Review and merge precede publishing through the existing Pages setup.

## Execution sequence
Initialize concise contracts → implement three static files → browser smoke check → open one PR. Rollback is reverting the site commit; keep the reusable prompt and review evidence.

## Accepted follow-up
The user explicitly requests a dark mode toggle in the same PR and merge into main. This supersedes the original no-merge boundary for PR #1; hosting settings remain unchanged.
