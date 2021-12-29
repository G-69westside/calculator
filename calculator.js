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
