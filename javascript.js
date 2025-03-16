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

  function clickOne() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `1`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `1`;
      display.textContent = num2;
    }
  }
  const one = document.querySelector(".one");
  one.addEventListener("click", clickOne);

  function clickTwo() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `2`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `2`;
      display.textContent = num2;
    }
  }
  const two = document.querySelector(".two");
  two.addEventListener("click", clickTwo);

  function clickThree() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `3`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `3`;
      display.textContent = num2;
    }
  }
  const three = document.querySelector(".three");
  three.addEventListener("click", clickThree);

  function clickFour() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `4`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `4`;
      display.textContent = num2;
    }
  }
  const four = document.querySelector(".four");
  four.addEventListener("click", clickFour);

  function clickFive() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `5`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `5`;
      display.textContent = num2;
    }
  }
  const five = document.querySelector(".five");
  five.addEventListener("click", clickFive);

  function clickSix() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `6`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `6`;
      display.textContent = num2;
    }
  }
  const six = document.querySelector(".six");
  six.addEventListener("click", clickSix);

  function clickSeven() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `7`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `7`;
      display.textContent = num2;
    }
  }
  const seven = document.querySelector(".seven");
  seven.addEventListener("click", clickSeven);

  function clickEight() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `8`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `8`;
      display.textContent = num2;
    }
  }
  const eight = document.querySelector(".eight");
  eight.addEventListener("click", clickEight);

  function clickNine() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `9`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `9`;
      display.textContent = num2;
    }
  }
  const nine = document.querySelector(".nine");
  nine.addEventListener("click", clickNine);

  function clickZero() {
    if (operatorCount == 0) {
      //No operators pressed
      num2 = ``;
      num1 = num1 + `0`;
      display.textContent = num1;
    } else if (operatorCount) {
      num2 = num2 + `0`;
      display.textContent = num2;
    }
  }
  const zero = document.querySelector(".zero");
  zero.addEventListener("click", clickZero);

  const plus = document.querySelector(".plus");
  plus.addEventListener("click", () => {
    if (display.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      display.textContent = result;
      operator = `+`;
      operatorCount = 0;
    } else {
      result = display.textContent;
      result = result + "+";
      display.textContent = result;
      operatorCount++;
      operator = `+`;
    }
  });

  const minus = document.querySelector(".minus");
  minus.addEventListener("click", () => {
    if (display.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      display.textContent = result;
      operator = `-`;
      operatorCount = 0;
    } else {
      result = display.textContent;
      result = result + "-";
      display.textContent = result;
      operatorCount++;
      operator = `-`;
    }
  });

  const multiply = document.querySelector(".multiply");
  multiply.addEventListener("click", () => {
    if (display.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      display.textContent = result;
      operator = `*`;
      operatorCount = 0;
    } else {
      result = display.textContent;
      result = result + "*";
      display.textContent = result;
      operatorCount++;
      operator = `*`;
    }
  });

  const divide = document.querySelector(".divide");
  divide.addEventListener("click", () => {
    if (display.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      display.textContent = result;
      operator = `/`;
      operatorCount = 0;
    } else {
      result = display.textContent;
      result = result + "/";
      display.textContent = result;
      operatorCount++;
      operator = `/`;
    }
  });

  const equal = document.querySelector(".equal");
  equal.addEventListener("click", () => {
    if (num1 === `` || num2 === ``) {
    } else if (operator === `/` && num2 === `0`) {
      display.textContent = "bodoh";
      num1 = ``;
      num2 = ``;
      operatorCount = 0;
    } else {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      operatorCount = 0;
      display.textContent = num1;
      console.log(num1);
    }
  });

  const cancel = document.querySelector(".cancel");
  cancel.addEventListener("click", () => {
    num1 = ``;
    num2 = ``;
    result = ``;
    operatorCount = 0;
    display.textContent = ``;
  });

  const backspace = document.querySelector(".backspace");
  backspace.addEventListener("click", () => {
    if (num1 === ``) {
    } else {
      if (operatorCount === 0) {
        if (num1.length <= 1) {
          num1 = ``;
          display.textContent = num1;
        } else {
          num1 = num1.substring(0, num1.length - 1);
          display.textContent = num1;
        }
      } else {
        if (num2 !== ``) {
          if (num2.length <= 1) {
            num2 = ``;
            display.textContent = num2;
          } else {
            num2 = num2.substring(0, num2.length - 1);
            display.textContent = num2;
          }
        }
      }
    }
  });

  document.addEventListener("keydown", logKey);
  function logKey(e) {
    switch (e.key) {
      case `1`:
        clickOne();
        break;
      case `2`:
        clickTwo();
        break;
      case `3`:
        clickThree();
        break;
      case `4`:
        clickFour();
        break;
      case `5`:
        clickFive();
        break;
      case `6`:
        clickSix();
        break;
      case `7`:
        clickSeven();
        break;
      case `8`:
        clickEight();
        break;
      case `9`:
        clickNine();
        break;
      case `0`:
        clickZero();
        break;
      default:
        console.log("other key pressed");
    }
  }
}

function operate(num1, num2, operator) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operator === `+`) {
    return add(num1, num2);
  } else if (operator === `-`) {
    return subtract(num1, num2);
  } else if (operator === `*`) {
    return multiply(num1, num2);
  } else if (operator === `/`) {
    return divide(num1, num2);
  }
}

display();
