import "./less/index.less";

// Your code goes here!

//click
const buttonColor = document.querySelectorAll(".btn");

buttonColor.forEach((element) =>
  element.addEventListener("click", function () {
    element.style.backgroundColor = "red";
  })
);

//mouseover
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((element) =>
  element.addEventListener(
    "mouseover",
    () => {
      element.style.color = "blue";
      setTimeout(function () {
        element.style.color = "";
      }, 500);
    },
    false
  )
);

//scroll//
const bodyColr = document.querySelector("body");
window.addEventListener(
  "scroll",
  () => {
    bodyColr.style.backgroundColor = setBg();
    setTimeout(function () {
      bodyColr.style.backgroundColor = "";
    }, 500);
  },
  false
);

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

//keydown
bodyColr.addEventListener("keydown", (evt) => {
  if (evt.code == "KeyA") {
    setBg();
  } else if (evt.code == "KeyB") {
    bodyColr.style.backgroundColor = "";
  }
});

//keyup
window.addEventListener("keyup", (evt) => {
  setBg();
});

//wheel
function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  } else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
document.onwheel = zoom;

//dblclick
window.addEventListener("dblclick", () => {
  alert("bro you just double clicked that?!");
});

//copy
window.addEventListener("copy", () => {
  navigator.clipboard.readText().then((text) => {
    alert(`Woah man you just copied: ${text}!`);
  });
});

//resize
window.addEventListener("resize", () => {
  alert("Hey man don't resize me, thats not cool!");
});

//mouseenter
const mouseEnter = document.querySelector(".main-navigation");

mouseEnter.addEventListener("mouseenter", () => {
  mouseEnter.style.backgroundColor = "orange";
});

//mouseleave
mouseEnter.addEventListener("mouseleave", () => {
  mouseEnter.style.backgroundColor = "";
});
