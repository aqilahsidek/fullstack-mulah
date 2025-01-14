document.addEventListener("DOMContentLoaded", function(){
    const numb = document.querySelector(".pnum");
    const cCode = document.querySelector(".codes");

    numb.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ''); 
    });

    document.querySelector(".button").addEventListener("click", function() {
        let phone = cCode.value + numb.value;
        
        if(phone === "+60173527250"){
            localStorage.setItem("phone", phone);
            window.location.href = "page2.html"
        }
        else{
            alert("Please recheck your phone number")
            document.getElementById("num-error").textContent = "*Please insert a valid phone number.";
        }
    });
});