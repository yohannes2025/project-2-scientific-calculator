// Helper function to evaluate a mathematical expression using math.js 
// math.js is available globally
function evaluateExpression(expression) { 
  try { 
    if (typeof math !== "undefined") {
      return math.evaluate(expression);
    } else {
      throw new Error("Math.js is not defined");      
    }
  } catch (error) { 
    console.error("Error evaluating expression:", error); 
    throw new Error("Evaluation Error: Invalid expression");    
  }
}

//Add event listener for the display and the buttons
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  //Add event listener for angleMode
  const angleModeElements = document.getElementsByName("angleMode");

  let currentValue = ""; // Current value being entered  
  let angleMode = "degree"; // Default angle mode
  let memoryValue = 0; // Variable to store memory value

  // Function to reset the workspace to the initial state
  function resetWorkspace() {
    currentValue = ""; // Reset the current value
    display.value = "0"; // Reset the display to "0"
    angleMode = "degree"; // Reset angle mode to "degree"
  }

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

// Function to evaluate the expression and update the display
  function calculateResult() {
    try{
       const convertedValue = currentValue
      
      .replace(/x/g, "*") 
      .replace(/÷/g, "/") 
      .replace(/%/g, "*0.01")   
      .replace(/π/g, "pi")         
      .replace(/Rand/g, "random()")       
      .replace(/(\d+)!/g, (match, number) => factorial(Number(number)))

      .replace(/sqrt\(([^)]+)\)/g, (match, p1) => { const arg = evaluateExpression(p1); 
        if (arg < 0) throw new Error("Square Root Error: Negative number"); 
        return `sqrt(${arg})`; 
        })

        .replace(/log\(([^)]+)\)/g, (match, p1) => { 
          const arg = evaluateExpression(p1); 
          if (arg <= 0) throw new Error("Logarithm Error: Non-positive number"); 
          return `log10(${arg})`; 
        }) 
        .replace(/ln\(([^)]+)\)/g, (match, p1) => { 
          const arg = evaluateExpression(p1); 
          if (arg <= 0) throw new Error("Natural Logarithm Error: Non-positive number"); 
          return `log(${arg})`;
        })

      //Regular expression taken from google
      .replace(/sin\(([^)]+)\)/g, (match, p1) => `sin(${convertAngle(evaluateExpression(p1))})`) 
      .replace(/cos\(([^)]+)\)/g, (match, p1) => `cos(${convertAngle(evaluateExpression(p1))})`) 
      .replace(/tan\(([^)]+)\)/g, (match, p1) => `tan(${convertAngle(evaluateExpression(p1))})`);
                 
        const result = evaluateExpression(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    } catch(error){
      console.error("Error evaluating expression:", error); 
      display.value = "ERROR: " + error.message; 
      currentValue = "";
    }   
      
  }
 

  // Add click event listener for each button 
  for (let i = 0; i < buttons.length; i++) { 
  const button = buttons[i]; 
  button.addEventListener("click", handleButtonClick); 
  } 

    // Function to handle button clear, backspace and memory keys
  function handleButtonClick() { 
    const value = this.innerText;
    if (value == "AC") {
      resetWorkspace(); 
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
  }
  
  // Event listener for angle mode toggle
  Array.from(angleModeElements).forEach((element) => {
    element.addEventListener("change", function (event) {
      angleMode = event.target.value;
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
      resetWorkspace(); // Reset workspace on Escape key
    }
  });

});


