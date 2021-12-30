function add() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let sum = Number(first) + Number(second);
  document.querySelector("#answerHTML").value = sum;
}

function subtract() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let sum = Number(first) - Number(second);
  document.querySelector("#answerHTML").value = sum;
}

function multiply() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let sum = Number(first) * Number(second);
  document.querySelector("#answerHTML").value = sum;
}

function divide() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let sum = Number(first) / Number(second);
  document.querySelector("#answerHTML").value = sum;
}
function remainder() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let sum = Number(first) % Number(second);
  document.querySelector("#answerHTML").value = sum;
}


// Now i want to use constructor and factory functions to implement the same
