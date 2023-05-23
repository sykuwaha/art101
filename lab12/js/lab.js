// Author: Alexis Huang and Scott Kuwahara
// Date: 22 May

// create a function that takes a string as an argument
function sortingHat(str){
    // count the letters in str and assigns it to a variable length
    var len = str.length;
    // use modulus (% operator) to get the remainder with 4: mod = length % 4;
    var mod = len % 4;
    // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
    var house;
    if (mod==0) {
        house = "Gryffindor"
    }
    else if (mod==1) {
        house= "Ravenclaw"
    }
    else if (mod==2) {
        house= "Slytherin"
    }
    else if (mod==3) {
        house= "Hufflepuff"
    }
    return house;
}

// Create an click listener attached to #button
document.getElementById("button").addEventListener("click", function(event) {
    // Prevent form submission
    event.preventDefault();

    var name = document.getElementById("input").value;
    //run sortingHat(name) and store the result in a variable house
    var house = sortingHat(name);
    
    var output = document.getElementById("output");
    // Clear previous paragraphs
    output.innerHTML = "";

    // append a new paragraph to #output that says "The Sorting Hat has sorted you into " + house
    var paragraph = document.createElement("h3");
    paragraph.textContent = "The Sorting Hat has sorted you into " + house + "!";
    paragraph.classList.add("styled-paragraph");
    output.appendChild(paragraph);
  });