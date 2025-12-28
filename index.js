// Handle Button Clicks
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // lightblue in rgb format
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input
function displayKeyPress(event) {
  const keyPressDisplay = document.querySelector('#keyPressDisplay');
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input
function displayUserInput() {
  const textInput = document.querySelector('#textInput');
  const textInputDisplay = document.querySelector('#textInputDisplay');

  textInputDisplay.textContent =
    textInput.value ? `You typed: ${textInput.value}` : 'Your input will be displayed here.';
}

// Attach Event Listeners

function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Attach reset to the button to match the test
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};