$(document).bind("mobileinit", function(){
                 $.extend(  $.mobile , {
                          defaultPageTransition: 'none'
                          });
                 });
$( document ).bind( "mobileinit", function() {
                   // Make your jQuery Mobile framework configuration changes here!
                   
                   $.mobile.allowCrossDomainPages = true;
                   });
document.documentElement.addEventListener('touchmove',
                                          function(e) {
                                          e.preventDefault();
                                      });

var fixgeometry = function () {
    /* Some orientation changes leave the scroll position at something
    * that isn't 0,0. This is annoying for user experience. */
    scroll(0, 0);

    /* Calculate the geometry that our content area should take */
    var header = $(".header:visible");
    var content = $(".content:visible");
    var viewport_height = $(window).height();

    var content_height = viewport_height - header.outerHeight();

    /* Trim margin/border/padding height */
    content_height -= (content.outerHeight() - content.height());
    content.height(content_height);
}; /* fixgeometry */

$(document).ready(function () {
    $(window).bind("orientationchange resize pageshow", fixgeometry);
});

function ConvertToSecs(initial_time) {
    var i_time_multiple;
    var timeArray = new Array();
    timeArray[0] = 1; //1 second
    timeArray[1] = 60; // 1 min to seconds
    timeArray[2] = 3600; //1 hour to seconds
    timeArray[3] = 0.001; //1 milli to seconds
    timeArray[4] = 0.000001; //1 micro to seconds
    timeArray[5] = 0.000000001; //1 nano to seconds
    
    switch (initial_time) {
        case "Seconds":
            i_time_multiple = timeArray[0];
            break;
        case "Minutes":
            i_time_multiple = timeArray[1];
            break;
        case "Hours":
            i_time_multiple = timeArray[2];
            break;
        case "MilliSeconds":
            i_time_multiple = timeArray[3];
            break;
        case "Microseconds":
            i_time_multiple = timeArray[4];
            break;
        case "Nanoseconds":
            i_time_multiple = timeArray[5];
            break;
        default:
            i_time_multiple = timeArray[0];
            break;
    }

    return i_time_multiple;
}

function ConvertToMillis(initial_length) {

    var distanceArray = new Array();
    distanceArray[0] = 1; //1 millimeter
    distanceArray[1] = 10; //1 centimeter to millimeters
    distanceArray[2] = 1000; //1 meter to millimeters
    distanceArray[3] = 1000000; //1 kilometer to millimeters
    distanceArray[4] = 1609344; //1 mile to millimeters
    distanceArray[5] = 25.4; //1 inch to millimeters
    distanceArray[6] = 304.8; //1 foot to millimeters
    distanceArray[7] = 914.4; //1 yard to millimeters

    var i_length_multiple;
    //Conversion time:
    switch (initial_length) {
        case "Millimeters":
            i_length_multiple = distanceArray[0];
            break;
        case "Centimeters":
            i_length_multiple = distanceArray[1];
            break;
        case "Meters":
            i_length_multiple = distanceArray[2];
            break;
        case "Kilometers":
            i_length_multiple = distanceArray[3];
            break;
        case "Miles":
            i_length_multiple = distanceArray[4];
            break;
        case "Inches":
            i_length_multiple = distanceArray[5];
            break;
        case "Feet":
            i_length_multiple = distanceArray[6];
            break;
        case "Yards":
            i_length_multiple = distanceArray[7];
            break;
        default:
            i_length_multiple = distanceArray[0];
            break;
    }

    return i_length_multiple;
}
