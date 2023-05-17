// Author: Alexis Huang and Scott Kuwahara
// Date: 15 May

var username = document.getElementById("user-name").value;

function sortName(str) {
    // convert string to array, sort, and convert back to string
    return str.split('').sort().join('');
}


//add event listener
document.getElementById("my-button").addEventListener("click", function(event){
   // stop default form submission
    event.preventDefault();
  
    //get user input
    var userInput = document.getElementById("user-name").value;
    
    //sort the input
    var resultName = sortName(userInput);

   //replace the output to be the new one
    document.getElementById("output").innerHTML = resultName;
  });