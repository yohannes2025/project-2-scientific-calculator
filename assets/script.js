//Add event listener for the display and the buttons
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

  function calculate() {
    const convertedValue = currentValue
      .replace("x", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("π", "Math.PI")
      .replace("e", "Math.PI")
      .replace("^", "**")
      .replace("sqrt", "Math.sqrt")
      .replace("Rand", "Math.random()")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("tan", "Math.tan")
      .replace("ln", "Math.log")
      .replace("log", "Math.log10");
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  //Add click event listener for each button
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;
      //if AC key is clicked clear the display or make it empty
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "=") {
        calculate();
      } else {
        currentValue += value;
        display.value = currentValue; //set the innerText of the button to current value and then display it.
      }
    });
  }
});
