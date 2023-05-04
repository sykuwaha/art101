// Author: Alexis Huang and Scott Kuwahara
// Date: 1 May


//variables
myTransport = ["Prius", "Bus", "Lyft", "Walking"];

//object for main ride
myMainRide = {
  make: "Toyota",
  model : "Prius",
  color : "gray",
  year : "2020",
  age : function() {
    return 2023 - this.year;
  }
}

//output
document.writeln("My main modes of transportation:</br>", myTransport, "</br></br>");

//writing object
document.writeln("My car: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "p/re>");