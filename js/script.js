$(window).on("load", function () {
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
})


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