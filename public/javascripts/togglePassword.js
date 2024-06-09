const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  // Toggle the eye and bi-eye icon
  togglePassword.classList.toggle("bi-eye-fill");
  togglePassword.classList.toggle("bi-eye-slash-fill");
});
