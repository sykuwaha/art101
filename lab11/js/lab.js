// Author: Alexis Huang and Scott Kuwahara
// Date: 17 May

// creating buttons
    
    // challenge section
    //Find the section you want to add the button to, add it to the section
    $('#challenge').append(
        //Create the button
        $(document.createElement('button')).prop({
            type: 'button',
            //Give it a text label
            innerHTML: 'click here!',
            id: 'challengebtn'

        })
    );

    // problems section
    $('#problems').append(
        //Create the button
        $(document.createElement('button')).prop({
            type: 'button',
            //Give it a text label
            innerHTML: 'click here!',
            id: 'problembtn'
        })
    );

    // results section
    $('#results').append(
        //Create the button
        $(document.createElement('button')).prop({
            type: 'button',
            //Give it a text label
            innerHTML: 'click here!',
            id: 'resultbtn'
        })
    );

//toggling classes

    //challenge section
    $(document).ready(function() {
        //attatches event handler to element with the id "challengebtn"
        $('#challengebtn').click(function() {
            //when the button is clicked the class is toggled for elements with the id "challenge"
        $('#challenge').toggleClass('special');
        });
    });

    //problems section
    $(document).ready(function() {
        //attatches event handler to element with the id "problembtn"
        $('#problembtn').click(function() {
            //when the button is clicked the class is toggled for elements with the id "problems"
        $('#problems').toggleClass('special');
        });
    });

    //results section
    $(document).ready(function() {
        //attatches event handler to element with the id "resultbtn"
        $('#resultbtn').click(function() {
            //when the button is clicked the class is toggled for elements with the id "results"
        $('#results').toggleClass('special');
        });
    });

