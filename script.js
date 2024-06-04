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

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar-link a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(offset);

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar-link a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}