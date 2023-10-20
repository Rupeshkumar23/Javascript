let eyeIcon = document.getElementById("eye_Icon");
let password = document.getElementById("password");
eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "./Imgs/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "/Imgs/eye-close.png";
  }
};
// Create a Modal Box
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open_popup");
}
function closePopup() {
  popup.classList.remove("open_popup");
}
