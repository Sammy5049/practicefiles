function name() {
  var fullname = "Adebola Seun";
  function nice(name) {
    return "MR." + name;
  }
  return nice(fullname);
}

function objtonee() {
  var a = 30;

  function add(b) {
    return a + b;
  }
  console.log(add(70), add(120));
}

var engine = {
  book: "one",
  laptop: "hp",
  water: "bottled",
  earbud: "anker",
  phone: "samsung",
  town: "Ibadan",
  ant: "spider",
};

function runmyexpression() {
  var a = 43;

  function add() {
    var minor = "the new cab";
    return minor;
  }

  return add();
}

function Laptop(x, user, address, number) {
  this.x = x;
  this.user = user;
  this.address = address;
  this.number = number;
}

var laptop1 = new Laptop(29, "Adeola", "Califonia", 2838010293);
var laptop2 = new Laptop(10, "Adeola", "Lagos", 923932049);

var laptop3 = new Laptop(25, "Adeola", "Ogun", 082804810);
var laptop4 = new Laptop(3, "James", "Ibadan", 83948290392);
console.log(laptop1, laptop2, laptop3, laptop4);

var manFrom = "Nigeria";
height = "160m";
color = "black";
 dive = "goat";

if (manFrom === "London") {
  console.log("Return to your Country");
} else if ((manFrom === "Newyork" && height === "160m") || color === "white") {
  console.log("He is a white man...");
} else {
  console.log("He is clear, pass him in");
}



let n = 2;
tunde = "";
i = 0;
while(i <= 10) {
  tunde += " The Number is " + n + " x " + i + " = " + n * i + "<br>";
  i++;
}
  document.getElementById("long").innerHTML= 'Multiplication Table for 2.'
  document.getElementById("you").innerHTML = tunde;

  let y = 5;
joy = "";

for(let i=0; i<= 10; i++) {

  joy += y + " x " + i + " = " + y * i + "<br>"; 
}
document.getElementById("short").innerHTML= 'Multiplication Table for 5.'
document.getElementById("five").innerHTML = joy;




const human = {
  firstname: "Dammy",
  lastname: "Adeola",
  appear : function(){

    document.getElementById("damo").innerHTML = this.firstname + " " + this.lastname;
  }
}
 let tommy = human.appear.bind(human);
  setTimeout(tommy, 3000)

const describe = {
  color : "Black",
  age : 28,
  package : function()
  {
    document.getElementById("dami").innerHTML = this.color + " " + this.age + " years old";
  }
}


  let james = describe.package.bind(describe);
  setTimeout(james, 4000)
 
  function myCalc() {
      const message = document.getElementById("p1");
      message.innerHTML = "";
      let x = document.getElementById("dano").value;
      const pass = [1,2,3,4]
      const passage = [1,2,3,4,5,6,7,8]


      try { 
        if (x == "") throw " is Empty";
        if (isNaN(x)) throw "is not a number";
        if (x<5) throw "not accepted";
        if (x>10) throw "  not accepted";
        
      } catch (err) {
        message.innerHTML ="Password " + err;
      }
      finally {

        document.getElementById("dano").value= "";
      }


  }

function validate() {

  let user = document.forms["myForm"]["userguy"].value;
  let email = document.forms["myForm"]["email"].value;
  let pnumber = document.forms["myForm"]["number"].value;
  let pword = document.forms["myForm"]["passcode"].value;

  if(user== null || user == ""){
     document.getElementById("userguy").innerHTML = ' Username must be filled';
    return false;
  }
   else if(!isNaN(user)){
    document.getElementById("userguy").innerHTML = ' Username must be alphabet or alpha~numeric';
    return false;
  }

  else if(email == ""){
    document.getElementById("email").innerHTML = ' Email must be filled';
    return false;
  }

  else if (pnumber== "") {
    document.getElementById("phone").innerHTML = ' Phone number must be filled';
    return false;
  }

   else if (isNaN(pnumber)) {

    document.getElementById("phone").innerHTML = ' Input is not a number';
    return false;

  }
  else if (pword.length<6)
  {
     document.getElementById("passcode").innerHTML = ' Password min is 6 characters';
    return false;

  }
   else if (pword.length>10)
  {
     document.getElementById("passcode").innerHTML = ' Password max is 10 characters';
    return false;

  }

/*fsfisignsogun */


  
  


}






 const fruit = [ "Mango", "Orange", "Pawpaw", "Apple","Banana"] ;
 wale = "";
 for(i=0; i<fruit.length; i++) {
  wale += "The Number " + i + " fruit name is " + fruit[i] + "<br>";
 }
 document.getElementById('me').innerHTML = wale;




let element = document.getElementsByName("cssProp");

let magg = document.getElementById("modify");

function drive() {
  for (let i = 0; i < element.length; i++) {
    let att = element[i].getAttribute("id");
    let cssstyle = element[i].value;

    magg.style[att] = cssstyle;
  }
}



function creactParagraph () {
  let brad = document.querySelector(".biggy");
  const paragraph = document.createElement('p');
  paragraph.append('Focus have just created a new paragraph, delete')
  brad.appendChild(paragraph);

}













