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


<script>
	function gotowhatsapp() {
		
		var name  = document.getElementById("wanames").value;
		var place = document.getElementById("waplace").value;
		var phone = document.getElementById("wamob").value;
		var note  = document.getElementById("wanote").value;
		var date  = document.getElementById("wadate").value;
		var time  = document.getElementById("watime").value;
		var treat  = document.getElementById("watreat").value;

		var url = "https://wa.me/918086500023?text="

		+ "Hello Doctor, here is my details for booking "+ "%0a" 
		+ "Name: " + name + "%0a"
		+ "Place: " + place + "%0a"
		+ "Phone: " + phone + "%0a"
		+ "Treatment: " + treat + "%0a"
		+ "Note: " + note + "%0a"
		+ "Date: " + date + "%0a"
		+ "Time: " + time; 

		window.open(url, '_blank');
	}
	</script>