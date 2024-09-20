let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = '0';
}

function deleteChar() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
