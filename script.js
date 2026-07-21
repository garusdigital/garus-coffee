/*
====================================
GARUS COFFEE
JavaScript Interaction
by Garus Digital
====================================
*/


// ================================
// NAVBAR EFFECT
// ================================


const navbar = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }


});





// ================================
// SMOOTH SCROLL
// ================================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});







// ================================
// SCROLL ANIMATION
// ================================


const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"fade-up"
);


}


});


},{

threshold:0.15

});





document.querySelectorAll("section")
.forEach(section=>{


observer.observe(section);


});







// ================================
// BACK TO TOP BUTTON
// ================================


const topButton =
document.createElement("button");


topButton.innerHTML="↑";


topButton.className=

`
fixed
bottom-24
right-6
w-12
h-12
rounded-full
bg-yellow-600
text-white
text-xl
shadow-xl
hidden
z-50
`;



document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


if(window.scrollY > 600){


topButton.classList.remove("hidden");


}else{


topButton.classList.add("hidden");


}


});





topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});






// ================================
// WEBSITE READY
// ================================


console.log(
"Garus Coffee Website Ready ☕"
);
