const ulDom = document.querySelector(".close-nav");
const dropdownDom = document.querySelector(".dropdown");
const closeBtnrt = document.querySelector("#close-btn");

const textareaDm = document.querySelector("textarea");
const btnDm = document.querySelector("button");
const nameDm = document.querySelector("#name");
const emailDm = document.querySelector("email");
const numberDm = document.querySelector("#number");
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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // ফর্মের ডিফল্ট সাবমিট হওয়াকে থামিয়ে দেয়
    event.preventDefault();

    // ইনপুট ফিল্ড এবং টেক্সটএরিয়ার মানগুলো সংগ্রহ করা
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();

    // চেক করা হচ্ছে কোনো ফিল্ড খালি আছে কিনা
    if (name === "" || email === "" || number === "" || message === "") {
      // যদি কোনো একটি ফিল্ডও খালি থাকে, তাহলে এই alert দেখাবে
      alert("Please fill all the fields.");
    } else {
      // যদি সবগুলো ফিল্ড পূরণ করা থাকে, তাহলে এই alert দেখাবে
      alert("Thanks for your message 😊😊");
      // এখানে আপনি ফর্মের ডেটা সার্ভারে পাঠানোর কোড লিখতে পারেন
      // যেমন: document.getElementById('contact-form').submit();
      // অথবা ফর্মটি রিসেট করতে পারেন
      document.getElementById("contact-form").reset();
    }
  });
