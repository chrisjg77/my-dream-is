/*
==================================
LAYOUT JS
==================================
*/

$(function() {

  function setToSquare(selectors) {
    var $els = $(selectors)
      , elWidth = $els.eq(0).outerWidth() * 0.75;

    $.each($els, function(key, el) {
      var $el = $(el);

      $el.css({ height: elWidth + 'px' });
    });
  }

  $(document).ready(function() {
    setToSquare('.square');
  });

  $(window).resize(function() {
    setToSquare('.square');
  });

});