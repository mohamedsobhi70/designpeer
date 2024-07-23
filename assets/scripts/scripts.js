AOS.init();
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 450) {
    header.classList.add('stky');
  } else {
    header.classList.remove('stky');
  }
});

document.querySelector(".menu-close-btn").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("flex");
})
document.querySelector(".mobile-menu-btn ").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("flex");

})

//////////////////
////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////                NEW                /////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////

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


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
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

$('.work-carousel1').owlCarousel({
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
      items: 5
    }
  }
});

$('.work-carousel2').owlCarousel({
  center: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 1.3,
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: false,
  onInitialized: createCustomDots, // Call function to create custom dots
  onChanged: syncDots, // Sync dots on change
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
      items: 5
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



gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add("(min-width: 1024px)", () => {
  gsap.to(".service-card.right", {
    x: 200,
    scrollTrigger: {
      trigger: ".service-card.right",
      start: "bottom bottom",
      scrub: true
    }
  });

  gsap.to(".service-card.left", {
    x: -200,
    scrollTrigger: {
      trigger: ".service-card.left",
      start: "bottom bottom",
      scrub: true
    }
  });

  gsap.set(".faq-item", { opacity: 0, y: 50 });
  gsap.to(".faq-item", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".faq-item",
      start: "bottom bottom",
      end: "50% 50%",
      scrub: true
    }
  });

  gsap.set(".testimonial-item", { scale: .5, opacity: 0, y: 50 });
  gsap.to(".testimonial-item", {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".testimonial-item",
      start: "bottom bottom",
      end: "65% 65%",
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
      end: "70% 70%",
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
      end: "50% 50%",
      scrub: true
    }
  });

  gsap.set(".choice-2", { scale: .5, opacity: 0, y: 50 });
  gsap.to(".choice-2", {
    scale: 1,
    opacity: 1,
    delay: .3,
    y: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".choice-2",
      start: "bottom bottom",
      end: "50% 50%",
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


gsap.from(".deslog1", { duration: .7, opacity: 0, scale: .1, transformOrigin: "0% 50%", x: 200 })
gsap.from(".deslog2", { duration: .5, opacity: 0, scale: .2, x: 40, delay: .5, y: 60 })
gsap.from(".path1", { duration: .07, opacity: 0, stagger: .05, scale: 2, transformOrigin: "50% 50%", delay: 1.2 })

