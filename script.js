const checkboxes = [...document.querySelectorAll('.check-item input')];
const progress = document.querySelector('#progress');
const progressLabel = document.querySelector('#progress-label');
const progressPercent = document.querySelector('#progress-percent');
const progressMessage = document.querySelector('#progress-message');

function updateProgress() {
  const complete = checkboxes.filter((checkbox) => checkbox.checked).length;
  progress.value = complete;
  progress.textContent = `${complete} of ${checkboxes.length} complete`;
  progressLabel.textContent = progress.textContent;
  progressPercent.textContent = `${Math.round(complete / checkboxes.length * 100)}%`;
  progressMessage.textContent = complete === checkboxes.length
    ? 'You did it! Your first cloud project is out in the world.'
    : 'Every great project starts with a first step.';
}
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', updateProgress));
updateProgress();

const greetings = [
  'Hello! Your cloud adventure starts here.',
  'You brought the idea. Codex helped bring it to life.',
  'Look at you—building your first website in the cloud!',
  'Small steps, real progress. Keep exploring!'
];
let greetingIndex = 0;
document.querySelector('#greeting-button').addEventListener('click', () => {
  greetingIndex = (greetingIndex + 1) % greetings.length;
  document.querySelector('#greeting').textContent = greetings[greetingIndex];
});


const themeToggle = document.querySelector('#theme-toggle');
function applyTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
}
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('cloud-lab-theme');
} catch {
  // The toggle still works when browser storage is unavailable.
}
applyTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme !== 'dark';
  applyTheme(isDark);
  try {
    localStorage.setItem('cloud-lab-theme', isDark ? 'dark' : 'light');
  } catch {
    // Storage is optional; the current page retains the selected theme.
  }
});


const cloudButton = document.querySelector('#cloud-button');
const cloudResult = document.querySelector('#cloud-result');
cloudButton.addEventListener('click', async () => {
  cloudButton.disabled = true;
  cloudResult.dataset.state = 'loading';
  cloudResult.textContent = 'Checking cloud…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('/api/hello', {
      cache: 'no-store',
      signal: controller.signal
    });
    if (!response.ok) throw new Error('API unavailable');
    const data = await response.json();
    if (data?.ok !== true || typeof data.message !== 'string' ||
        typeof data.serverTime !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data.serverTime) ||
        !Number.isFinite(Date.parse(data.serverTime))) {
      throw new Error('Unexpected API response');
    }
    cloudResult.dataset.state = 'live';
    cloudResult.textContent = `LIVE — ${data.message} · UTC server time: ${data.serverTime}`;
  } catch {
    cloudResult.dataset.state = 'unavailable';
    cloudResult.textContent = 'Cloud API unavailable. This feature needs the Cloudflare Worker API; GitHub Pages and local HTML previews are static. You can keep exploring the site or try again.';
  } finally {
    clearTimeout(timeout);
    cloudButton.disabled = false;
  }
});
