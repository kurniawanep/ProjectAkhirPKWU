// navbar scroll
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 280);
  });

// SMOOTH SCROLLING
// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});