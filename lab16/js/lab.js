// Author: Alexis Huang and Scott Kuwahara
// Date: 6 June

function getAndPutData(url) {
    // Check if the button click works
    console.log("button clicked");

    // Using $.ajax() method
    $.ajax({
        // URL for the request
        url: url,
        // Whether this is a POST or GET request
        type: "GET",
        // The data to send
        data: {},
        // Type of data we expect back
        dataType: "json",
    })

    // If the API call is successful
    .done(function(comicObj) {
        // Show the data in the console log
        console.log(comicObj.title);
        // Add section title
        $("#output").html("<h2>" + comicObj.title + "</h2>");
        // Append the image
        $("#output").append("<img src=" + comicObj.img + ">");
        // Give the comic an alt
        $("#output").append("<p>" + "alt: " + comicObj.alt + "</p>");

        // Add previous and next buttons
        $("#output").append("<button id='prevButton'>Previous</button>");
        $("#output").append("<button id='nextButton'>Next</button>");

        // Event listener for previous button click
        $("#prevButton").click(function() {
            var prevUrl = "https://xkcd.com/" + (comicObj.num - 1) + "/info.0.json";
            getAndPutData(prevUrl);
        });

        // Event listener for next button click
        $("#nextButton").click(function() {
            var nextUrl = "https://xkcd.com/" + (comicObj.num + 1) + "/info.0.json";
            getAndPutData(nextUrl);
        });
    })

    // If the request fails
    .fail(function(request, error) {
        console.log(request, error);
    });
}

// Initial API call for the latest comic
getAndPutData("https://xkcd.com/info.0.json");


