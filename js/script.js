$(document).ready(function () {
   
    // An alert letting visitors that the email list isn't implemented yet
    
    $("#ebtn").click(function () {
        alert("Coming Soon!");
    });
    
});


    // A lightboxy for the two images on the page

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$overlay.click(function() {
    
    $overlay.hide();
});   
