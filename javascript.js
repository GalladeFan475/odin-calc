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
  let result = `0`;
  let operator = ``;
  let num1 = ``;
  let num2 = ``;
  let operatorCount = 0;
  const screen = document.querySelector(".text");

  const one = document.querySelector(".one");
  one.addEventListener("click", clickOne);

  const two = document.querySelector(".two");
  two.addEventListener("click", clickTwo);

  const three = document.querySelector(".three");
  three.addEventListener("click", clickThree);

  const four = document.querySelector(".four");
  four.addEventListener("click", clickFour);

  const five = document.querySelector(".five");
  five.addEventListener("click", clickFive);

  const six = document.querySelector(".six");
  six.addEventListener("click", clickSix);

  const seven = document.querySelector(".seven");
  seven.addEventListener("click", clickSeven);

  const eight = document.querySelector(".eight");
  eight.addEventListener("click", clickEight);

  const nine = document.querySelector(".nine");
  nine.addEventListener("click", clickNine);

  const zero = document.querySelector(".zero");
  zero.addEventListener("click", clickZero);

  const plus = document.querySelector(".plus");
  plus.addEventListener("click", clickPlus);

  const minus = document.querySelector(".minus");
  minus.addEventListener("click", clickMinus);

  const multiply = document.querySelector(".multiply");
  multiply.addEventListener("click", clickMultiply);

  const divide = document.querySelector(".divide");
  divide.addEventListener("click", clickDivide);

  const equal = document.querySelector(".equal");
  equal.addEventListener("click", clickEqual);

  const cancel = document.querySelector(".cancel");
  cancel.addEventListener("click", clickCancel);

  const backspace = document.querySelector(".backspace");
  backspace.addEventListener("click", clickBack);

  const decimal = document.querySelector(".decimal");
  decimal.addEventListener("click", clickDecimal);

  function clickOne() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `1`;
        screen.textContent = num2;
      } else {
        num1 += `1`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `1`;
      screen.textContent = num2;
    }
  }

  function clickTwo() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `2`;
        screen.textContent = num2;
      } else {
        num1 += `2`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `2`;
      screen.textContent = num2;
    }
  }

  function clickThree() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `3`;
        screen.textContent = num2;
      } else {
        num1 += `3`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `3`;
      screen.textContent = num2;
    }
  }

  function clickFour() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `4`;
        screen.textContent = num2;
      } else {
        num1 += `4`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `4`;
      screen.textContent = num2;
    }
  }

  function clickFive() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `5`;
        screen.textContent = num2;
      } else {
        num1 += `5`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `5`;
      screen.textContent = num2;
    }
  }

  function clickSix() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `6`;
        screen.textContent = num2;
      } else {
        num1 += `6`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `6`;
      screen.textContent = num2;
    }
  }

  function clickSeven() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `7`;
        screen.textContent = num2;
      } else {
        num1 += `7`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `7`;
      screen.textContent = num2;
    }
  }

  function clickEight() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `8`;
        screen.textContent = num2;
      } else {
        num1 += `8`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `8`;
      screen.textContent = num2;
    }
  }

  function clickNine() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `9`;
        screen.textContent = num2;
      } else {
        num1 += `9`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `9`;
      screen.textContent = num2;
    }
  }

  function clickZero() {
    if (operatorCount === 0) {
      if (num1 === result) {
        num2 += `0`;
        screen.textContent = num2;
      } else {
        num1 += `0`;
        screen.textContent = num1;
      }
    } else {
      screen.textContent = ``;
      num2 = num2 + `0`;
      screen.textContent = num2;
    }
  }

  function clickPlus() {
    if (screen.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      screen.textContent = result;
      operator = `+`;
      operatorCount = 0;
    } else {
      result = screen.textContent;
      result = result + "+";
      screen.textContent = result;
      operatorCount++;
      operator = `+`;
    }
  }

  function clickMinus() {
    if (screen.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      screen.textContent = result;
      operator = `-`;
      operatorCount = 0;
    } else {
      result = screen.textContent;
      result = result + "-";
      screen.textContent = result;
      operatorCount++;
      operator = `-`;
    }
  }

  function clickMultiply() {
    if (screen.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      screen.textContent = result;
      operator = `*`;
      operatorCount = 0;
    } else {
      result = screen.textContent;
      result = result + "*";
      screen.textContent = result;
      operatorCount++;
      operator = `*`;
    }
  }

  function clickDivide() {
    if (screen.textContent === ``) {
    } else if (operatorCount == 1 && num1 !== `` && num2 !== ``) {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      screen.textContent = result;
      operator = `/`;
      operatorCount = 0;
    } else {
      result = screen.textContent;
      result = result + "/";
      screen.textContent = result;
      operatorCount++;
      operator = `/`;
    }
  }

  function clickEqual() {
    if (num1 === `` || num2 === ``) {
    } else if (operator === `/` && num2 === `0`) {
      screen.textContent = "bodoh";
      num1 = ``;
      num2 = ``;
      operatorCount = 0;
    } else {
      result = operate(num1, num2, operator);
      num1 = result;
      num2 = ``;
      operatorCount = 0;
      screen.textContent = num1;
      console.log(num1);
    }
  }

  function clickCancel() {
    num1 = ``;
    num2 = ``;
    result = ``;
    operator = ``;
    operatorCount = 0;
    screen.textContent = ``;
  }

  function clickBack() {
    if (num1 === ``) {
    } else {
      if (operatorCount === 0) {
        if (num1.length <= 1) {
          num1 = ``;
          screen.textContent = num1;
        } else {
          num1 = String(num1);
          num1 = num1.substring(0, num1.length - 1);
          if (num1 !== ``) {
            num1 = parseFloat(num1);
          }
          screen.textContent = num1;
        }
      } else {
        if (num2 !== ``) {
          if (num2.length <= 1) {
            num2 = ``;
            screen.textContent = num2;
          } else {
            num2 = String(num2);
            num2 = num2.substring(0, num2.length - 1);
            if (num2 !== ``) {
              num2 = parseFloat(num2);
            }
            screen.textContent = num2;
          }
        }
      }
    }
  }

  function clickDecimal() {
    if (operatorCount === 0) {
      if (num1 === result) {
        if (num2.indexOf(".") === -1) {
          // Checks if num2 already has a decimal
          if (num2 === "") {
            num2 = "0.";
          } else {
            num2 += ".";
          }
          screen.textContent = num2;
        }
      } else {
        if (num1.indexOf(".") === -1) {
          // Checks if num1 already has a decimal
          if (num1 === "") {
            num1 = "0.";
          } else {
            num1 += ".";
          }
          screen.textContent = num1;
        }
      }
    } else {
      if (num2.indexOf(".") === -1) {
        // Checks if num2 already has a decimal
        if (num2 === "") {
          num2 = "0.";
        } else {
          num2 += ".";
        }
        screen.textContent = num2;
      }
    }
  }

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
      case `+`:
        clickPlus();
        break;
      case `-`:
        clickMinus();
        break;
      case `*`:
        clickMultiply();
        break;
      case `/`:
        clickDivide();
        break;
      case `Enter`:
        clickEqual();
        break;
      case `Escape`:
        clickCancel();
        break;
      case `Backspace`:
        clickBack();
        break;
      case `.`:
        clickDecimal();
        break;
      default:
        console.log("other key pressed");
    }
  }
}

function operate(num1, num2, operator) {
  num1 = String(num1);
  num2 = String(num2);
  if (
    num1.indexOf(".") === num1.length - 1 ||
    num2.indexOf(".") === num2.length - 1
  ) {
    return "ERROR";
  }
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
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
