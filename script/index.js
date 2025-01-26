// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let el = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroll: "body",
    scrub: 3,
  },
});

//page 1

el.to(
  ".page1Balls1",
  {
    x: -1800,
    y: 2200,
  },
  "ani"
);

el.to(
  ".page1Balls2",
  {
    x: -1800,
    y: -700,
  },
  "ani"
);

el.to(
  ".page1Balls3",
  {
    x: 1800,
    y: -800,
  },
  "ani"
);

gsap.to(".randomText", {
  x: "40%",
  scrollTrigger: {
    trigger: ".nav", // Fixed selector

    scroller: "body", // Ensure this is correct for your setup
    scrub: 2, // Synchronize animation with scroll
    start: "top 0%",
    end: "top -100%",
  },
});

gsap.to(".page1Name", {
  x: "-120%",
  scrollTrigger: {
    trigger: ".nav", // Fixed selector

    scroller: "body", // Ensure this is correct for your setup
    scrub: 5, // Synchronize animation with scroll
    start: "top 0%",
    end: "top -50%",
  },
});

gsap.to(".navleft", {
  x: -800,
  scrollTrigger: {
    trigger: ".nav",
    sctoller: "body",
    start: "top 0% ",
    scrub: 2,
  },
});

gsap.to(".navright , .navcenter", {
  x: 800,
  scrollTrigger: {
    trigger: ".nav",
    sctoller: "body",
    start: "top 0% ",
    scrub: 2,
  },
});

//page 2

const p2tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2imagecontainer",
    scrub: 2,
    end: "top 0%",
    start: "top 60%",
  },
});

p2tl.from(".list", {
  scale: 0.5,
  duration: 4,
});

//page4
gsap.from(".PROJECT-CONTAINER div", {
  y: 100,
  stagger: 0.1,
  filter: "blur(2px)",
  scale: 0,
  transform: "rotate(50deg)",
  scrollTrigger: {
    trigger: ".page4seemywork",
    scrub: 2,
    start: "top 80%",
    end: "top 10%",
  },
});

//page5
gsap.to(".page5EDUCATION", {
  transform: " translateX(-85%)",
  scrollTrigger: {
    trigger: ".page5",
    end: "top -800%",
    scrub: 3,
    pin: true,
  },
});

//page6

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow", // Enable Coverflow effect
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50, // Rotation angle
    stretch: 0, // Space between slides in px
    depth: 100, // Depth of the slide effect
    modifier: 1, // Multiplier for depth and rotate values
    slideShadows: true, // Enable shadows
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
