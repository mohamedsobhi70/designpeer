
if ($("#header").length > 0) {
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 450) {
      header.classList.add('stky');
    } else {
      header.classList.remove('stky');
    }
  });

}
if ($(".mobile-menu").length > 0) {
  document.querySelector(".mobile-menu-btn ").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("show");
  });

  document.querySelector(".menu-close-btn").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("show");
  });
}

//////////////////
////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////                NEW                /////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////
if ($("#dark-mode-btn").length > 0) {

  let darkBtn = document.getElementById("dark-mode-btn");

  // Function to toggle dark mode and save preference
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    let isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }

  // Add event listener to the button
  darkBtn.addEventListener("click", toggleDarkMode);

  // Load the theme preference from localStorage on page load
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    document.querySelector(".mobile-menu").classList.remove("show");
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.parentElement.classList.add('active');
    }
  });
});


if ($(".clients-carousel").length > 0) {
  $('.clients-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: false,
    dots: false,
    margin: 64,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 4
      },
      992: {
        items: 5
      },
      1024: {
        items: 7
      }
    }
  });
}


if ($("#work-1").length > 0) {

  $('#work-1').owlCarousel({
    center: true,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    touchDrag: false,
    margin: 24,
    items: 1.3,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false,
    responsive: {
      500: {
        items: 2
      },
      992: {
        items: 3.5,
      },
      1024: {
        margin: 30,
        items: 4
      },
      1450: {
        items: 4.5
      }
    }
  });

  let $originalCarousel = $('#work-1');
  let $clonedCarousel = $originalCarousel.clone().attr('id', 'work-2').addClass('carousel-high absolute top-0 left-0 w-full');
  
  // Append the cloned carousel to the section
  $originalCarousel.parent().append($clonedCarousel);
  

  $('#work-2').owlCarousel({
    center: true,
    nav: false,
    dots: false,
    margin: 24,
    items: 1.3,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false,
    onInitialized: createCustomDots, // Call function to create custom dots
    onChanged: function (event) {
      syncDots(event);
      // Check if the last slide is reached
      let carousel = event.relatedTarget;
      if (carousel.current() === carousel.items().length - 1) {
        setTimeout(function () {
          // Trigger navigation to the first slide
          carousel.to(0, 300); // 300ms transition
        }, 8000); // Delay to match the autoplay timeout
      }
    },
    responsive: {
      500: {
        items: 2
      },
      992: {
        items: 3.5,
      },
      1024: {
        margin: 30,
        items: 4
      },
      1450: {
        items: 4.5
      }
    }
  })
  // Function to create custom dots
  function createCustomDots(event) {
    let dotContainer = $("#customDots");
    let dotCount = event.item.count;
    dotContainer.empty(); // Clear existing dots
    for (let i = 0; i < dotCount; i++) {
      dotContainer.append('<span class="custom-dot" data-dot="' + i + '"></span>');
    }
    syncDots(event); // Sync dots with the current state
  }

  // Function to sync dots with the current state of the sliders
  function syncDots(event) {
    let index = event.item.index - event.relatedTarget._clones.length / 2;
    if (index > event.item.count) {
      index = index - event.item.count;
    }
    $("#customDots .custom-dot").removeClass("active");
    $("#customDots .custom-dot[data-dot='" + index + "']").addClass("active");

    // Move both sliders
    $('.work-carousel1').trigger("to.owl.carousel", [index, 100]);
    $('.work-carousel2').trigger("to.owl.carousel", [index, 100]);
  }

  // Click event for custom dots
  $("#customDots").on("click", ".custom-dot", function () {
    let dotIndex = $(this).data("dot");
    $('.work-carousel1').trigger("to.owl.carousel", [dotIndex, 100]);
    $('.work-carousel2').trigger("to.owl.carousel", [dotIndex, 100]);
  });

  VanillaTilt.init(document.querySelector("#work-2 .center"), {
    max: 1,
    speed: 400,
  });
}
    // Clone the carousel and append it with a higher z-index

if ($("#work-2").length > 0) {

}


gsap.registerPlugin(ScrollTrigger);



const tabletgsap = gsap.matchMedia();

tabletgsap.add(
  "(min-width: 768px) and (max-width: 1280px)", () => {
    gsap.utils.toArray(".service-card:nth-child(6n+1), .service-card:nth-child(6n+2), .service-card:nth-child(6n+3)").forEach(card => {
      gsap.to(card, {
        x: 200,
        scrollTrigger: {
          trigger: card,
          start: "bottom bottom",
          scrub: true
        }
      });
    });
  
    gsap.utils.toArray(".service-card:nth-child(6n+4), .service-card:nth-child(6n+5), .service-card:nth-child(6n+6)").forEach(card => {
      gsap.to(card, {
        x: -200,
        scrollTrigger: {
          trigger: card,
          start: "bottom bottom",
          scrub: true
        }
      });
    });

  }
)

