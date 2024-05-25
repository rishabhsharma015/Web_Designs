const h1Element = document.querySelector("h1");

document.querySelector("body").addEventListener("mouseout", function(e) {
    if (!h1Element.contains(e.relatedTarget)) {
        $('h1').textillate({ out: { effect: 'fadeOut' } });
    }
});

h1Element.addEventListener("mouseover", function(e) {
    $('h1').textillate({ in: { effect: 'fadeIn' } });
});
