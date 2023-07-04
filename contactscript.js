// ----------- Script for Contact form ----------------//

// get data--------------------------------------
const contactNameInput = document.querySelector("#name");
const contactEmailInput = document.querySelector("#email");
const contactMessage = document.querySelector("#message");
const contactSuccess = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validate data----------------------------
function validateForm(){

    clearMessages();
    let errorFlag = false;

  if(contactNameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be blank";
    contactNameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(contactEmailInput.value)){
    errorNodes[1].innerText = "Invalid email address";
    contactEmailInput.classList.add("error-border");
    errorFlag = true;
  }

  if(contactMessage.value.length < 1){
    errorNodes[2].innerText = "Please enter message";
    contactMessage.classList.add("error-border");
    errorFlag = true;
  }

  if(!errorFlag){
    contactSuccess.innerText = "Success!"
    contactNameInput.value = ""; // Clear the name input
    contactEmailInput.value = ""; // Clear the email input
    contactMessage.value = ""; // Clear the message input
  }
}


// Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    contactSuccess.innerText = "";
    contactNameInput.classList.remove("error-border")
    contactEmailInput.classList.remove("error-border")
    contactMessage.classList.remove("error-border")
}


// Check if email is valid
function emailIsValid(contactEmailInput){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(contactEmailInput);
}


