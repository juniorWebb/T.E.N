const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-slider");
const mobileNavBar = document.querySelector(".menu-box");
const backDrop = document.querySelector(".mobile-menu .menu-backdrop");

const sectionOneOptions = {
  rootMargin: "-682px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



/* Set the width of the sidebar to (show it) */
function openNav() {
  mobileNavBar.style.right = "0%";
  backDrop.style.opacity = "1";
  backDrop.style.visibility = "visible";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  mobileNavBar.style.right = "-100%";
  backDrop.style.opacity = "0";
  backDrop.style.visibility = "hidden";
}
