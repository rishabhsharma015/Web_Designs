function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingAnimation() {
  const tl = gsap.timeline();

  gsap.from(".line1-part1", {
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out",
  });

  tl.from(".line1 h1, .line1 h2", {
    y: 120,
    opacity: 0,
    stagger: 0.26,
    duration: 1.4,
    delay: 0.5,
    ease: "power3.out",

    onStart: function () {
      const counter = document.querySelector(".line1-part1 h5");
      let count = 0;
      const interval = setInterval(() => {
        count++;
        counter.innerHTML = count;

        if (count == 100) {
          clearInterval(interval);
        }
      }, 28);
    },
  });

  tl.to(".line1 h1, .line1 h2, .line1-part1", {
    opacity: 0,
    delay: 1.1,
    duration: 1.4,
    ease: "power3.out",
  });

  tl.to(".line1 h2", {
    display: "none",
  });

  tl.to(".loader", {
    y: "-100%",
    opacity: 0,
    // duration: 0.1,
    ease: "power3.out",
  });

  tl.to(".loader", {
    display: "none",
    duration: 0.1,
    ease: "power3.out",
  });

  tl.from(".page1", {
      y: "100%",
      opacity: 0,
      duration: 0.1,
      ease: Power4
  })

 

  tl.from(".nav", {
    opacity: 0
  })

  tl.from(".hero h1, .hero3 h1", {
    y: 120,
    opacity: 0,
    stagger: 0.1,
    duration: .8,
    ease: "power3.out",
  })
}

function cursorAnimation(){
//     const cursor = document.querySelector(".cursor");
//     document.addEventListener("mousemove",function(event){
//     gsap.to(".cursor", {
//         x: event.clientX,
//         y: event.clientY,
//         ease: "power3.out"
//     })
// })

// Shery.mouseFollower({
//   // skew: true,
//   // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   // duration: 1,
// });
Shery.makeMagnet(".nav-part2 h4");


var videoContainer = document.querySelector(".video-container");
videoContainer.addEventListener("mouseenter",function(){
  gsap.to(".mousefollower", {
    opacity: 0,
  })
  videoContainer.addEventListener("mousemove",function(event){
    gsap.to(".video-cursor", {
      x: event.clientX -1100,
      y: event.clientY - 150,
      ease: "power3.out"
    })
  })
});

videoContainer.addEventListener("mouseleave",function(){
  gsap.to(".mousefollower", {
    opacity: 1,
  });

  gsap.to(".video-cursor", {
    top: "-12%",
    right: "20%"
  })
})


flag = 0
let video = document.querySelector(".video-container video");
video.addEventListener("click",function(event){
  if(flag == 0){
    video.play();
  video.style.opacity = 1;
  

  let cursor = document.querySelector(".video-cursor")
  cursor.innerHTML = `<i class="ri-pause-large-fill"></i>`
  gsap.to(".video-cursor", {
    scale: 0.5
  })
  flag = 1;
  }
  else{
    video.pause();
    video.style.opacity = 0;
    let cursor = document.querySelector(".video-cursor")
    cursor.innerHTML = `<i class="ri-play-large-fill"></i>`
    gsap.to(".video-cursor", {
      scale: 1
    })
    flag = 0;
  }
})

}

function sheryAnimation(){
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
  })
}

gsap.to(".line1-container", {
  transform: "translateX(calc(100% - 4px))",
  repeat: -1,
  duration: 22,
  ease: "linear",
})

gsap.to("#line-2, #line-4", {
  transform: "translateX(calc(-100% - 4px))",
  repeat: -1,
  duration: 22,
  ease: "linear",
})
Shery.makeMagnet(".nav-part2 h4");


document.addEventListener("mousemove", (dets)=>{
  gsap.to("#flag", {
    x: dets.x,
    y: dets.y
  })
})

document.querySelector(".hero3").addEventListener("mouseenter", function(){
  gsap.to("#flag", {
    opacity: 1,
    // duration: 1,
    ease: "power3.out",
  })
})

document.querySelector(".hero3").addEventListener("mouseleave", function(){
  gsap.to("#flag", {
    opacity: 0,
    // duration: 1,
    ease: "power3.out",
  })
})



sheryAnimation();
cursorAnimation();
locomotive();
loadingAnimation();



