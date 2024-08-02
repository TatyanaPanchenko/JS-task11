const nameUser = document.querySelector(".name");
const idNumber = document.querySelector(".id-number");
const idFromStorage = JSON.parse(localStorage.getItem("chooseUser"));
nameUser.textContent = idFromStorage.userName;
idNumber.textContent = idFromStorage.id;
