const thePhone = localStorage.getItem("phone");
const theName = localStorage.getItem("finalName");
const theBirthday = localStorage.getItem("finalBirthday");
const theEmail = localStorage.getItem("finalEmail");

document.getElementById("phoneDisplay").textContent = thePhone;
document.getElementById("nameDisplay").textContent = theName;
document.getElementById("birthdayDisplay").textContent = theBirthday;
document.getElementById("emailDisplay").textContent = theEmail;