
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
    // Page loading animation
    $(window).on('load', function() {
      if($('.cover').length){
        $('.cover').parallax({
          imageSrc: $('.cover').data('image'),
          zIndex: '1'
        });
      }
  
      $("#preloader").animate({
        'opacity': '0'
      }, 600, function(){
        setTimeout(function(){
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      });
    });
  
    
  
    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');
  
  
    function visible(partial) {
          var $t = partial,
              $w = jQuery(window),
              viewTop = $w.scrollTop(),
              viewBottom = viewTop + $w.height(),
              _top = $t.offset().top,
              _bottom = _top + $t.height(),
              compareTop = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
  
          return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
  
      }
  
      $(window).scroll(function() {
  
          if (visible($('.count-digit'))) {
              if ($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
  
              $('.count-digit').each(function() {
                  var $this = $(this);
                  jQuery({
                      Counter: 0
                  }).animate({
                      Counter: $this.text()
                  }, {
                      duration: 3000,
                      easing: 'swing',
                      step: function() {
                          $this.text(Math.ceil(this.Counter));
                      }
                  });
              });
          }
      })
  
  
  })(window.jQuery);
