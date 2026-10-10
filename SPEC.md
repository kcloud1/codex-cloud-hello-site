# Specification

Status: ACTIVE

## Objective and authority
Deliver My First Codex Cloud Website in kcloud1/codex-cloud-hello-site under the user's accepted intent. Authorized: repository documentation, static implementation, browser validation, branch push, and one PR. User requests publishing through their saved GitHub Pages source; The user explicitly authorized adding dark mode in PR #1 and merging into main in the follow-up. Hosting-setting changes remain outside agent authority.

## Acceptance
- Welcome explains Codex Cloud; three steps cover Create GitHub Repo → Start Codex Cloud → Review and Publish.
- A header toggle switches light/dark themes and remembers the preference when browser storage is available.
- Checklist updates a visible, accessible progress indicator; button changes a greeting.
- Readable desktop/mobile design using only index.html, style.css, and script.js.
- Preserve the original request in prompts/first-site.md; concise usage/publishing README.
- Small browser smoke check and screenshot; no test framework, CI, dependencies, or infrastructure.

## Stop gates
Stop for repository mismatch, failed required validation, or scope/authority expansion. No hosting-setting mutation, secrets, or destructive actions.
