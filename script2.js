const fullName = document.querySelector(".name"); 
const bday = document.querySelector(".day");
const bmonth = document.querySelector(".month");
const byear = document.querySelector(".year");
const em = document.querySelector(".email");
const tick = document.querySelector(".no");

function dateValid(day, month, year) {
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
        return false;
    }

    if (dayNum > 0 && dayNum < 32 && monthNum > 0 && monthNum < 13 && yearNum > 1900 && yearNum <= new Date().getFullYear()) {
        const monthDate = new Date(yearNum, monthNum, 0).getDate();
        return dayNum <= monthDate;
    }
    return false;
}

function emailValid() {
    if(tick.checked) return true;
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(em.value);
}

document.getElementById("button").addEventListener("click", function() {
    let errorMessage = "";

    document.getElementById("name-error").textContent = "";
    document.getElementById("birth-error").textContent = "";
    document.getElementById("email-error").textContent = "";

    let isValid = true;

    if (!fullName.value) {
        document.getElementById("name-error").textContent = "*Please insert a name.";
        isValid = false;
    }

    if (!bday.value || !bmonth.value || !byear.value) {
        document.getElementById("birth-error").textContent = "*Please insert your birthday.";
        isValid = false;
    } else if (!dateValid(bday.value, bmonth.value, byear.value)) {
        document.getElementById("birth-error").textContent = "*Invalid date format. Please recheck your birth date.";
        isValid = false;
    }

    if (!emailValid()) {
        document.getElementById("email-error").textContent = "*Please insert a valid email address.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const finalName = fullName.value;
    const finalBirthday = `${bday.value}/${bmonth.value}/${byear.value}`;
    let finalEmail = tick.checked ? "Email not provided" : em.value
    
    localStorage.setItem("finalName", finalName);
    localStorage.setItem("finalBirthday", finalBirthday);
    localStorage.setItem("finalEmail", finalEmail);

    window.location.href = "page3.html";

});