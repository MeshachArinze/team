document.addEventListener("DOMContentLoaded", ()=>{
    let meshHead, btn, navBtn, navMenu, navLink;
    meshHead = document.querySelector("header");
    btn = document.querySelector(".button-box");
    navBtn = document.querySelector("#navbar");
    navMenu = document.querySelector("ul");
    navLink = document.querySelectorAll("nav ul li a");

    (function(){
        btn.addEventListener("click", ()=>{
            btn.classList.toggle("change");

            navBtn.classList.toggle("navbar_menu");

             const func = () => {

            let i;
                for(i = 0; i < navLink.length; i++) {
                navLink[i].style.opacity = "1";
                navLink[i].style.color = "black";
                navLink[i].style.transition = "all 0.5s";
            }
            
            }
            func();
        })

        const bigHead = ()=>{
            meshHead.style.display = "grid";
            meshHead.style.display = "grid(grid-template-columns: 100%)";
        }
        bigHead();

        let backG;
        backG = document.getElementById("foreground");
        const back = ()=>{
            backG.style.width = "100%";
            backG.style.height = "50%";
            backG.style.background = "url(img_business.jpg) no-repeat top center";
            backG.style.backgroundSize = "cover";
            backG.style.backgroundClip = "border-box";
            backG.style.padding = "200px 0";
            backG.style.borderRadius = "5px"; 
            backG.style.opacity = "1";
            backG.style.transition = "opacity 0.9s ease";
        }
        back();


    })();
})