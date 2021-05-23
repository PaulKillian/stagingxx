// Custom Scripts
import "bootstrap";
import "waypoints/lib/noframework.waypoints";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import Swiper, { Navigation } from "swiper";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
imagesLoaded.makeJQueryPlugin($);
Swiper.use([Navigation]);
const breakpoint = window.matchMedia("(max-width:767px)");

$(function() {
  var $main = $("main"),
    $view = $(".inview"),
    carousel,
    teamGrid,
    hash = window.location.hash.substring(1),
    handleWaypoints = function() {
      if ($view.length) {
        $view.each(function() {
          let delay = $(this).data("offset") ? $(this).data("offset") : "90%";
          let easeType = $(this).data("ease") ? $(this).data("ease") : "fadeIn";
          let waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
              if (direction == "down" && !$(this.element).hasClass(easeType)) {
                $(this.element).addClass(easeType);
              } else {
                $(this.element).removeClass(easeType);
              }
            },
            offset: delay
          });
        });
      }
    },
    breakpointChecker = function() {
      if (breakpoint.matches === true) {
        if (teamGrid) {
          teamGrid.destroy();
        }
        $(".swiper-container .grid-item").addClass("swiper-slide");
        enableSwiper();
      } else {
        if (carousel) {
          $(".swiper-container .grid-item").removeClass("swiper-slide");
          carousel.destroy(true, true);
        }
        enableIso();
      }
      return;
    },
    enableIso = function() {
      teamGrid = new Isotope("#team-grid", {
        itemSelector: ".grid-item",
        layoutMode: "masonry"
      });
    },
    enableSwiper = function() {
      carousel = new Swiper(".swiper-container", {
        slidesPerView: 1.3,
        spaceBetween: 10,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next"
        }
      });
    };
  // Load all Image boefore starting
  $main.imagesLoaded(
    {
      background: true
    },
    function() {
      $main.addClass("show");
      handleWaypoints();
      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    }
  );
  if (hash.length) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#" + hash).offset().top
        },
        1500
      );
  }
  $("#header .nav-link").on("click", function() {
    if (!$(this).hasClass("active")) {
      $("#header .nav-link").removeClass("active");
      $(this).addClass("active");
      $(".navbar-collapse").collapse("hide");
      let target = $(this).attr("href");
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top
          },
          1500
        );
    }
  });
  var coordStart = [17, 29.7, 43.3];
  var coordEnd = [47, 64.04, 88];

  // Landing to Who Transition
  const controller = new ScrollMagic.Controller();
  var t1 = new TimelineMax().to("#spotlight", 1, {
      y: 1000,
      onUpdate: updateFunction
    }),
    tweenProgress;

  function updateFunction() {
    let boxLimit = 660;
    tweenProgress = ((t1.progress() / boxLimit) * 100000).toFixed(2);
    //console.log(tweenProgress)
    if (tweenProgress >= coordStart[0] && tweenProgress <= coordEnd[0]) {
      $(".change-who:first-child").css({
        opacity: 0
      });
    } else {
      $(".change-who:first-child").css({
        opacity: 1
      });
    }
    if (tweenProgress >= coordStart[1] && tweenProgress <= coordEnd[1]) {
      $(".change-who:nth-child(2)").css({
        opacity: 0
      });
    } else {
      $(".change-who:nth-child(2)").css({
        opacity: 1
      });
    }
    if (tweenProgress >= coordStart[2] && tweenProgress <= coordEnd[2]) {
      $(".change-who:last-child").css({
        opacity: 0
      });
    } else {
      $(".change-who:last-child").css({
        opacity: 1
      });
    }
  }
  var t1_1 = new TimelineMax().from("#who-black-elipse", 1, {
    y: 600
  });
  var t1_2 = new TimelineMax().from("#who-red-elipse", 1, {
    y: 600
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#who-gsap",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#who-gsap")
    .setTween(t1)
    .setClassToggle("#spotlight", "active")
    .addTo(controller);

  const scene_2 = new ScrollMagic.Scene({
    triggerElement: "#who-gsap",
    duration: "80"
  })
    .setPin("#who-elipse")
    .addTo(controller);

  const scene_3 = new ScrollMagic.Scene({
    triggerElement: "#who-gsap",
    duration: "300"
  })
    .setPin("#who-solid-elipse")
    .addTo(controller);

  const scene_4 = new ScrollMagic.Scene({
    triggerElement: "#who-gsap",
    duration: "600"
  })
    .setTween(t1_1)
    .addTo(controller);

  const scene_5 = new ScrollMagic.Scene({
    triggerElement: "#who-gsap",
    duration: "400"
  })
    .setTween(t1_2)
    .addTo(controller);

  var coordStart2 = [15.7, 28.3, 41.45];
  var coordEnd2 = [45.16, 61.84, 83.25];
  var t2_1 = new TimelineMax().from("#what-red-ball", 1, {
    y: 800
  });
  var t2_2 = new TimelineMax().from("#what-solid-elipse", 1, {
    y: 800
  });
  var t2 = new TimelineMax().from("#spotlight2", 1, {
      y: 1000,
      onUpdate: updateFunction2
    }),
    tweenProgress2;

  function updateFunction2() {
    let boxLimit = 660;
    tweenProgress2 = ((t2.progress() / boxLimit) * 100000).toFixed(2);
    //console.log(tweenProgress2)
    if (tweenProgress2 >= coordStart2[2] && tweenProgress2 <= coordEnd2[2]) {
      $(".change-what:first-child").css({
        opacity: 0
      });
    } else {
      $(".change-what:first-child").css({
        opacity: 1
      });
    }
    if (tweenProgress2 >= coordStart2[1] && tweenProgress2 <= coordEnd2[1]) {
      $(".change-what:nth-child(2)").css({
        opacity: 0
      });
    } else {
      $(".change-what:nth-child(2)").css({
        opacity: 1
      });
    }
    if (tweenProgress2 >= coordStart2[0] && tweenProgress2 <= coordEnd2[0]) {
      $(".change-what:last-child").css({
        opacity: 0
      });
    } else {
      $(".change-what:last-child").css({
        opacity: 1
      });
    }
  }
  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#what-gsap")
    .setTween(t2)
    .setClassToggle("#spotlight2", "active")
    .addTo(controller);

  const scene2_2 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    duration: "80"
  })
    .setPin("#what-elipse")
    .addTo(controller);

  const scene2_3 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    duration: "300"
  })
    .setTween(t2_2)
    .addTo(controller);

  const scene2_4 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    duration: "120"
  })
    .setPin("#what-red-elipse")
    .addTo(controller);

  const scene2_5 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    duration: "400"
  })
    .setPin("#what-black-elipse")
    .addTo(controller);

  const scene2_6 = new ScrollMagic.Scene({
    triggerElement: "#what-gsap",
    duration: "100%"
  })
    .setTween(t2_1)
    .addTo(controller);

  var moon_left = new TimelineMax().from("#moon-left", 1, {
    y: "30%"
  });
  const scene_moon = new ScrollMagic.Scene({
    triggerElement: "#who",
    duration: "100%"
  })
    .setTween(moon_left)
    .addTo(controller);

  var moon_right = new TimelineMax().to("#moon-right", 1, {
    y: "25%"
  });
  const scene_moon2 = new ScrollMagic.Scene({
    triggerElement: "#who",
    duration: "100%"
  })
    .setTween(moon_right)
    .addTo(controller);
  var services_sm = new TimelineMax().from("#services-sm-uls", 1, {
    x: "100%"
  });
  const scene_smm = new ScrollMagic.Scene({
    triggerElement: "#social-media-mgmt",
    duration: "100%"
  })
    .setTween(services_sm)
    .addTo(controller);
  // Production Service
  var services_pm = new TimelineMax().from("#services-pm-uls", 1, {
    x: "-100%"
  });
  const scene_pm = new ScrollMagic.Scene({
    triggerElement: "#production-services",
    duration: "100%"
  })
    .setTween(services_pm)
    .addTo(controller);
  // Talent Partner
  var services_tp = new TimelineMax().from("#services-tp-uls", 1, {
    x: "100%"
  });
  const scene_tp = new ScrollMagic.Scene({
    triggerElement: "#talent-partnerships",
    duration: "100%"
  })
    .setTween(services_tp)
    .addTo(controller);
  // DIgital Music
  var services_dm = new TimelineMax().from("#services-dm-uls", 1, {
    x: "-100%"
  });
  const scene_dm = new ScrollMagic.Scene({
    triggerElement: "#digital-music-services",
    duration: "100%"
  })
    .setTween(services_dm)
    .addTo(controller);
  // Who Work with XX
  var services_wwwx = new TimelineMax().from("#services-wwx-uls", 1, {
    x: "50vw"
  });
  const scene_wwwx = new ScrollMagic.Scene({
    triggerElement: "#who-works-with-xx",
    duration: "80%"
  })
    .setTween(services_wwwx)
    .addTo(controller);
});

gsap.to("#contact", {rotation: 27, x: 100, duration: 1});
