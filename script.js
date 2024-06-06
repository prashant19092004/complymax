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
        // console.log(offset);

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar-link a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}



const serviceLink = document.querySelector(".service-pop-up-link");
const service_pop_up = document.querySelector(".service-pop-up");
const service_close = document.querySelector(".service-close");
const team_pop_up = document.querySelector(".team-pop-up");
const teamLink = document.querySelector(".team-pop-up-link");
const team_close = document.querySelector(".team-close");
const enquiryLink = document.querySelector(".enquiry-click");
const enquiry_pop_up = document.querySelector(".enquiry-section");
const enquiry_close = document.querySelector(".enquiry-close");

enquiryLink.addEventListener("click", () => {
    enquiry_pop_up.style.scale = 1;
})

enquiry_close.addEventListener("click", () => {
    enquiry_pop_up.style.scale = 0;
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        serviceLink.setAttribute("href", "#");
        teamLink.setAttribute("href", "#");
        serviceLink.addEventListener("click", () => {
            service_pop_up.style.scale = 1;
        })
        
        service_close.addEventListener("click", () => {
            service_pop_up.style.scale = 0;
        })

        teamLink.addEventListener("click", () => {
            team_pop_up.style.scale = 1;
        })
        
        team_close.addEventListener("click", () => {
            team_pop_up.style.scale = 0;
        })
    } else {
    //   document.body.style.backgroundColor = "pink";
    service_pop_up.style.scale = 0;
    team_pop_up.style.scale = 0;
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 990px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });



const form = document.querySelector(".enquiry-form form");
const fullName = document.getElementById("name");
const email_id = document.getElementById("email");
const contact = document.getElementById("contact_no");
const city = document.getElementById("city");
const message = document.getElementById("message");

function sendMail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email_id.value}<br> Phone No. : ${contact.value}<br> City: ${city.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pk62066042@gmail.com",
        Password : "BFEFAACBBFA7248B756817FA03725335CD55",
        To : 'pk62066042@gmail.com',
        From : "pk62066042@gmail.com",
        Subject : "Complymax Management Pvt. Lt.",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hii");
    sendMail();
})