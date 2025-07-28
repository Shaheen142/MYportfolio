document.addEventListener("DOMContentLoaded", () => {
  // প্রয়োজনীয় সব এলিমেন্ট সিলেক্ট করা
  const wrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".dots-container");

  let currentIndex = 0; // বর্তমান স্লাইডের ইনডেক্স
  const totalSlides = slides.length;

  // --- ডট তৈরি করা ---
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll(".dot");
  dots[0].classList.add("active"); // প্রথম ডট'কে অ্যাক্টিভ করা

  // --- ফাংশন: নির্দিষ্ট স্লাইডে যাওয়া ---
  function goToSlide(slideIndex) {
    // র‍্যাপারটিকে স্লাইডের প্রস্থ অনুযায়ী সরানো
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

    // ডট অ্যাক্টিভ করা
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");

    currentIndex = slideIndex;
  }

  // --- পরের স্লাইডে যাওয়ার ফাংশন ---
  function showNextSlide() {
    let nextIndex = (currentIndex + 1) % totalSlides; // শেষ স্লাইডে থাকলে প্রথমটিতে ফিরে আসবে
    goToSlide(nextIndex);
  }

  // --- আগের স্লাইডে যাওয়ার ফাংশন ---
  function showPrevSlide() {
    let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides; // প্রথম স্লাইডে থাকলে শেষটিতে যাবে
    goToSlide(prevIndex);
  }

  // --- ইভেন্ট লিসেনার যোগ করা ---
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // --- স্বয়ংক্রিয় স্লাইড শো (প্রতি ৩ সেকেন্ড পর পর) ---
});

const ulDom = document.querySelector(".close-nav");
const dropdownDom = document.querySelector(".dropdown");
const closeBtnrt = document.querySelector("#close-btn");

function opbtn() {
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
const bar = document.querySelector(".bar");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const navClose = document.querySelector("#close-nav");

bar.addEventListener("click", () => {
  navUl.style.width = "250px";
  nav.style.width = "250px";
  navClose.style.transform = "rotate(-360deg)";
  navClose.style.transition = "all 0.3s linear";
});

navClose.addEventListener("click", () => {
  nav.style.width = "0px";
  navUl.style.width = "0px";
  navClose.style.transform = "rotate(0deg)";
});
