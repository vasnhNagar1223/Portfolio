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
