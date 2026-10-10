# My First Codex Cloud Website

A small interactive learning hub built entirely through Codex Cloud with plain HTML, CSS, and JavaScript.

## Use

Open `index.html` in a browser. Check and uncheck the three checklist items to update progress, then click **Say hello** to change the greeting. Use **Dark mode / Light mode** in the header to switch themes. The initial theme follows your device preference; your selection is remembered when browser storage is available. Checklist progress resets when the page is reloaded. No install or build is needed.

## Publish with GitHub Pages

Review and merge the website PR into `main`. With Pages already configured to deploy from `main` and `/ (root)`, GitHub publishes the static files automatically. Check **Settings → Pages → Visit site** for the actual published URL and **Actions** for deployment status.

Expected URL: https://kcloud1.github.io/codex-cloud-hello-site/

On the published page, confirm progress moves from 0% to 33%, 67%, and 100%; uncheck an item and click **Say hello** repeatedly. Try a narrow mobile window as well. If Pages uses a different source branch/folder, the owner must align it with these root files.

The original reusable task is in [prompts/first-site.md](prompts/first-site.md). Agent guidance starts at [AGENTS.md](AGENTS.md).


## Level 2: Cloudflare Worker API

**Check cloud** calls same-origin `GET /api/hello`. `worker.js` returns `ok`, `message`, and `serverTime` (UTC ISO 8601), with caching disabled. The button shows loading, then the actual response and UTC time, or an unavailable message. GitHub Pages/local HTML stay static; all existing interactions still work.

The existing Worker is `codex-cloud-hello-site`, at https://codex-cloud-hello-site.amitkarpe.workers.dev (reported working by the owner). No deployment config was previously committed. The minimal `wrangler.jsonc` targets that same Worker with `worker.js` as its entry point and the existing root frontend as an `ASSETS` binding. `/api/*` runs through the Worker first; other paths retain static asset handling. `.assetsignore` limits Worker asset uploads to `index.html`, `style.css`, and `script.js`. No Pages project or new dependency is needed.

Keep the existing Cloudflare Workers Git integration for this repository and Worker. After review and owner-approved merge/deployment, the existing Wrangler deploy command should read the root configuration. Confirm its working directory is the repository root and it does not override the entry point or asset directory. This PR does not change dashboard settings, merge, or deploy. The new live API has not been observed.

Two manual browser checks after owner-approved deployment:

1. **Frontend:** Open the Worker URL and GitHub Pages URL. Confirm greeting, checklist, and light/dark toggle still work (also on mobile). GitHub Pages **Check cloud** should show the helpful unavailable message.
2. **Backend:** On the Worker URL, click **Check cloud**: loading should be followed by **LIVE**, `Hello from Cloudflare Edge`, and UTC server time. Open https://codex-cloud-hello-site.amitkarpe.workers.dev/api/hello directly to confirm JSON with `ok: true` and a current `serverTime`; click again to see fresh time. An unavailable message is not a backend pass.
