const page2text = document.querySelector(".page2text");
page2text.addEventListener("mouseover", () => {
  page2text.classList.add("show");
});

page2text.addEventListener("mouseout", () => {
  page2text.classList.remove("show");
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
});

const PROJECTS = document.querySelectorAll(".PROJECTS");

PROJECTS.forEach((element) => {
  const image = element.getAttribute("data-image");
  element.addEventListener("mouseenter", () => {
    cursor.style.height = "300px";
    cursor.style.width = "300px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${image})`;
    cursor.style.mixBlendMode = "normal";
    cursor.style.backgroundImage;
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.height = "30px";
    cursor.style.width = "30px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = ``;
    cursor.style.mixBlendMode = "difference";
  });
});
