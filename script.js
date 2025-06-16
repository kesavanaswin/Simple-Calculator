let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    display.value = eval(display.value) || '0';
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1000);
  }
}

// Keyboard input handling
document.addEventListener('keydown', (event) => {
  const key = event.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '(', ')'];
  
  if (validKeys.includes(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape' || key === 'c' || key === 'C') {
    clearDisplay();
  }
});
