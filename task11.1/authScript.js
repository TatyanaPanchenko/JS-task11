const nameUser = document.querySelector(".name");
const idNumber = document.querySelector(".id-number");
const idFromStorage = JSON.parse(localStorage.getItem("chooseUser"));
nameUser.textContent = idFromStorage.nameUser;
idNumber.textContent = idFromStorage.id;
