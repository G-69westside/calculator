let first = document.querySelector("#first");
let second = document.querySelector("#second");
let c = first + second;
let answer = document.querySelector("#answer");

// answer.forEach((output) => {
//   output.textcontent = c;
// });
answer.array.forEach(function (output) {
  output.textContent = c;
});
