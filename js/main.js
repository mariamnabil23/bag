
// set static section when scrolling to 2000
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            document.getElementById("static-section").style.position = "fixed";
        } else {
            document.getElementById("static-section").style.position = "relative";
        }
    }


// countdown
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = seconds + " ثانية : " + minutes + " دقيقة : " + hours + " ساعة : " + days + " يوم " ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


