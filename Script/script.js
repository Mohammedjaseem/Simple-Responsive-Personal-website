function myFunction() {
	Swal.fire({
		title: "<i>Poked successfully!</i>", 
		html: "Now you Contact Jassy <br><b>+91 8086 5000 23</b>",  
		confirmButtonText: "<u>Close</u>", 
	  });
  }

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


      function myFunction2() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
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


