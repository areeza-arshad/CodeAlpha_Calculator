const display = document.getElementById('display');
const history = document.getElementById('history');

function displayValue(input) {
    display.value += input;
}
function deleteDisplay() {
    display.value = display.value.toString().slice(0, -1);
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression)
        display.value = result;

        history.innerHTML += `<p>${expression} = ${result}</p>`;
    } catch (error) {
        display.value = 'Error'
        console.error('Error while calculating', error)
    }
}