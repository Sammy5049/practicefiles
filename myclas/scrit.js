function showMe() {
  
var val1 = parseInt(document.querySelector("#value1").value);
var val2 = parseInt(document.querySelector("#value2").value);
var operate = document.querySelector("#operate").value;
var calculate;

 if(operate == "add") {
   calculate = val1 + val2;
 }
 else if (operate == "subt") {
  calculate = val1 - val2
 }

 else if (operate == "divide") {
  calculate = val1 / val2
 }

 else if (operate == "mult") {
  calculate = val1 * val2
 }
 else if (operate == "percent") {
  calculate = (val1/100) * val2
 }
 document.querySelector("#result").innerHTML = calculate;

}


let greetings = document.querySelector(".head");
let jumb = document.querySelector("#modify");
let newWord = document.createElement('h3');
let newDay = document.createElement('div');
let inDoor = document.createElement("h3");
let outDoor = document.createElement("p");

newDay.appendChild(inDoor);
newDay.appendChild(outDoor);
let newTime = document.createElement('h3');
newWord.style.color = "blue";
newDay.style.cssText = "color:green; display:flex; ";

let today = new Date();
let getTime = today.getHours();

let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ". " ;

let timeToday = getTime + " : " + today.getMinutes() + " :" + today.getSeconds()+ " " + " | " ;



let greet;

 if (getTime >= 0 && getTime < 10) {
  greet = " Focus, Good Morning!";
  newWord.style.color = "red";
  newDay.style.cssText = "color:brown; ";
  jumb.style.background = "pink";
}
else if (getTime >= 10 && getTime < 12) {
  greet = " Focus, Good Day!";
  newWord.style.color = "white";
  newDay.style.cssText = "color:green; ";
}
else if (getTime >= 12 && getTime < 18) {
  greet = " Focus, Good Afternoon!";
}
else if (getTime >= 18 && getTime < 22) {
  greet = " Focus, Good Evening!";
}
else if (getTime >= 22 && getTime < 0 ) {
greet = " Focus, Good Night!";
}
else {
  greet = "What planet are you from! :o";
  newWord.style.color = "purple";
}
newWord.append(greet);


inDoor.append("TIME: " + timeToday)
inDoor.append("DATE: " + date)


greetings.appendChild(newWord);

greetings.appendChild(newDay);



console.log(greet);







function Bash (age, name, color,) {

    this.age = age;
    this.name = name;
    this.color = color;
    this.updateAge = function (){
     return ++this.age;
    };
}

let bash01 = new Bash("27", "Adeola", "Black")

console.log(bash01.updateAge());



let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");

let menuStatus = false;
menu.style.marginLeft = "-300px";

function menuToggle (e) {
  e.preventDefault();
  if (menuStatus == false) {
menu.style.marginLeft = "0px";
menuStatus = true;
}

else if (menuStatus == true) {
menu.style.marginLeft = "-300px";
menuStatus = false;
}

}

menuBtn.addEventListener("click", menuToggle);



const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
