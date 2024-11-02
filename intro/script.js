// gsap.to("#box1", {
//     x: 100,
//     duration: 3,
//     delay: 1,
// });

// gsap.from("#box2", {
//     x: 100,
//     duration: 3,
//     // to start this animation after first one is finished, delay = durationFirst + delayFirst
//     delay: 4,
//     backgroundColor: "red",
//     rotate: 360,
//     // repeat: 1, to repeat animation (for infinte time: -1)
//     repeat: -1,
//     // yoyo to give animation of a yoyo: back and forth
//     yoyo: true,
// });

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     // stagger: 1,
//     stagger: -1,
// })

let tl = gsap.timeline();

tl.to("#box1", {
    x: 100,
    duration: 3,
    delay: 1,
});

// when using timeline, no need to calculate delay
tl.from("#box2", {
    x: 100,
    duration: 3,
    backgroundColor: "red",
    rotate: 360,
});