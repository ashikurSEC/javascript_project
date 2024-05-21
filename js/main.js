const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "My Dream is Software Engineer 😏";
    gif.src = "https://media0.giphy.com/media/bGgsc5mWoryfgKBx1u/200w.gif?cid=6c09b952vcjdjno5v48mtwstx3sd4xej7v7bkbda0bmp68ii&ep=v1_gifs_search&rid=200w.gif&ct=g";
    gif.style.display = "block";
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "My Dream is Networking Engineer 😐"
    gif.src = "https://i.pinimg.com/originals/ae/7c/d0/ae7cd05d9438e3a42f955718affa1c9b.gif";
    gif.style.display = "block";

});