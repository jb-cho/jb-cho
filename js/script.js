// typing animation
const typed = new Typed(".typing", {
  strings: ["서버 개발자", "웹 개발자"],
  typeSpeed: 150,
  BackSpeed: 10,
  loop: true,
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset > sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);

  console.log(scrollY);
});
