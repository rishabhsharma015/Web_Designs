let tl = gsap.timeline()

tl.from(".nav h3", {
    y: -50,
    opacity: 0,
    delay: 0.1,
    duration: 0.6,
    stagger: 0.2
})

tl.from(".footer h2", {
    scale: 1.3,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2
})

tl.from(".img img", {
    opacity: 0,
    scale: 1.3,
    stagger: 0.1,
    duration: 0.2
})

tl.from(".text-div h1", {
    x: -500,
    opacity: 0, 
    duration: 1,
    stagger: 0.1
})



