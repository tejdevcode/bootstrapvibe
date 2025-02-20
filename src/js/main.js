// Import our custom CSS
//import '../scss/styles.scss'

// Import all of Bootstrap's JS
new WOW().init()

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

// For Bootstrap 5
const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navLinks.forEach((l) => {
   l.addEventListener('click', () => {
      if (menuToggle.classList.contains('show')) {
         bsCollapse.toggle()
      }
   })
})



import * as bootstrap from 'bootstrap'