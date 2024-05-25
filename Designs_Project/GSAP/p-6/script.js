function animations() {
  let tl = gsap.timeline();

  document.querySelector("body").addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.5,
    });
  });

  tl.from("nav h1,nav h4, nav button", {
    opacity: 0,
    y: -15,
    duration: 0.6,
    delay: 0.8,
    stagger: -0.1,
  });

  tl.from(".data h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".data p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".data button", {
    opacity: 0,
  });

  tl.from(
    ".image img",
    {
      opacity: 0,
    },
    "-=0.2"
  );

  tl.from(
    ".company-names img",
    {
      opacity: 0,
    },
    "-=0.2"
  );

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: ".main",
      // markers: true,
      start: "top 20%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(
    ".serviceDiv h3",
    {
      x: -200,
      duration: 0.6,
      opacity: 0,
    },
    "anim1"
  );

  tl2.from(
    ".serviceDiv p",
    {
      x: 400,
      opacity: 0,
      duration: 0.6,
    },
    "anim1"
  );

  tl2.from(
    ".container #elem1",
    {
      x: -200,
      opacity: 0,
      duration: 0.8,
    },
    "anim2"
  );

  tl2.from(
    ".container #elem2",
    {
      x: 200,
      opacity: 0,
      duration: 0.8,
    },
    "anim2"
  );

  tl2.from(
    ".container #elem3",
    {
      x: -200,
      opacity: 0,
      duration: 0.8,
    },
    "anim3"
  );

  tl2.from(
    ".container #elem4",
    {
      x: 200,
      opacity: 0,
      duration: 0.8,
    },
    "anim3"
  );

  tl2.from(".adDiv", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: ".adDiv",
      scroller: ".main",
      start: "top 60%",
      end: "top 0",
      // markers: true,
      scrub: 1,
    },
  });
}
function locojs() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locojs();
animations();
