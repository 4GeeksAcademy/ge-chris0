/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  // Define arrays of words to use in the excuse
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  // Select a random item from each array
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  // Combine selected items to form the excuse
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  // Display the generated excuse in the HTML element with id "excuse"
  document.getElementById("excuse").innerText = excuse;
}

window.onload = function() {
  const button = document.getElementById("excusebutton");
  button.onclick = generateExcuse;
};
