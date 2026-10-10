# Specification

Status: ACTIVE

## Objective and authority
Extend the existing website with one Cloudflare Pages Function and GUI feedback under the owner-approved [issue #2](https://github.com/kcloud1/codex-cloud-hello-site/issues/2) and explicit user GO instruction. Authorized: repository implementation/docs, small local validation, branch push, and one cohesive PR. No merge or deployment; Cloudflare dashboard configuration belongs to the owner.

## Acceptance
- Welcome explains Codex Cloud; three steps cover Create GitHub Repo → Start Codex Cloud → Review and Publish.
- A header toggle switches light/dark themes and remembers the preference when browser storage is available.
- Checklist updates a visible, accessible progress indicator; button changes a greeting.
- Readable desktop/mobile design using only index.html, style.css, and script.js.
- Preserve the original request in prompts/first-site.md; concise usage/publishing README.
- GET /api/hello returns real JSON and UTC server time; Check cloud uses same-origin fetch with loading/unavailable states and text-safe rendering.
- Preserve GitHub Pages static behavior and all existing interactions.
- Small browser/function smoke checks; no test framework, CI, dependencies, or infrastructure.

## Stop gates
Stop for repository mismatch, failed required validation, or scope/authority expansion. No merge, deployment, hosting-setting mutation, secrets, or destructive actions.
