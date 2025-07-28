const ulDom = document.querySelector(".close-nav");
const dropdownDom = document.querySelector(".dropdown");
const closeBtnrt = document.querySelector("#close-btn");

function openBtn() {
  ulDom.style.width = "250px";

  closeBtnrt.style.transform = "rotate(-360deg)";
}

function closeBtn() {
  ulDom.style.width = "0";
  closeBtnrt.style.transform = "rotate(0deg)";
}

function hoverBtn() {
  dropdownDom.style.display = "block";
  console.log("hello");
}
