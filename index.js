let bod = document.querySelector("#bdy");
elemGenrator(bod, 2, "div")
let div1 = document.querySelector("#bdy-div0");

elemGenrator(div1, 7, "button")
function elemGenrator(parEl, quanEl, typeEl){
  for(let i = 0; i< quanEl; i++){
    parEl.appendChild(document.createElement(`${typeEl}`)).setAttribute('id', `${parEl.getAttribute("id")}-${typeEl}${i}`)
  }
}

let btnId = "bdy-div0-button";

let proj1 = document.getElementById(`${btnId}0`)
proj1.textContent = "Question 1"
proj1.onclick = question1;
let proj2 = document.getElementById(`${btnId}1`)
proj2.textContent = "Question 2"
proj2.onclick = question2;
let proj3 = document.getElementById(`${btnId}2`)
proj3.textContent = "Question 3"
proj3.onclick = question3;
let proj4 = document.getElementById(`${btnId}3`)
proj4.textContent = "Question 4"
proj4.onclick = question4;
let proj5 = document.getElementById(`${btnId}4`)
proj5.textContent = "Question 5"
proj5.onclick = question5;
let proj6 = document.getElementById(`${btnId}5`)
proj6.textContent = "Question 6"
proj6.onclick = question6;
let proj7 = document.getElementById(`${btnId}6`)
proj7.textContent = "Question 7"
proj7.onclick = question7;


function question1(){

  let div1 = document.querySelector("#bdy-div1");

  //div1.removeChild("p");
  let pirate ="";
  let ninja ="";
  let wizard = "";
  for (let i = 1; i <= 77; i++){
    if (i % 3 === 0 && i % 5 ===0){
      wizard += `${i} `
    } else if (i % 3 === 0){
      pirate += `${i} `;
    } else if (i % 5 === 0) {
      ninja += `${i} `
    }
  }
  div1.textContent = `Pirate Numbers ${pirate} Ninja Numbers ${ninja} Wizard Numbers ${wizard}`;
}

function question2(){
  let div1 = document.querySelector("#bdy-div1");
  let oddNumTotal = 0;
  let evenNumTotal = 0;
  let evenCount = 1;
  let oddCount = 1;
  for (let i = 33; i <= 101; i++){
    if(i % 2 === 0){
      evenNumTotal += (i + evenCount);
      evenCount ++;
    } else {
      oddNumTotal += (i+(3 * oddCount));
      oddCount ++;
    }
  }
  div1.textContent = "Total of Odd Numbers: "+ oddNumTotal +"   " + "        Total of Even Numbers: " + evenNumTotal
}

function question3(){
  let div1 = document.querySelector("#bdy-div1");
  let numArray = [];
  let sortedArry = [];
  let notDupArrayIn = [];
  for (let i = 0; i < 33; i++){
    let rand = Math.floor(Math.random() * 99);
    numArray.push(rand);
  }
  sortedArry = [...numArray];
  sortedArry.sort(function (a, b) {return a-b});
  for(let i = 0; i < sortedArry.length; i++){
     if(sortedArry[i] !== sortedArry[i - 1]){
       notDupArrayIn.push(sortedArry[i]);
     }
  }
  div1.textContent = `Random Numbers Array: ${numArray}  Sorted Numbers Array: ${sortedArry} Unique Numbers Array: ${notDupArrayIn}`
}

function question4(){
  let div1 = document.querySelector("#bdy-div1");
  let randLe = "";
  for (let i = 0; i < 50; i++){
    let ranChar = String.fromCharCode(97 + Math.floor(Math.random()* 26));
    if((i+1) % 5 ===0){
      (i+1)%10 === 0  ? randLe += ranChar.toUpperCase() + " ": randLe += ranChar.toUpperCase();
    } else {
      randLe += ranChar;
    }
  }
  div1.textContent = randLe;
}

function question5() {
  let div1 = document.querySelector("#bdy-div1");
  let leapYears = [];
  for (let y = 1800; y <= 2500; y++) {
    if (y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0)) {
      leapYears.push(y);
    }
  }
  div1.textContent = `Leap Years from 1800 to 2500: ${leapYears.join(', ')}`;
}

function question6(){
  let div1 = document.querySelector("#bdy-div1");
  let input1 = parseInt(window.prompt("Enter 1st number :"));
  let input2 = parseInt(window.prompt("Enter 2th number :"));
  let input3 = parseInt(window.prompt("Enter 3th number :"));
  let numArray = [];
  let sortedArry = [];
  let notDupArrayIn = [];
  if((input1 >= 0 && input2 >= 0) && input3 >= 0){
    for (let i = 0; i < 100; i++){
      let rand = Math.floor(Math.random() * 100);
      numArray.push(rand);
    }
    sortedArry = [...numArray];
    sortedArry.sort(function (a, b) {return a-b});
    for(let i = 0; i < sortedArry.length; i++){
      if((sortedArry[i] !== sortedArry[i - 1]) && notDupArrayIn.length < 30){
        notDupArrayIn.push(sortedArry[i]);
      }
    }

    let matchedNum = 0;
    for(let i = 0; i < notDupArrayIn.length; i++){
      if (notDupArrayIn[i] === input1){
        matchedNum ++;
      } else if(notDupArrayIn[i] === input2){
        matchedNum ++;
      }else if(notDupArrayIn[i] === input3){
        matchedNum ++;
      }
    }

    if(matchedNum === 3 ){
      div1.textContent = `Congratulations! ${matchedNum} numbers matched.`
    } else if(matchedNum === 2 ){
      div1.textContent = `Congratulations! ${matchedNum} numbers matched.`
    } else {
      div1.textContent = `${matchedNum} number matched. Please try again!`
    }
  }
}

function question7() {
  let div1 = document.querySelector("#bdy-div1");
  let fabricArr = ["cotton", "linen", "velvet", "damask", "leather", "satin", "wool", "flannel", "brocade", "denim", "chiffon", "fleece", "muslin"];
  let colorArr = ["red", "pink", "black", "orange", "green", "purple", "navy", "brown", "yellow", "copper", "gold", "silver", "bronze"];

  let integArr = [];
  for (let i = 0; i < fabricArr.length; i++) {
    integArr.push(fabricArr[i]);
    integArr.push(colorArr[i]);
  }
  div1.textContent = 'Integrated Array: ' + integArr.join(', ');
}
