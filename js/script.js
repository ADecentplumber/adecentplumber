// =====================================
// A Decent Plumber
// script.js
// =====================================

// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Header shadow while scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow = "0 3px 12px rgba(0,0,0,.15)";

    }

});

// Fade in sections

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// Contact form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you for contacting A Decent Plumber!\n\nYour request has been received.\n\nFor immediate service please call\n(603) 664-DCNT (3268)."
);

form.reset();

});

}

// Project image hover

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// Footer year

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML="© "+new Date().getFullYear()+" A Decent Plumber. All Rights Reserved.";

}

console.log("A Decent Plumber website loaded successfully.");
