// head timer
// Set the initial values
let days = 0;
let hours = 6;
let minutes = 43;
let seconds = 59;

// Update the countdown every 1 second
const countdown = setInterval(function() {

  // Display the result in the corresponding elements
  document.getElementById("days-value").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours-value").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes-value").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds-value").innerText = seconds.toString().padStart(2, '0');
  
  // If the countdown is finished, display a message
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerText = "EXPIRED";
  } else {
    // Decrement time values
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
          if (days > 0) {
            days--;
          }
        }
      }
    }
  }
}, 1000);


// avaliable-quantity timer
// Update the countdown every 1 second
const cD = setInterval(function() {

  // Display the result in the corresponding elements
  document.getElementById("d-value").innerText = days.toString().padStart(2, '0');
  document.getElementById("h-value").innerText = hours.toString().padStart(2, '0');
  document.getElementById("m-value").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("s-value").innerText = seconds.toString().padStart(2, '0');
  
  // If the countdown is finished, display a message
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countdown);
    document.getElementById("cD").innerText = "EXPIRED";
  } else {
    // Decrement time values
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
          if (days > 0) {
            days--;
          }
        }
      }
    }
  }
}, 1000);