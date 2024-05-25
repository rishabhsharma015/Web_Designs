let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");


gsap.from(".nav", {
    y: -100,
    opacity: 0,
    duration: 1
})

let tl = gsap.timeline();

tl.to(".fullnav", {
    right: "0%",
    duration: 0.4,
})

tl.from(".fullnav h4", {
    x: 150,
    opacity:0,
    stagger: 0.1
})

tl.from(".fullnav i", {
    opacity: 0
})

tl.pause()  // by default time executes when the pages loads, but by doing tl.pause() we have paused the timeline


menu.addEventListener('click', function(){
    tl.play() // by clicking on the menu icon we are playing the timeline , using tl.play()
})

close.addEventListener('click', function(){
    tl.reverse() // by clicking on the close icon we are reverseing the timeline, using tl.reverse()
})


light.addEventListener('click', function(){
    dark.style.display = "block"
    light.style.display = "none"
    document.querySelectorAll(".fullnav h4").forEach(h4=>{
        h4.style.color = "white"
    })
    document.querySelectorAll(".nav h4").forEach(h4=>{
        h4.style.color = "white"
    })
    document.querySelectorAll(".nav i").forEach(h4=>{
        h4.style.color = "white"
    })
    gsap.to(".main", {
        duration: 0.3,
        backgroundColor: "#050521"
    })
})

dark.addEventListener('click', function(){
    light.style.display = "block"
    dark.style.display = "none"
    document.querySelectorAll(".fullnav h4").forEach(h4=>{
        h4.style.color = "black"
    })
    document.querySelectorAll(".nav h4").forEach(h4=>{
        h4.style.color = "black"
    })
    document.querySelectorAll(".nav i").forEach(h4=>{
        h4.style.color = "black"
    })
    gsap.to(".main", {
        duration: 0.3,
        backgroundColor: "rgb(0, 183, 255)"
    })
})