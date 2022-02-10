const menu = document.querySelector(".links");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

closeBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}


const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'BOOTSTRAP', 'PYTHON','PHOTOSHOP',
    'MYSQL','WORDPRESS','FIGMA',
    'GIT', 'NODE'
];

var tagCloud = TagCloud('.sphere', Texts, {
    radius: 230,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

let color = '#008b8b';
document.querySelector('.sphere').style.color = color;