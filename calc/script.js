const calculator = document.querySelector(".calc");
const buttons = calculator.querySelector(".calc_btns");
const operator = document.querySelector(".operator");
const display = document.querySelector(".calc_view");

function calculate(n1, operator, n2) {
  let result = 0;

  // 더하기
  if (operator === "+") {
    result = Number(n1) + Number(n2);
  }

  // 빼기
  if (operator === "-") {
    result = Number(n1) - Number(n2);
  }

  // 곱하기
  if (operator === "*") {
    result = Number(n1) * Number(n2);
  }

  // 나누기
  if (operator === "/") {
    result = Number(n1) / Number(n2);
  }

  return result;
}

let firstNum = "";
let operatorResult = "";
let previousKey = "";
let previousNum = "";

buttons.addEventListener("click", function (e) {
  const target = e.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      //클릭된 요소가 name class일 경우
      if (display.textContent === "0" && operatorResult === "") {
        display.textContent = buttonContent;
        firstNum = display.textContent; //첫번째 숫자를 변수에 할당
      }
      // 계산기 숫자가 현재 0이고, 계산 버튼이 안눌린 상태
      else if (display.textCont !== "0" && operatorResult === "") {
        display.textContent = display.textContent + buttonContent;
        firstNum = display.textContent;
      } else if (display.textContent !== "0" && operatorResult !== "") {
        if (previousKey === operatorResult) {
          display.textContent = buttonContent;
          previousKey = display.textContent;
          //직전 값을 변수에 할당
          previousNum = display.textContent;
        } else if (previousKey !== operatorResult) {
          display.textContent = display.textContent + buttonContent;
          previousNum = display.textContent;
        }
      }
    }
    // operator 클릭시
    if (action === "operator") {
      operatorResult = buttonContent;
      previousKey = operatorResult;
    }
    //AC버튼 클릭시
    if (action === "clear") {
      display.textContent = "0";
      firstNum = "";
      previousNum = "";
      operatorResult = "";
      previousKey = "";
    }
    if (action === "calculate") {
      //계산 버튼 누를때 (enter)
      if (firstNum !== "" && operatorResult === "") {
        display.textContent = calculate(
          display.textContent,
          operatorResult,
          display.textContent
        );
      } else if (previousKey === display.textContent) {
        display.textContent = calculate(firstNum, operatorResult, previousNum);
      } else if (previousKey !== display.textContent && previousNum !== "") {
        display.textContent = calculate(
          display.textContent,
          operatorResult,
          previousNum
        );
      } else if (previousKey !== display.textContent && previousNum === "") {
        display.textContent = firstNum;
      }
    }
  }
});
