window.HELP_IMPROVE_VIDEOJS = false;



$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    $(".image-comp").each((i) => {
      i.find("slider").on("input change", (e)=>{
        const sliderPos = e.target.value;
        // Update the width of the foreground image
        i.find('.foreground').css('width', `${sliderPos}%`)
        // Update the position of the slider button
        i.find('.slider-button').css('width', `${sliderPos}%`)
      });
    })
    

})
