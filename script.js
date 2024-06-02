const side_icon=document.querySelector(".side-icons");
const icon1=document.querySelector("#first-icon");
const icon2=document.querySelector("#second-icon");
const side_bar=document.querySelector(".side-bar");
// icon1.style.backgroundColor="red";
var index=true;
side_icon.addEventListener("click", () => {
   if(index==true)
   {
  side_bar.style.width="70%";
  icon1.classList.add("icon1");
  icon2.classList.add("icon2");
  index=false;
   }
   else
   {
    side_bar.style.width="0%";
    icon1.classList.remove("icon1");
    icon2.classList.remove("icon2");
    index=true;
   }
  
})


gsap.from(".first-heading",{
   y:200,
   duration:0.5,
   delay:0.2,
   opacity:0
})
gsap.from(".big-img",{
   y:200,
   duration:0.5,
   delay:0.2,
   // stagger:0.5,
   opacity:0,
   scrollTrigger:{
       trigger:".big-img",
       scroller:"body",
       start:"top 90%",
       end: "top : 20%"
   }
})

gsap.from(".image1",{
   x:700,
   duration:1,
   delay:0.2,
   // stagger:0.5,
   scale:"0",
   scrollTrigger:{
       trigger:".image1",
       scroller:"body",
       start:"top 60%",
       end: "top : 20%"
   }
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 60,
        }
    }
});
