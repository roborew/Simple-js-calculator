const calcButtons = document.querySelectorAll('.calc-buttons')
const screen = document.querySelector('.screen')
let calcArray = []

calcButtons.forEach(element => {
    element.addEventListener('click', calculate, false)
});

function calculate(e) {
    const buttonVal = e.currentTarget.innerText
    switch (buttonVal) {
        case "C":
            clearScreen()
            calcArray = []
            break;
        case "←":
            removeLastNum()
            break;
        case "÷":
            updateCalcArray("/")
            break; 
        case "×":
            updateCalcArray("*")
            break;       
        case "-":
            updateCalcArray("-")
            break; 
        case "+":
            updateCalcArray(buttonVal)
            break;
        case "=":
            totalise()
            break;
        default:
            updateScreen(buttonVal)
            break;
    }
}

const manageCalcArray = (value) => {
    calcArray.push = value;
    return calcArray
}

const updateScreen = (value) => {
    if (parseInt(screen.innerText) === 0) {
        screen.innerText = value;
    } else {
        screen.innerText = screen.innerText + value;
    }
}

const clearScreen = () => {
    screen.innerText = 0
}

const removeLastNum = () => {
    screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1)
    if (screen.innerText.length === 0) {
        screen.innerText = 0
    }
}

const updateCalcArray = (symbol) => {
    if (screen.innerText != 0) {
        calcArray.push(parseInt(screen.innerText))
        calcArray.push(symbol)
        screen.innerText = 0
    }
}

const totalise = () => {
    calcArray.push(parseInt(screen.innerText))
    // Consider not using eval.
    const total = eval(calcArray.join(' '))
    calcArray = []
    screen.innerText = total
}