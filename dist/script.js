const burgerMenuBtn=document.querySelector(".humburger-menu"),headerNav=document.querySelector(".header-nav"),toggleThemeButton=document.querySelector(".header-icon-light"),headerItemLinks=document.querySelectorAll(".header-item-link"),body=document.querySelector("body");burgerMenuBtn.addEventListener("click",(()=>{headerNav.classList.toggle("active"),burgerMenuBtn.classList.toggle("open")}));let number=document.querySelector(".number"),numberTop=number.getBoundingClientRect().top,start=+number.innerHTML,end=+number.dataset.max;window.addEventListener("scroll",(function e(){if(window.pageYOffset>numberTop-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval((function(){number.innerHTML=++start,start==end&&clearInterval(n)}),10)}}));let number1=document.querySelector(".number1"),number1Top=number1.getBoundingClientRect().top,start1=+number1.innerHTML,end1=+number1.dataset.max;window.addEventListener("scroll",(function e(){if(window.pageYOffset>number1Top-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval((function(){number1.innerHTML=++start1,start1==end1&&clearInterval(n)}),10)}}));let number2=document.querySelector(".number2"),number2Top=number2.getBoundingClientRect().top,start2=+number2.innerHTML,end2=+number2.dataset.max;window.addEventListener("scroll",(function e(){if(window.pageYOffset>number2Top-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval((function(){number2.innerHTML=++start2,start2==end2&&clearInterval(n)}),5)}}));let number3=document.querySelector(".number3"),number3Top=number3.getBoundingClientRect().top,start3=+number3.innerHTML,end3=+number3.dataset.max;window.addEventListener("scroll",(function e(){if(window.pageYOffset>number3Top-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval((function(){number3.innerHTML=++start3,start3==end3&&clearInterval(n)}),5)}})),$(document).ready((function(){$(".people-list").slick({dots:!1,infinite:!1,speed:300,buttons:!1,prevArrow:!1,nextArrow:!1,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:3}},{breakpoint:650,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})})),$(document).ready((function(){$(".feedback-slider-list").slick({dots:!0,infinite:!1,speed:300,buttons:!1,prevArrow:!1,nextArrow:!1,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:650,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1}}]})})),$(document).ready((function(){$(".blog-slider-list").slick({dots:!0,infinite:!1,speed:300,buttons:!1,prevArrow:!1,nextArrow:!1,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:650,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1}}]})})),headerItemLinks.forEach((e=>{e.addEventListener("click",(()=>{headerNav.classList.remove("active"),burgerMenuBtn.classList.remove("open")}))})),toggleThemeButton.addEventListener("click",(()=>{body.classList.toggle("dark-theme")}));
//# sourceMappingURL=script.js.map