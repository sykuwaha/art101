// Author: Alexis Huang and Scott Kuwahara
// Date: 10 May

// find output div and assign to variable outputEl
var outputEl = document.getElementById("output");

// create new element and assign it to variable new1El
var new1El =  document.createElement("p");
// change the html attribute of new1El to say something new
new1El.innerHTML = "bark bark woof woof" ;

// create new element and assign it to variable new2El
var new2El =  document.createElement("p");
// change the html attribute of new2El to say something new
new2El.innerHTML = "hooray yippee!!" ;

// Append both new elements one at a time to output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);