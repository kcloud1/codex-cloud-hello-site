# Environment

Status: READY

The website runs directly in a modern browser. No installation, build step, server, credentials, or external runtime dependencies are required. Implementation and preview use Codex Cloud. GitHub stores the source; the owner has saved GitHub Pages source settings. Publication occurs after owner review and merge.

Level 2 backend: Cloudflare Pages Functions runtime executes `functions/api/hello.js` with the standard Request/Response APIs. Static hosts do not execute it. Owner dashboard Git integration and actual Pages preview/production API verification are pending. No deployment credentials or local build dependencies are required by the repository.
