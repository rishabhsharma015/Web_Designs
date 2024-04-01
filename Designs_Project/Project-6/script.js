const menu = document.getElementById("menu");
const menu_icon = document.querySelector(".menu-icon");
const cross = document.getElementById("cross")
const nav = document.querySelector(".nav");
const navp2 = document.querySelector(".nav-part2")
const navp3 = document.querySelector(".nav-part3")
const navp2h4 = document.querySelectorAll(".nav-part2 h4");
const navp3h4 = document.querySelectorAll(".nav-part3 h4")
// const hero = document.querySelector(".hero");

menu.addEventListener('click', function(){
    console.log("clicked")
    nav.style.height = "500px";
    nav.style.background = "black";
    nav.style.transition = "all ease 0.2s"
    nav.style.display = "flex"
    nav.style.flexDirection = "column"
    nav.style.justifyContent = "center"
    // nav.style.borderBottom = "1px solid white"

    nav.style.position = "fixed"
    nav.style.left = "0"
    nav.style.top = "55px"
    nav.style.zIndex = "1000"
    
    
    cross.style.display = "block"
    cross.style.fontSize = "25px"

    navp2.style.display = "flex"
    navp2.style.width = "100%"
    navp2.style.height = "45%"
    navp2.style.flexDirection = "column"
    navp2.style.alignItems = "center"
    navp2.style.justifyContent = "start"
    navp2.style.paddingTop = "5px"
    navp2.style.gap = "40px"

    navp3.style.display = "flex"
    navp3.style.width = "100%"
    navp3.style.height = "20%"
    navp3.style.alignItems = "center"
    navp3.style.justifyContent = "center"
    navp3.style.paddingTop = "55px"
    navp3.style.gap = "5px"

    navp3h4[0].style.fontSize = "16px"
    navp3h4[0].style.fontWeight = "600"

    let arr = [...navp3h4]
    console.log(arr)
    console.log(arr)
    arr[1].childNodes.forEach(i=>{
        i.style.fontSize = "30px"
        i.style.fontWeight = "500"
        i.style.color = "wheat"
    })

    navp2h4.forEach((h4)=>{
        h4.style.color = "white"
        h4.style.fontSize = "16px"
        h4.style.fontWeight = "600"
    })


    menu.style.display = "none";
})

cross.addEventListener('click', function(){
    nav.style.height = "0";
    menu.style.display = "block";
    cross.style.display = "none"
    menu.style.fontSize = "25px"
    nav.style.border = "none"

    nav.style.transition = "all ease 0.5s"
    navp2.style.display = "none"
    navp3.style.display = "none"
})
