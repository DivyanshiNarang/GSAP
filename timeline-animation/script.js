let menu = document.querySelector("#nav i");
let close = document.querySelector("#full i");

// to pause the timeline
// let tl = gsap.timeline({ paused: true });
let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.6,
})

tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.25,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0,
    rotate: 180,
})

tl.pause()

menu.addEventListener("click", function () {
    tl.play();
})

close.addEventListener("click", function () {
    tl.reverse();
})