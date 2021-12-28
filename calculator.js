function userinput() {
  let first = document.querySelector("#first").value;
  let second = document.querySelector("#second").value;
  let c = first + second;
  let answer = document.querySelector("#answerHTML").value;
  answer.forEach((output) => {
    output.textContent = c;
  });


}
