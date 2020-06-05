// Your code goes here
const siteTitle = document.querySelector("h1.logo-heading");

siteTitle.addEventListener('mouseenter',()=>{
    siteTitle.style.fontSize = "5rem";
    siteTitle.style.color = "coral";
});

siteTitle.addEventListener("mouseleave", ()=>{
    siteTitle.style.fontSize = "4rem";
    siteTitle.style.color = "black";
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
    link.addEventListener("click", e =>{
        e.preventDefault();
        window.alert("Woah! You clicked a link!")
    });
});

