// Author: Alexis Huang and Scott Kuwahara
// Date: 1 June


function getStuff() {
    // check if the button click works
    console.log("button clicked");


    // using $.ajax() method
  $.ajax({
    // URL for the request
    url: "https://official-joke-api.appspot.com/random_joke",
    // whether this is POST or GET request
    type: "GET",
    // the data to send
    data: {},
    // type of data we expect back
    dataType : "json",
  })


  // if the api call is successful
  .done(function(data) {
        // show the data in the console log
    console.log(data.setup);
    // add the setup to the output as a h2
    $("#output").html("<h2>" + data.setup + "</br>");
    // append the punchline to the output div as a p
    $("#output").append("<p>" + data.punchline);
  })
}


// event listener for button click
$("#activate").click(getStuff);
  