gsap.matchMedia().add("(min-width: 1280px)", () => {
  gsap.utils.toArray(".service-card:nth-child(10n+1), .service-card:nth-child(10n+2), .service-card:nth-child(10n+3), .service-card:nth-child(10n+4), .service-card:nth-child(10n+5)").forEach(card => {
    gsap.to(card, {
      x: 200,
      scrollTrigger: {
        trigger: card,
        start: "bottom bottom",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".service-card:nth-child(10n+6), .service-card:nth-child(10n+7), .service-card:nth-child(10n+8), .service-card:nth-child(10n+9), .service-card:nth-child(10n+10)").forEach(card => {
    gsap.to(card, {
      x: -200,
      scrollTrigger: {
        trigger: card,
        start: "bottom bottom",
        scrub: true
      }
    });
  });
})
gsap.matchMedia().add("(min-width: 1024px)", () => {

  gsap.set(".faq-item  *", { opacity: 0, y: 100 });
  gsap.to(".faq-item  *", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".faq-item  *",
      start: "bottom bottom",
      end: "50% 50%",
      scrub: true
    }
  });

  gsap.set(".testimonial-item", { scale: .8, opacity: 0, y: -100 });
  gsap.to(".testimonial-item", {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".testimonial-item",
      start: "bottom bottom",
      end: "55% 55%",
      scrub: true
    }
  });


  gsap.set(".pricing-item", { scale: .5, opacity: 0, y: 50 });
  gsap.to(".pricing-item", {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".pricing-item",
      start: "bottom bottom",
      end: "75% 75%",
      scrub: true
    }
  });

  gsap.set(".choice-1", { scale: .5, opacity: 0, y: 50 });
  gsap.to(".choice-1", {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".choice-1",
      start: "bottom bottom",
      end: "60% 60%",
      scrub: true
    }
  });

  gsap.set(".choice-2", { scale: .5, opacity: 0, y: 80 });
  gsap.to(".choice-2", {
    scale: 1,
    opacity: 1,
    delay: .3,
    y: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".choice-2",
      start: "bottom bottom",
      end: "60% 60%",
      scrub: true
    }
  });

  gsap.set(".del-item:nth-child(even)  *", { opacity: 0, x: 100 });
  gsap.to(".del-item:nth-child(even)  *", {
    opacity: 1,
    stagger: 0.25,
    x: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".del-item:nth-child(even)  *",
      start: "bottom bottom",
      end: "50% 50%",
      scrub: true
    }
  });

  gsap.set(".del-item:nth-child(odd)  *", { opacity: 0, x: -100 });
  gsap.to(".del-item:nth-child(odd)  *", {
    opacity: 1,
    stagger: 0.5,
    x: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".del-item:nth-child(odd)  *",
      start: "bottom bottom",
      end: "50% 50%",
      scrub: true
    }
  });

});


// Odometer Effect
if ($(".odometer").length > 0) {
  const odometerElements = document.querySelectorAll('.odometer');

  odometerElements.forEach(odometer => {
    const startValue = parseInt(odometer.getAttribute('data-start'), 10);
    const endValue = parseInt(odometer.getAttribute('data-end'), 10);

    ScrollTrigger.create({
      trigger: odometer,
      start: 'top 80%',
      onEnter: () => {
        gsap.to({ value: startValue }, {
          value: endValue,
          duration: 2,
          ease: "linear",
          onUpdate: function () {
            odometer.textContent = Math.floor(this.targets()[0].value).toLocaleString();
          }
        });
      },
      scrub: true
    });
  });
}


gsap.fromTo(".clients-carousel .item", { scale: 0, y: -50 }, { scale: 1, y: 0, stagger: .1 })


function split_text() {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  if(!isRTL){
  gsap.utils.toArray('.section-title').forEach((el) => {
    let
      dur = el.getAttribute("data-split-duration") ? el.getAttribute("data-split-duration") : 1,
      options = {},
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "bottom bottom",
          end: "75% 75%",
          scrub: true
        }
      }),
      split;
    options.type = "words,chars";
    split = new SplitText(el, options);
    for (var i = 0; i < split.words.length; i++) {
      tl.from(split.words[i], { duration: dur, delay: i * 0.08, opacity: 0, force3D: true }, i * 0.01);
      tl.from(split.words[i], { duration: dur, delay: i * 0.08, scale: i % 2 == 0 ? 0 : 2 }, i * 0.01);
    }
  });
  gsap.utils.toArray('.section-excerpt').forEach((el) => {
    let
      dur = el.getAttribute("data-split-duration") ? el.getAttribute("data-split-duration") : 1,
      options = {},
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          delay:1,
          start: "bottom bottom",
          end: "75% 75%",
          scrub: true
        }
      }),
      split;
    options.type = "words,chars";
    split = new SplitText(el, options);
    for (var i = 0; i < split.words.length; i++) {
      tl.from(split.words[i], { duration: dur, delay: .25, opacity: 0, force3D: true });
      tl.from(split.words[i], { duration: dur, delay: .25, scale: i % 2 == 0 ? 0 : 2 });
    }
  }); }
}

window.addEventListener('load', (event) => {
  split_text();
});
