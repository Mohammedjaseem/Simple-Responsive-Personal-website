function myFunction() {
	alert("Hello!, You Poked Jaseem");
  }

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});



// smooth scrolling when clicking an anchor link 
$('.nav-item a').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          html_body.animate({
              scrollTop: target.offset().top - 0
          }, 1500);
          return false;
      }

  }
});

