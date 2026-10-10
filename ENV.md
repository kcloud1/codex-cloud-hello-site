# Environment

Status: READY

The website runs directly in a modern browser. No installation, build step, server, credentials, or external runtime dependencies are required. Implementation and preview use Codex Cloud. GitHub stores the source; the owner has saved GitHub Pages source settings. Publication occurs after owner review and merge.

Level 2 backend: Cloudflare Workers runtime executes `worker.js`; static frontend uses the `ASSETS` binding configured in `wrangler.jsonc`. Target: existing `codex-cloud-hello-site` Worker. No Worker config was previously versioned. GitHub Pages remains static. Owner reports the existing workers.dev frontend works; the new deployed API remains unverified. No credentials or repository dependencies are added.
