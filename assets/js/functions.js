$(document).ready(function() {



  $(window).scroll(function() {
    youtubeVidScroll();
  });

  function youtubeVidScroll() {
    var wScroll = $(window).scrollTop();

    // Only scroll when viewport in view

    if (wScroll < 800) {
      $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
    }
  }

});