let path = `M 45 250 Q 750 250 1490 250`
let finalPath = `M 45 250 Q 750 250 1490 250`

let boxString = document.querySelector("svg")

boxString.addEventListener('mousemove', function(dets){
    path = `M 45 250 Q ${dets.x} ${dets.y} 1490 250`
    console.log(path)
    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.2,
        ease: "power3.out"
    })
})

boxString.addEventListener('mouseleave', function(){
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 0.8,
        ease: "elastic.out(1,0.2)"
    })
})