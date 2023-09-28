const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.value;

    switch (value) {
      case "clear":
        display.value = "";
        break;
      case "backspace":
        display.value = display.value.slice(0, -1);
        break;
      case "negate":
        display.value = -display.value;
        break;
      case "=":
        display.value = calculate(display.value);
        break;
        case "%":
          let result = calculate(display.value);
          result /= 100;
          display.value = result;
          break;
      default:
        display.value += value;
        break;
    }
  });
});
    
     

function calculate(expression) {
  let result = 0;
  let numbers = [];
  let operations = [];
  let number = "";

  for (let char of expression) {
    if (!isNaN(char) || char === ".") {
      number += char;
    } else {
      numbers.push(parseFloat(number));
      number = "";
      operations.push(char);
    }
  }
  numbers.push(parseFloat(number));

  result = numbers[0];
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    let number = numbers[i + 1];
    switch (operation) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
       
    }
  }

  return result;
}
