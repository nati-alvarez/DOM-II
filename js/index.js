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