# My First Codex Cloud Website

A small interactive learning hub built entirely through Codex Cloud with plain HTML, CSS, and JavaScript.

## Use

Open `index.html` in a browser. Check and uncheck the three checklist items to update progress, then click **Say hello** to change the greeting. Use **Dark mode / Light mode** in the header to switch themes. The initial theme follows your device preference; your selection is remembered when browser storage is available. Checklist progress resets when the page is reloaded. No install or build is needed.

## Publish with GitHub Pages

Review and merge the website PR into `main`. With Pages already configured to deploy from `main` and `/ (root)`, GitHub publishes the static files automatically. Check **Settings → Pages → Visit site** for the actual published URL and **Actions** for deployment status.

Expected URL: https://kcloud1.github.io/codex-cloud-hello-site/

On the published page, confirm progress moves from 0% to 33%, 67%, and 100%; uncheck an item and click **Say hello** repeatedly. Try a narrow mobile window as well. If Pages uses a different source branch/folder, the owner must align it with these root files.

The original reusable task is in [prompts/first-site.md](prompts/first-site.md). Agent guidance starts at [AGENTS.md](AGENTS.md).


## Level 2: Cloudflare Pages API

**Check cloud** calls same-origin `GET /api/hello`. The Pages Function in `functions/api/hello.js` returns `ok`, `message`, and `serverTime` (UTC ISO 8601), with caching disabled. The button shows loading, then the actual response and UTC server time, or an unavailable message. GitHub Pages and local HTML remain static; all existing interactions still work.

In Cloudflare Dashboard, create a **Pages** application with **Git integration** for this repository: production branch `main`, framework **None**, build command `exit 0`, output directory `.`. The owner handles Git authorization and confirms settings. The existing `workers.dev` site is a Workers deployment; uploading static assets there does not execute this Pages Function. No account settings or deployments are changed by this PR.

Use the actual Pages PR preview URL shown by Cloudflare/GitHub to review before merging. If Git integration is not yet configured, configure Pages in the dashboard first. After owner-approved merge, check the actual production URL from the dashboard. No Cloudflare API deployment has been verified by this implementation.

Two manual browser checks:

1. **Frontend:** Open the actual Cloudflare Pages preview/production URL and GitHub Pages URL. Confirm greeting, checklist, and light/dark toggle still work (also on mobile). On GitHub Pages, **Check cloud** should show the helpful unavailable message.
2. **Backend:** On the actual Cloudflare Pages URL, click **Check cloud**: loading should be followed by **LIVE**, `Hello from Cloudflare Edge`, and UTC server time. Open `/api/hello` on that same origin to confirm JSON with `ok: true` and a current `serverTime`; click again to see fresh time. An unavailable message is not a backend pass.
