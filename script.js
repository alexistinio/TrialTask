var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = hours + " : "
  + minutes + " : " + seconds;


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

buttonText.innerHTML = "Show More";
document.querySelector("#buttonText").
addEventListener("click",() => {
  
if (showMore.style.display === "none"){
  showMore.style.display = "block";
  points.style.display = "none";
  buttonText.innerHTML = "Show Less";
}
else{
    showMore.style.display = "none";
    buttonText.innerHTML = "Show More";
    points.style.display = "block";
}
  
})

var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}