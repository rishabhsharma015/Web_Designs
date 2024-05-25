const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const imageDiv = document.querySelector(".image");

main.addEventListener('mousemove', function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

imageDiv.addEventListener("mousemove", function(){
    cursor.innerHTML = "View more"
    cursor.style.color = "black"
    gsap.to(cursor, {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        scale: 6
    })
})


imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        backgroundColor: "white",
        scale: 1
    })
})



