//////Chapter No 35-38//////
function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
formatAMPM();
document.write(formatAMPM());

function foo() {
var firstName = "Muddasir";
var lastName = "Farooq";
var fullName, firstName, lastName;
firstName = 'Muddasir';
lastName = 'Farooq';
fullName = 'FirstName' + 'LastName';
document.write("<br>" + fullName , firstName , lastName);
}
foo();


 function  calc(num1 , opt , num2){

         if(opt == "+"){
            return num1 + num2
        }
    }
var value = calc(num1 , opt , num2)
document.write("<br>" + num1 + " " + opt + " " + num2 + " " + "= " +value)
var num1 = +prompt("ENTER NUMBER 1")
var opt = prompt("ENTER opt")
var num2 = +prompt("ENTER NUMBER 2")

function multiplyBy()
{
        num1 = "firstNumber";
        num2 ="secondNumber";
        document.write(num1 * num2);
}
multiplyBy()

function divideBy() 
{ 
        num1 ="firstNumber";
        num2 ="secondNumber";
document.write(num1 / num2);
}
divideBy() 

var sumOfSquares = function (num) {
    var i,
      sum = 0;
  
    for (i = 1; i <= num; i += 1) {
      sum += i * i;
    }
    return sum;
  }
  
  var num = parseInt(prompt("Enter a number:"), 10);
console.log("The sum of squares for numbers up to and including " + num + " is " +
sumOfSquares(num)) ;

var userInput;
var num;
var i =1;
var fact;

function myFactor (num){    
  fact = num * i;
  for (i; i < num; i++) {
    fact = fact * i;
  }
  return fact
}

var result;
userInput = prompt("Enter Value:","");  
num = parseInt (userInput);         
result = myFactor(num);
document.write("<br>" + result);

function findHypotenuse(side1, side2){
 
    let h = (((side1 * side1) + (side2 * side2))**(1/2));
    return h;
}

let side1 = 3;
let side2 = 4;
 
document.write("<br>" + findHypotenuse(side1, side2).toFixed(2));

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("my name is muddasir"));

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('Muddasir', 'u'));