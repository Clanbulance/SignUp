
let submitButton = document.querySelector(".submitButton");
let confirmMessage = document.querySelector(".errorMessage");
let a = document.getElementById("pwd"); 
let b = document.getElementById("confirmpwd");


//submitButton.addEventListener('click', pwdChecker);
pwdChecker();

function pwdChecker(){
    if( a.value == '' || b.value == '' ){
        confirmMessage.innerHTML = "Please fill in a password"; 
        submitButton.disabled = true;
    } else if ( a.value != b.value){
        console.log("not match")
        confirmMessage.style.color = "red";
        confirmMessage.innerHTML = "Passwords do not match";
        submitButton.style.backgroundColor = "red";
        submitButton.disabled = true;
    } else if (a.value == b.value){
        console.log("password ok");
        confirmMessage.style.color = "green";
        confirmMessage.innerHTML = "Passwords are identical";
        submitButton.style.backgroundColor = "rgb(45, 95, 45)";
        submitButton.disabled = false;
    }


};


function redirect(){ setTimeout(function () { window.location = "hln.be" }, 1);
};