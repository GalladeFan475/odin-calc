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
    num2 = num2 + `0`;
    screen.textContent = num2;
  }
}

function clickPlus() {
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
}

function clickMinus() {
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
}

function clickMultiply() {
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
}

function clickDivide() {
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
}

function clickEqual() {
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
}

function clickCancel() {
  num1 = ``;
  num2 = ``;
  result = ``;
  operator = ``;
  operatorCount = 0;
  display.textContent = ``;
}

function clickBack() {
  if (num1 === ``) {
  } else {
    if (operatorCount === 0) {
      if (num1.length <= 1) {
        num1 = ``;
        display.textContent = num1;
      } else {
        num1 = String(num1);
        num1 = num1.substring(0, num1.length - 1);
        if (num1 !== ``) {
          num1 = parseFloat(num1);
        }
        display.textContent = num1;
      }
    } else {
      if (num2 !== ``) {
        if (num2.length <= 1) {
          num2 = ``;
          display.textContent = num2;
        } else {
          num2 = String(num2);
          num2 = num2.substring(0, num2.length - 1);
          if (num2 !== ``) {
            num2 = parseFloat(num2);
          }
          display.textContent = num2;
        }
      }
    }
  }
}

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

  function clickDecimal(){
    if(operator === 0){
      if(num1 === result){
        if(num2.includes(`.`)){}
        else{
          num2 += `.`
          screen.textContent = num2;
        }
      }
      else{
        if(num1.includes(`.`)){}
        else{
        num1 += `.`;
        screen.textContent = num1;
        }
      }
    }
    else{
      if(num.includes(`.`)){}
      else{
        num2 += `.`;
        screen.textContent = num1;
      }
    }
  }

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

  function clickDecimal() {
    if (operatorCount === 0) {
      if(num1 === result){
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
      else{
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