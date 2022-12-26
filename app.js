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

