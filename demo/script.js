gsap.from(".page1 .circle1", {
    scale: 0,
    opacity: 0,
    rotate: 360,
    delay: 1,
    duration:1.7
})
gsap.from(".page2 .circle1", {
    scale: 0,
    opacity: 0,
    rotate: 360,
    duration:1.7,
    scrollTrigger: {
        trigger: ".page2 .circle1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%"
    }
})


gsap.from(".page3 .circle1", {
    scale: 0,
    opacity: 0,
    rotate: 360,
    duration: 1.7,
    scrollTrigger: {
        trigger: ".page3 .circle1",
        scroller: "body",
        markers: true,
        start: "top 55%"
    }
})

