gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 3,
    rotate: 360,
})

gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 3,
    rotate: 360,
    scrollTrigger: "#page2 #box",
})

gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    duration: 3,
    rotate: 360,
    scrollTrigger: {
        // trigger - point on which it triggers animation 
        trigger: "#page3 #box",
        scroller: "body",
        // markers for scroll trigger point
        markers: true,
        start: "top 90%",
        end: "top 50%",
        // scrub: true,
        scrub: 2,
    }
})

gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})

gsap.from("#page2 h2", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})

gsap.to("#page h1", {
    transform: "translateX(-60%)",
    scrollTrigger: {
        trigger: "#page",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        // whenever using pin property, have to trigger the parent element
        pin: true,
    }
})