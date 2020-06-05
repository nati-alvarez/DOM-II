const rockets = document.querySelectorAll(".block");
let previousTopRocket;

rockets.forEach(rocket=>{
    rocket.distance = 0;
    rocket.heldDown = false;
    rocket.style.position = "relative";

    rocket.addEventListener("mousedown", ()=>{
        rocket.heldDown = true;
        if(previousTopRocket) previousTopRocket.style.order = 0;
        rocket.style.order = -1;
        previousTopRocket = rocket;
    });
    rocket.addEventListener("mouseup", ()=>{
        rocket.heldDown = false;
    });
    rocket.addEventListener("mouseout", ()=>{
        rocket.heldDown = false;
    });

    setInterval(()=>{
        if(rocket.heldDown){
            rocket.distance += 5;
            rocket.style.left = rocket.distance + "px";
        }
    }, 50);
});