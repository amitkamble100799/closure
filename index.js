// Q1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//Q2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//Q3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//Q4
function length(L){
    function breadth(B){
        console.log(`Area:${L*B}`)        
    }
    breadth(10);
}
length(12);

//Q5
function myFunction(){
    var i=11;
    function myFunction1(){
        i +=1;
        console.log(i);
    }
    myFunction1();
}
myFunction();

//Q6
var a = 12;
(function () {
  alert(a);
})();

//Q7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x()
//Q8
/*
var globalVar = ""xyz"";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
""outerArg = "" + outerArg + ""\n"" +
""innerArg = "" + innerArg + ""\n"" +
""outerVar = "" + outerVar + ""\n"" +
""innerVar = "" + innerVar + ""\n"" +
""globalVar = "" + globalVar);
    
    })(456);
})(123);
*/