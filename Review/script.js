const menu = document.querySelector("h5");
const nav = document.querySelector("nav");
const cross = document.getElementById("cross");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const hero = document.querySelector(".hero");
menu.addEventListener('click', function(){
    nav.style.height = "35%"
    nav.style.color = "violet"
    nav.style.transition = "all ease 0.2s"
    nav.style.display = "flex";
    nav.style.justifyContent = "start";

    nav.style.position = "fixed"
    nav.style.left = "0"
    nav.style.top = "0"
    nav.style.zIndex = "1000"
    hero.style.zIndex = "-11111"

    ul.style.display = "initial"
    ul.style.width = "100%"
    ul.style.height = "100%"
    ul.style.display = "flex";
    ul.style.flexDirection = "column"
    ul.style.gap = "30px"
    ul.style.justifyContent = "center"
    ul.style.alignItems = "center";

    li.forEach((item) => {
        item.style.display = "block"; // or "inline-block" depending on your layout
    });

    menu.style.display = "none"
    cross.style.display = "inline";
    menu.style.fontSize = "22px"
})

cross.addEventListener('click', function(){
    cross.style.display = "none";
    menu.style.display = "block"
    nav.style.height = "50px"
    nav.style.transition = "all ease 0.2s"
    ul.style.display = "none"

})