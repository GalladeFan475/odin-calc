// Arithmetic functions
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
// Initialise variables
function display() {
  let result = ``;
  let operator = ``;
  let num1 = ``;
  let num2 = ``;
  let operatorCount = 0;
  const display = document.querySelector(".text");

  const one = document.querySelector(".one");
  one.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `1`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `1`;
      display.textContent = num2;
    }
  });

  const two = document.querySelector(".two");
  two.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `2`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `2`;
      display.textContent = num2;
    }
  });

  const three = document.querySelector(".three");
  three.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `3`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `3`;
      display.textContent = num2;
    }
  });

  const four = document.querySelector(".four");
  four.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `4`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `4`;
      display.textContent = num2;
    }
  });

  const five = document.querySelector(".five");
  five.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `5`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `5`;
      display.textContent = num2;
    }
  });

  const six = document.querySelector(".six");
  six.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `6`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `6`;
      display.textContent = num2;
    }
  });

  const seven = document.querySelector(".seven");
  seven.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `7`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `7`;
      display.textContent = num2;
    }
  });

  const eight = document.querySelector(".eight");
  eight.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `8`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `8`;
      display.textContent = num2;
    }
  });

  const nine = document.querySelector(".nine");
  nine.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `9`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `9`;
      display.textContent = num2;
    }
  });

  const zero = document.querySelector(".zero");
  zero.addEventListener("click", () => {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `0`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `0`;
      display.textContent = num2;
    }
  });
}

display();
