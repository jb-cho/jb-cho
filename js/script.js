// typing animation
const typed = new Typed(".typing", {
  strings: ["프론트엔드 개발자", "웹 개발자"],
  typeSpeed: 150,
  BackSpeed: 10,
  loop: true,
});

const nav = document.querySelectorAll(".menu_link");
// querySectorAll 을 사용할 경우 NodeList(i) 처럼 배열처럼 생긴 유사배열이 생겨 흔히 사용하던 method를 사용할수 없음. 이럴 경우 Array.from을 이용해 배열로 만들어줄수 있고, 각각에 대해서는 for문을 이용해 이벤트를 전파시킬수 있음

console.log(nav);

const navHandler = (e) => {
  Array.from(nav).forEach((e) => {
    e.className = "menu_link";
  });
  e.target.classList.add("active");
};
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", navHandler);
}
