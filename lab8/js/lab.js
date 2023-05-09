// Author: Alexis Huang and Scott Kuwahara
// Date: 8 May

function numEval(x) {
    return (x%2 == 0);
}

console.log("Is 1 even? ", numEval(1));
console.log("Is 2 even? ", numEval(2));

array = [860, 71, 9, 56, 11, 52, 2, 902020]
console.log("My array", array);

var result = array.map(numEval);

//checks whether the values in the array are even.
console.log("test of evenness of array:", result);


var result = array.map(function(x){
    return x ** 0.5;
})

//returns the square root of the individual values in the array
console.log("Squareroot of array:", result);