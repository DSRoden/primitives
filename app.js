// this is a single line comment 
//

/* this is 
 * a multiple 
 */

var a = 3;
var b = 2;
var c = a+b;
console.log(a) ;
console.log(b);
console.log(c);

var first = "daniel";
var last = "roden";
var fullName= first + " " + last;
console.log(fullName);
var d = Math.pow(2,8);
console.log('2^8 === ', d);
var a = 3;
var b = 4;
var c =5;
var d = 6;

var e =Math.pow((b+a), ((a+b)/(b-c))*((b-a)/(c-d)))
console.log(e);

// branching with if/else statements 
//

var age =21 ;

if (age>=21){
  console.log("You can drink");
} else {
  console.log("you cannot drink");
}

//this is the maximum allowed rating you can see depending on your age group

if(age >= 0 && age <= 5){
 console.log('G rated');
} else if(age <= 12){
  console.log('PG Rated');
} else if(age <=16) {
  console.log(PG-13);
}else if (age ===17){
  console.log('R rated');
}else if (age ===18){
  console.log('NC-17 rated');
}else {
 console.log('X rated');
}

// this is a switch statement
//

var color = 'blue';
switch(color){
  case 'green':
    console.log('i see green');
    break;
  case 'blue':
    console.log('i see blue');
    break;
  case 'orange':
    console.log('i see orange');
    break;
  case 'yellow':
    console.log('i see yellow');
    break;
  default:
    console.log('is that really a color?');
}


//while loop
//


a = 1;

while(a <10){
  console.log('a is looping...', a);
  a++;
}

for (var i = 0; i < 10; i++){
  console.log('i ===', i);
}





