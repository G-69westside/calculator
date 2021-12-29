function myCalc() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  let sum = Number(first) + Number(second);
  document.getElementById("answerHTML").value = sum;
}
