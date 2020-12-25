// ********** set date ************
// select span
// const date = (document.getElementById(
//   "date"
// ).innerHTML = new Date().getFullYear());

// select button and links
const navBtn = document.querySelector(".nav--toggle");
const links = document.querySelector(".nav--links");
// add event listener
navBtn.addEventListener("click", () => {
  const btns = links.classList;
  if (!btns.contains("show--links")) {
    btns.add("show--links");
  } else {
    btns.remove("show--links");
  }
});

//  smooth scroll
// select links
const scrollLinks = document.querySelectorAll(".scroll-links");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 84;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
