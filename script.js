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
