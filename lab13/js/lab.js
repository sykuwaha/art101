// Author: Alexis Huang and Scott Kuwahara
// Date: 24 May

//create a "FizzBuzz" function
//listen for click and run function
$("#button").click(function() {
    //set variable string for listing
    var str;
    //loop through numbers 1 to 200, listing them as you go
    for (var i=1;i<201;i++) {
        str ="";
        //if the number is a multiple of 3, print "fizz"
        if (i%3 == 0){
            str+= "fizz";
        }
        //if the number is a multiple of 5, print "buzz"
        if (i%5 == 0){
            str+= "buzz";
        }
        //if the number is a multiple of 5, print "boom"
        if (i%7 == 0){
            str+= "boom";
        }
        //print the number if it is not a multiple of 3, 5, or 7
        if (str==""){
            str=i;
        }
        //append the results to the output div
        $('#output').append("<div>" + str + "!")
    }
   
})
//put output of your program in output div