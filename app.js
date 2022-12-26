const ELEMENT_VISIBLE_TRIGGER = 100;

/* ------- css animations on content upon scroll up ------ */
const reveal = function() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach(item => {
        var windowHeight = window.innerHeight;
        var elementTop = item.getBoundingClientRect().top;
        var elementVisible = ELEMENT_VISIBLE_TRIGGER;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("current");
        } else {
            item.classList.remove("current");
        }
    })
}
window.addEventListener("scroll", reveal);



// /* ------- navbar animations on content upon scroll ------ */
// var navbar = document.querySelector(".navbar");
// var previousPageScroll = 0;

// window.onscroll = function() {
//     var currentPageScroll = window.scrollY;
//     if (currentPageScroll > 200) {
//         // true("scroll up") -> show navbar : false("scroll down") -> hide navbar
//         (previousPageScroll - currentPageScroll > 0) ? navbar.style.top = "0" : navbar.style.top ="-74px";
//     }
//     previousPageScroll = currentPageScroll;    // update
// }

/* --------- custom dropdown for each project container -------- */
// let arrow = document.querySelectorAll("span.btn i");
// arrow.forEach(item => {
//     item.onclick = function() {
//         var details = this.parentNode.parentNode.nextSibling.nextSibling; //access div.details element
//         details.classList.toggle("active");
//         this.classList.toggle("active")
//     }
// })

/* --------- section #projects filtering based on category -------- */
// var projects = document.querySelectorAll(".project-container");
// var filters = document.querySelectorAll(".projects .nav-link");

// // initialization
// projects.forEach(project => {
//     // project.parentNode is  <div class="col-lg-6 col-12">
//     (project.getAttribute("data-value") == "academic") ? project.parentNode.classList.remove("hide") : project.parentNode.classList.add("hide");
// })


// typed.js
