// Your code goes here
const siteTitle = document.querySelector("h1.logo-heading");

siteTitle.addEventListener('mouseenter',()=>{
    siteTitle.style.fontSize = "5rem";
    siteTitle.style.color = "coral";
});

siteTitle.addEventListener("mouseleave", ()=>{
    siteTitle.style.fontSize = "4rem";
    siteTitle.style.color = "white";
});

const headerImg = document.querySelector("header.intro > img");

headerImg.addEventListener("dblclick", ()=>{
    const input = window.prompt("Caption this image!");
    if(document.querySelector("p.header-img-caption")){
        const caption = document.querySelector("p.header-img-caption");
        caption.textContent = input;
    }else {
        const caption = document.createElement("p");
        caption.classList.add("header-img-caption");
        caption.textContent = input;
        caption.style.textAlign = "center";

        headerImg.parentNode.insertBefore(caption, headerImg.nextSibling);
    }
});

const links = document.querySelectorAll("a");

links.forEach(link=>{
    link.style.color = "white";
    link.addEventListener("click", e =>{
        e.preventDefault();
        window.alert("Woah! You clicked a link!");
    });
});

window.addEventListener("load", ()=>{
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    header.style.background = "black";
    body.style.transition = "300ms ease-in";
    body.style.background = "black";
    body.style.color = "white";
});

const h2 = document.querySelector("h2");

window.addEventListener("keydown", ()=>{
    h2.style.color = "crimson";
});

const p = document.querySelector("p");

p.addEventListener("copy", (e)=>{
    p.style.color = "yellow";
    e.stopPropagation();
});

document.body.addEventListener("copy", ()=>{
    document.body.style.color = "green";
});

let counter = 0;

window.addEventListener('scroll',()=>{
    counter++;
    siteTitle.innerHTML = `${counter}`;
});

window.addEventListener('resize', ()=>{
    const dimensions = document.createElement("p");
    dimensions.textContent = window.innerWidth + ' ' + window.innerHeight;
    dimensions.style.color = "white"
    document.body.prepend(dimensions);
});

const images = document.querySelectorAll("img");

images.forEach(img=>{
    img.addEventListener("drag", ()=>{
        img.style.display = "none"
    });
});
