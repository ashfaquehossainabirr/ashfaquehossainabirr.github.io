$(window).on("load", function () {
  /*=========================================================================
   Preloader
  =========================================================================*/
  
  $("#preloader").delay(350).fadeOut("slow");


  /*=========================================================================
    Wow Initialize
  =========================================================================*/
  // Here will be the WoW Js implementation.
  setTimeout(function () {
    new WOW().init();
  }, 0);

  var dynamicDelay = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
  var fallbackValue = "200ms";

})


$(function () {
  "use strict";

  /*=========================================================================
   Parallax layers
  =========================================================================*/

   if($(".parallax").length > 0) {
    var scene = $(".parallax").get(0);
    var parallax = new Parallax(scene, {
      relativeInput: true,
    });
  }


  /*=========================================================================
   Text Rotating
  =========================================================================*/
   
  $(".text-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  /*=========================================================================
    Spacer with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName("spacer");

  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute("data-height");
    list[i].style.height = "" + size + "px";
  }

  /*=========================================================================
    Background Color with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName("data-background");

  for (var i = 0; i < list.length; i++) {
    var color = list[i].getAttribute("data-color");
    list[i].style.backgroundColor = "" + color + "";
  }


  /*=========================================================================
          Scroll to Top
  =========================================================================*/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 350) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });
  $("#return-to-top").on("click", function (event) {
    // When arrow is clicked
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0, // Scroll to top of body
      },
      400
    );
  });
});


// =======================================================
// -- Shrink Header Functionality
// =======================================================

const headerSection = document.querySelector("header");
var deviceMedia = window.matchMedia("(min-width: 769px)");


window.onscroll = function() {
  if(deviceMedia.matches && document.documentElement.scrollTop > 130) {
    headerSection.style.padding = "10px 0"
  } else {
    headerSection.style.padding = "20px 0"
  }
}


// ==========================================================
// -- Menu Icon Functionality
// ==========================================================

function iconFunc(icon) {
  icon.classList.toggle("change");
}


// ==========================================================
// -- Mobile Nav Menu Functionality
// ==========================================================

const header = document.querySelector("header")
const navMenu = document.querySelector(".nav-menu-section ul")
const navIcon = document.querySelector(".mobile-nav-icon")

navIcon.addEventListener('click', () => {
  header.classList.toggle("active-nav")
  navMenu.classList.toggle("active-nav")
})


// ==========================================================
// -- About Section Active Status
// ==========================================================

const activeStatus = document.querySelector(".active-status");
const availabilityText = document.querySelector(".availability-status");

activeStatus.style.backgroundColor = "var(--active-status-red)"
availabilityText.innerHTML = "Not Available";


// =======================================================
// -- Get Author's Age
// =======================================================

const age = new Date().getFullYear() - 2000;
document.getElementById('age').innerHTML = age;


/*=========================================================================
            Slick Slider
=========================================================================*/
$(".testimonials-wrapper").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});


// ==========================================================
// -- Get Year
// ==========================================================

const date = new Date();
const yearText = document.getElementById("year");

let year = date.getFullYear();
yearText.innerHTML = year;