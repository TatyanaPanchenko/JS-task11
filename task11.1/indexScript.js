const signup = document.querySelector(".form-registration");
const login = document.querySelector(".form-login");
const { formReg, formLog } = document.forms;
const { createEmail, createName, createPassword, confirmPassword } =
  formReg.elements;
const { enterEmail, enterPassword } = formLog.elements;
const errorReg = document.querySelector(".form-registration .error");
const errorLog = document.querySelector(".form-login .error");
const messageReg = document.querySelector(".form-registration .message");
const messageLog = document.querySelector(".form-login .message");
let array = [];

let usersLocalStorage = JSON.parse(localStorage.getItem("users"));
if (usersLocalStorage) {
  array = usersLocalStorage;
}
formReg.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    createEmail.value === "" ||
    createName.value === "" ||
    createPassword.value === ""
  ) {
    errorReg.textContent = "Enter value";
    messageReg.textContent = "";
    return;
  } else if (createPassword.value !== confirmPassword.value) {
    errorReg.textContent = "Enter the same passwords";
    messageReg.textContent = "";
    return;
  } else {
    messageReg.textContent = "Account created successfully";
    errorReg.textContent = "";
    const userDate = {
      userEmail: createEmail.value,
      userName: createName.value,
      userPassword: createPassword.value,
      userId: generateId(),
    };
    array.push(userDate);
    localStorage.setItem("users", JSON.stringify(array));
    formReg.reset();
  }
});

function generateId() {
  const timeStamp = new Date().getTime().toString(16);
  const randomNum = Math.random().toString(16).slice(2, 8);
  return `${timeStamp}-${randomNum}`;
}

formLog.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkDate = {
    userEmail: enterEmail.value,
    userPassword: enterPassword.value,
  };
  const checkDateStorage = JSON.parse(localStorage.getItem("users"));
  checkDateStorage.find((element) => {
    if (
      element.userEmail === checkDate.userEmail &&
      element.userPassword === checkDate.userPassword
    ) {
      messageLog.textContent = "";
      errorLog.textContent = "";
      window.location.href = "./auth.html";
      localStorage.setItem("chooseUser", JSON.stringify(element));
      return true;
    }
    if (
      element.userEmail !== checkDate.userEmail ||
      element.userPassword !== checkDate.userPassword
    ) {
      errorLog.textContent = "Values entered incorrectly";
      messageLog.textContent = "";
      return false;
    }
  });
});
formReg.addEventListener("click", (event) => {
  if (event.target.matches(".link-login")) {
    signup.classList.add("none");
    login.classList.remove("none");
  }
});
formLog.addEventListener("click", (event) => {
  if (event.target.matches(".link-register")) {
    login.classList.add("none");
    signup.classList.remove("none");
  }
});
