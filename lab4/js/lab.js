// Making a Latte
// An implementation of an everyday task
// Alexis Huang <alchhuan@ucsc.edu> Scott Kuwahara <sykuwaha@ucsc.edu>
// April 24 2024


// Make espresso
  // Grind coffee beans
    // Put coffee beans into bean hopper
    // Push button to grind
  // Brew coffee
    // Put coffee grinds into filter
    // Push tamper onto coffee grinds until grinds are moderately dense
    // Place filter into espresso machine
    // Place cup under espresso machine
    // Push button to brew 1 shot of coffee
// Steam milk
  // Place milk into pitcher
  // Heat up milk steamer
  // Place steamer wand into milk until 150 degrees Fahrenheit
  // Remove milk pitcher from steamer
// Pour milk into espresso
  // Remove espresso cup from machine
  // Place espresso cup onto table
  // Pick up milk pitcher
  // Tilt pitcher over espresso cup from a distance of 6 inches until espresso cup is full
  // Place down milk pitcher on table


// Matching cards
// An implementation of the game
// Alexis Huang <alchhuan@ucsc.edu> Scott Kuwahara <sykuwaha@ucsc.edu>
// April 24 2024
  
//Create score variable
  //set score to 0 by default
//Create count variable
  //set count to 60 by default
//Generate board spaces
  //Loop 6 times
    //print 5 boxes in a horizontal line
    //move back to origin
    //move down one space
//Generate cards 
  //Create 15 pairs of matching cards
  //set cards to face down
  //place each individual card randomly into one of the board spaces

//Loop until all cards are face up or timer = 0
  //Await user input
    //User input selects card
    //timer begins
    //selected card flips face up
  //Await second user input
    //User input selects second card
    //selected card flips face up
  //Check if matching
    //if selections are identical
      //both cards remain face up
      //increase score by 1
    //else
      //flip cards face down
//if timer = 0 or all cards face up
  //print "Game Over"
