function formValidation(){
    var email_label = document.getElementById("l1");
    var email = document.getElementById("email");
    var regex = /^([a-z A-z 0-9 \. -]+)@([a-z A-z 0-9 -]+)\.([a-z]{2,5}).([a-z]{2,5}?)?$/;
    if(regex.test(email.value)){
        email_label.innerHTML =  "Valid Email";
        email_label.style.visibility = "visible";
        email_label.style.color = "green";
        email.style.border = "2px solid green";
    }
    else{
        email_label.innerHTML =  "invalid Email";
        email_label.style.visibility = "visible";
        email_label.style.color = "red";
        email.style.border = "2px solid red";
    }
}

