// question 1 

var virus = "corona";

// question 2

var person = {
    name: "Harald", 
    occupation: "King",    
};

// question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else{
    console.log("In stock");
}

// question 4

var numberArray = [1, 2, 3, 4, 5];

console.log(numberArray);

// question 5

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6

for(var i = 15; i <= 25; i++) {
    if(i===20){
        console.log(i)
    };
}


// question 7 

var postageArray = [
    {
        type: "letter", 
        weight: 233, 
        shipped: false,
    },
    {
        type: "package", 
        weight: 465, 
        shipped: true,
    }   
];

  //  console.log(postageArray);

for (var i=0; i < postageArray.length;i++) {
console.log(postageArray[i].weight);
console.log(postageArray[i].shipped);
}

// question 8

function whatIDontLike(fillIn){
    console.log("I don't like " + fillIn);  
}
whatIDontLike("viruses")

// question 9 

 function subtraction(firstNum,secondNum){
     var total = firstNum - secondNum;
     console.log(total);
 }

// question 10 

var emptyArray = [];

function addArgument(theArgument) {
    console.log (emptyArray + theArgument);
}
addArgument(32);

