const h1 = document.querySelector("h1");
let name = "Rishabh"

let halfvalue = Math.ceil(name.length/2)
console.log(halfvalue);

for (let i = 0; i < 7; i++) {
    const span = document.createElement("span");
    if(i<halfvalue){
        span.textContent = name[i]
        span.classList.add("startchars")
    }
    else{
        span.textContent = name[i]
        span.classList.add("endchars")
    }
    
    
    h1.appendChild(span)
}

gsap.from(".startchars", {
    y: 120,
    opacity: 0, 
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5
})


gsap.from(".endchars", {
    y: 120,
    opacity: 0, 
    duration: 0.8,
    stagger: -0.2,
    delay: 0.5
})
