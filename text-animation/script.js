let h1 = document.querySelector('h1');
let h1Text = h1.textContent;

function breakTheText(text) {
    const splittedText = text.split('');

    let clutter = "";

    // splittedText.forEach((ele) => {
    //     clutter += `<span>${ele}</span>`;
    // })


    let halfValue = Math.floor(splittedText.length / 2);
    splittedText.forEach((ele, idx) => {
        if (idx < halfValue) {
            clutter += `<span class="leftSide">${ele}</span>`;
        } else {
            clutter += `<span class="rightSide">${ele}</span>`;
        }
    })

    h1.innerHTML = clutter
}

breakTheText(h1Text);

// transform: translate doesn't work on inline elements
// gsap.from("h1 span", {
//     opacity: 0,
//     y: 50,
//     duration: 0.8,
//     delay: 0.5,
//     // stagger: 0.15,
//     stagger: -0.15,
// })

gsap.from('.leftSide', {
    y: 80,
    duration: 0.6,
    delay: 0.15,
    stagger: 0.15,
    opacity: 0,
})

gsap.from('.rightSide', {
    y: 80,
    duration: 0.6,
    delay: 0.15,
    stagger: -0.15,
    opacity: 0,
})