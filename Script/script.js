function myFunction() {
	alert("Hello! I am an alert box!");
  }

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

