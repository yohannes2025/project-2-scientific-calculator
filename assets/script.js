//Add event listener for the display and the buttons
document.addEventListener("DOMContentLoaded", function(){   
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");
    
    let currentValue = "";
    
    //Add click event listener for each button
    for (let i = 0; i <buttons.length; i++){
        const button = buttons[i];
        button.addEventListener("click", function(){
            const value = button.innerText;
            currentValue += value;
            display.value = currentValue;   //set the innerText of the button to current value and then display on the display
        });
        
    }
    
});