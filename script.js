(function($) {
  "use strict";

  function scrollBanner() {
    $(document).on("scroll", function() {
      var scrollPos = $(this).scrollTop();
      $(".parallax-fade-top").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 700,
      });
      $(".parallax-00").css({
        top: scrollPos / -3.5 + "px",
      });
      $(".parallax-01").css({
        top: scrollPos / -2.8 + "px",
      });
      $(".parallax-top-shadow").css({
        top: scrollPos / -2 + "px",
      });
    });
  }
  scrollBanner();

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function(n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  $(document).ready(function() {
    var offset = 300;
    var duration = 400;
    jQuery(window).on("scroll", function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-to-top").addClass("active-arrow");
      } else {
        jQuery(".scroll-to-top").removeClass("active-arrow");
      }
    });
    jQuery(".scroll-to-top").on("click", function(event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    $(".case-study-name:nth-child(1)").on("mouseenter", function() {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(1)").addClass("show");
      $(".case-study-name:nth-child(1)").addClass("active");
    });
    $(".case-study-name:nth-child(2)").on("mouseenter", function() {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(2)").addClass("show");
      $(".case-study-name:nth-child(2)").addClass("active");
    });
    $(".case-study-name:nth-child(3)").on("mouseenter", function() {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(3)").addClass("show");
      $(".case-study-name:nth-child(3)").addClass("active");
    });
    $(".case-study-name:nth-child(4)").on("mouseenter", function() {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(4)").addClass("show");
      $(".case-study-name:nth-child(4)").addClass("active");
    });
    $(".case-study-name:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);

var $card = $(".card"),
  $cardTitle = $(".card-title"),
  $cardSubtitle = $(".card-subtitle"),
  $cardShine = $(".card-shine"),
  $cardShadow = $(".card-shadow"),
  currentMousePos = { x: 0, y: 0 },
  mouseFromCenter = { x: 0, y: 0 };

$(document).mousemove(function(event) {
  var wHeight = $(window).height(),
    wWidth = $(window).width();

  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
  mouseFromCenter.x = currentMousePos.x - wWidth / 2;
  mouseFromCenter.y = currentMousePos.y - wHeight / 2;

  var around1 = -1 * (((currentMousePos.y * 100) / wHeight) * 0.2 - 10) + "deg",
    around2 = 1 * (((currentMousePos.x * 100) / wWidth) * 0.2 - 10) + "deg",
    trans1 = ((currentMousePos.x * 100) / wHeight) * 0.3 + "px",
    trans2 = ((currentMousePos.y * 100) / wHeight) * 0.3 + "px",
    dy = event.pageY - wHeight / 2, //@h/2 = center of poster
    dx = event.pageX - wWidth / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), // angle between cursor and center of poster in RAD
    angle = (theta * 180) / Math.PI - 90,
    mousePositionX = (currentMousePos.x / wWidth) * 100,
    mousePositionY = 50 + (currentMousePos.y / wHeight) * 10;

  $cardShine.css(
    "background",
    "linear-gradient(" +
      angle +
      "deg, rgba(255,255,255," +
      (currentMousePos.y / wHeight) * 0.7 +
      ") 0%,rgba(255,255,255, 0) 80%)"
  );

  $card.css({
    "-webkit-transform":
      "translate3d(" +
      trans1 +
      ", " +
      trans2 +
      ", 0) scale(1) rotatex(" +
      around1 +
      ") rotatey(" +
      around2 +
      ")",
    "background-position":
      mousePositionX + "%" + " " + (currentMousePos.y / wHeight) * 50 + "%",
  });

  $cardShadow.css({
    transform:
      "scale(.9,.9) translateX(" +
      (mouseFromCenter.x * -0.02 + 12) +
      "px) translateY(" +
      (mouseFromCenter.y * -0.02 + 12) +
      "px) scale(1.0) rotateY(" +
      (mouseFromCenter.x / 25) * 0.5 +
      "deg) rotateX(" +
      mouseFromCenter.y / -25 +
      "deg)",
  });

  $cardTitle.css({
    transform:
      "translateX(" +
      (mouseFromCenter.x / 25) * 0.7 +
      "px) translateY(" +
      (mouseFromCenter.y / 25) * 1.65 +
      "px)",
  });

  $cardSubtitle.css({
    transform:
      "translateX(" +
      (mouseFromCenter.x / 25) * 0.5 +
      "px) translateY(" +
      (mouseFromCenter.y / 25) * 1.15 +
      "px) translateZ(60px)",
  });
});

var $card = $(".card"),
  $cardTitle = $(".card-title"),
  $cardSubtitle = $(".card-subtitle"),
  $cardShine = $(".card-shine"),
  $cardShadow = $(".card-shadow"),
  currentMousePos = { x: 0, y: 0 },
  mouseFromCenter = { x: 0, y: 0 };

$(document).mousemove(function(event) {
  var wHeight = $(window).height(),
    wWidth = $(window).width();

  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
  mouseFromCenter.x = currentMousePos.x - wWidth / 2;
  mouseFromCenter.y = currentMousePos.y - wHeight / 2;

  var around1 = -1 * (((currentMousePos.y * 100) / wHeight) * 0.2 - 10) + "deg",
    around2 = 1 * (((currentMousePos.x * 100) / wWidth) * 0.2 - 10) + "deg",
    trans1 = ((currentMousePos.x * 100) / wHeight) * 0.3 + "px",
    trans2 = ((currentMousePos.y * 100) / wHeight) * 0.3 + "px",
    dy = event.pageY - wHeight / 2, //@h/2 = center of poster
    dx = event.pageX - wWidth / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), // angle between cursor and center of poster in RAD
    angle = (theta * 180) / Math.PI - 90,
    mousePositionX = (currentMousePos.x / wWidth) * 100,
    mousePositionY = 50 + (currentMousePos.y / wHeight) * 10;

  $cardShine.css(
    "background",
    "linear-gradient(" +
      angle +
      "deg, rgba(255,255,255," +
      (currentMousePos.y / wHeight) * 0.7 +
      ") 0%,rgba(255,255,255, 0) 80%)"
  );

  $card.css({
    "-webkit-transform":
      "translate3d(" +
      trans1 +
      ", " +
      trans2 +
      ", 0) scale(1) rotatex(" +
      around1 +
      ") rotatey(" +
      around2 +
      ")",
    "background-position":
      mousePositionX + "%" + " " + (currentMousePos.y / wHeight) * 50 + "%",
  });

  $cardShadow.css({
    transform:
      "scale(.9,.9) translateX(" +
      (mouseFromCenter.x * -0.02 + 12) +
      "px) translateY(" +
      (mouseFromCenter.y * -0.02 + 12) +
      "px) scale(1.0) rotateY(" +
      (mouseFromCenter.x / 25) * 0.5 +
      "deg) rotateX(" +
      mouseFromCenter.y / -25 +
      "deg)",
  });

  $cardTitle.css({
    transform:
      "translateX(" +
      (mouseFromCenter.x / 25) * 0.7 +
      "px) translateY(" +
      (mouseFromCenter.y / 25) * 1.65 +
      "px)",
  });

  $cardSubtitle.css({
    transform:
      "translateX(" +
      (mouseFromCenter.x / 25) * 0.5 +
      "px) translateY(" +
      (mouseFromCenter.y / 25) * 1.15 +
      "px) translateZ(60px)",
  });
});
