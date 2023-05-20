const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const equal = document.getElementById("equal")

function factorial (number){
    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    else if (number === 0) {
        return number
    }
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
       return fact
    }
}
let temp
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      temp = eval((display.innerText));
      display.innerText = parseFloat((temp).toFixed(9))
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if(display.innerText!="" && item.id =="lg"){
        temp = Math.log10(display.innerText);
        display.innerText = parseFloat((temp).toFixed(9))
    }else if(display.innerText!="" &&item.id =="x!"){
        temp = factorial(display.innerText);
        display.innerText = parseFloat((temp).toFixed(9))
    }else if(display.innerText!="" &&item.id =="√"){
        temp = Math.sqrt(display.innerText);
        display.innerText = parseFloat((temp).toFixed(9))
    }else if(display.innerText!="" &&item.id =="1/x"){
        temp = eval(1/display.innerText);
        display.innerText = parseFloat((temp).toFixed(9))
    }
    else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};