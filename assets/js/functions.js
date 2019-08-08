$(document).ready(function() {
  mentoringBubbleClick();

  setInterval(function() {
    articleTada();
  }, 3000);

});

function articleTada() {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;

  $('.article-thumb').eq(randNum).addClass('is-emph').siblings().removeClass('is-emph');
}


function mentoringBubbleClick() {
  $('.face').on('click', function() {

    var $this = $(this),
      faceTop = $this.position().top,
      vertMath = -1 * (faceTop - 250),
      faceLeft = $this.position().left,
      horizMath = 70 - faceLeft;

    // open bubble when clicked
    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
    if ($(window).width() > 640) {
      $this.parent().css('top', +vertMath + 'px');

    } else {
      $this.parent().css('left', +horizMath + 'px');
      // $this.addClass('has-bubble-open')
      //   .siblings().removeClass('has-bubble-open');
    }

  });



  /*
    1. Click a face
    2. Get distance of the face from the top of the parent
    3. Move container up 115px + count
    4. add the is-open class to the face to pop the balloon
  */

}

$(window).scroll(function() {
  youtubeVidScroll();
  startMentoring();
  startArticles();
});


function startArticles() {
  var wScroll = $(window).scrollTop();

  if (($('section.article').offset().top - ($(window).height() / 2) < wScroll)) {
    $('.article-thumb').each(function(i) {
      setTimeout(function() {
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 150 * i);
    });
  }
}


function startMentoring() {
  var wScroll = $(window).scrollTop();

  if (($('section.mentoring').offset().top - 500 < wScroll)) {

    if (($(window).width() > 640)) {
      $('.faces').addClass('launched');

      if (!$('.face').hasClass("has-bubble-open")) {
        setTimeout(function() {
          $('.face:nth-child(3)').addClass("has-bubble-open");
        }, 500);
      }
    } else {
      // on mobile devices this should be fired asap
      $('.faces').addClass('launched');
      $('.face:nth-of-type(1)').addClass('has-bubble-open');

      $('li.back-btn').on('click', function() {
        $(this).removeClass('has-bubble-open');
        $('.face:nth-of-type(1)').click();
        // $('.face:nth-of-type(1)').addClass('has-bubble-open');

      });
    }
  }
}

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  // Only scroll when viewport in view

  if (wScroll < 1200) {
    $('.video-strip').css('background-position', 'center -' + (wScroll / 1.25) + 'px');
  }
}



url = config.local_url;
$.getJSON(url, function(data) {
  var img = data.data;

  for (var i = 0; i < 9; i++) {
    $('.instagram-widget').append('<a title="' + img[i].caption.text + '" target="_blank" href="' + img[i].link + '"><img class="insta-img" src="' + img[i].images.standard_resolution.url + '" /></a>');
  }
});