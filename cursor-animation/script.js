const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,
    })
})

imageDiv.addEventListener('mouseenter', function () {
    cursor.innerHTML = 'View More';
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: '#ffffff8a'
    })
})

imageDiv.addEventListener('mouseleave', function () {
    cursor.innerHTML = '';
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#fff'
    })
})