const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const header = document.querySelector(".hContainer");
const footer = document.querySelector(".fContainer");
const greenSeperator = document.querySelector(".greenSeperator");

const hamburger = document.querySelector(".menu__btn");
const checkbox = document.querySelector("#menu__toggle");
const menuBox = document.querySelector(".menu__box");

if (isMobile) {
  header.classList.add("specialWidth");
  footer.classList.add("specialWidth");
  greenSeperator.classList.add("specialWidth");
  //   menuBox.classList.add("specialLeft");
}

hamburger.addEventListener("click", function () {
  if (isMobile) {
    if (!checkbox.checked) {
      menuBox.classList.add("specialLeftMobile");
      hamburger.classList.add("specialLeftMobileButton");
    } else {
      menuBox.classList.remove("specialLeftMobile");
      hamburger.classList.remove("specialLeftMobileButton");
    }
  } else {
    if (!checkbox.checked) {
      menuBox.classList.add("specialLeft");
      hamburger.classList.add("specialLeftButton");
    } else {
      menuBox.classList.remove("specialLeft");
      hamburger.classList.remove("specialLeftButton");
    }
  }
});
