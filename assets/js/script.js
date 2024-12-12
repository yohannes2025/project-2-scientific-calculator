//Add event listener for the display and the buttons
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  //Add event listener for angleMode
  const angleModeElements = document.getElementsByName("angleMode");

  let currentValue = ""; // Current value being entered  
  let angleMode = "degree"; // Default angle mode
  let memoryValue = 0; // Variable to store memory value

  

// Function to calculate factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error(
      "Factorial Error: Only non-negative integers are allowed"
    );
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Function to delete the last character from input
function deleteLast() {
  if (currentValue.length > 0) {
    currentValue = currentValue.slice(0, -1); // Remove the last character
    display.value = currentValue || "0"; // Update the display, default to "0" if empty
  }
}

// Function to convert angles based on the selected mode
function convertAngle(value) {
  if (angleMode === "degree") return (value * Math.PI) / 180; // Convert degrees to radians
  return value; // Radians (no conversion needed)
}

// Memory functions
function memoryAdd() {
  const value = parseFloat(currentValue || "0");
  memoryValue += value;
}

function memorySubtract() {
  const value = parseFloat(currentValue || "0");
  memoryValue -= value;
}

function memoryRecall() {
  currentValue = memoryValue.toString();
  display.value = currentValue;
}

function memoryClear() {
  memoryValue = 0;
}



  function calculateResult() {
    const convertedValue = currentValue
      
      .replace("x", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("π", "Math.PI")
      .replace("e", "Math.E")
      .replace("^", "**")
      .replace("sqrt", "Math.sqrt")
      .replace("Rand", "Math.random()")      
      .replace("log", "Math.log10")
      .replace("ln", "Math.log")
      .replace(/(\d+)!/g, (match, number) => factorial(Number(number)))

      //Regular expression taken from google
      .replace(
        /sin\(([^)]+)\)/g,
        (match, p1) => `Math.sin(${convertAngle(evaluateExpression(p1))})`
      )    
      .replace(
        /cos\(([^)]+)\)/g,
        (match, p1) => `Math.cos(${convertAngle(evaluateExpression(p1))})`
      )
      .replace(
        /tan\(([^)]+)\)/g,
        (match, p1) => `Math.tan(${convertAngle(evaluateExpression(p1))})`
      )

      // Helper function to evaluate a mathematical expression
      function evaluateExpression(expression) {
        return new Function("return " + expression)(); // Safely evaluate the expression
  }

      console.log("Converted Expression: ", convertedValue);
      
      try {
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
      } catch (error) {
        console.error("Error evaluating expression:", error);
        display.value = "Error";
      }
  }

  //Add click eventL tistener for each button
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;
      //if AC key is clicked clear the display or make it empty
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "=") {
        calculateResult();
      } else if (value === "⌫") {
        deleteLast();
      } else if (value === "M+") {
        memoryAdd();
        display.value = "Memory Added";
      } else if (value === "M-") {
        memorySubtract();
        display.value = "Memory Subtracted";
      } else if (value === "MR") {
        memoryRecall();
      } else if (value === "MC") {
        memoryClear();
        display.value = "Memory Cleared";
      } else {

        currentValue += value;
        display.value = currentValue; //set the innerText of the button to current value and then display it.
      }
    });
  }
  // Event listener for angle mode toggle
  angleModeElements.forEach((element) => {
    element.addEventListener("change", function (event) {
      angleMode = event.target.value;
      console.log("Angle Mode: ", angleMode);
      
    });    

  });

   // Add keyboard input functionality
   document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/().^%".includes(key)) {
      currentValue += key;
      display.value = currentValue;
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key === "Escape") {
      currentValue = "";
      display.value = currentValue;
    }
  });

});


