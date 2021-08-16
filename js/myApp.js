"use strict";
// selection
const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const addCountry = document.querySelector("#addCountry");
const addNewInfo = document.querySelector("#addNewInfo");
const table = document.querySelector("#table");
// addEventListener
form.addEventListener("submit",function (e) {
    e.preventDefault();
    checkInput();
    addInfo();
});
function checkInput() {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const addCountryValue = addCountry.value.trim();
   
    // condition checking
    //name
    if (fullNameValue === "") {
        setErrorFor(fullName,'please input your name');
    } else {
        setSuccessFor(fullName);
    }
    //email
    if (emailValue === "") {
        setErrorFor(email,'email can not be blank');
    } else {
        setSuccessFor(email);
    }
    // age
    if (ageValue == "") {
        setErrorFor(age,'Enter your age');
    }
    else {
        setSuccessFor(age);
    }
    //country
    if (addCountryValue === "") {
        setErrorFor(addCountry,'Enter your country Name');
    } else {
        setSuccessFor(addCountry);
    }
    
}
// function for error
function setErrorFor(input,message) {
    const formFroup =input.parentElement;
    const small = formFroup.querySelector('small');
    small.innerText = message;
    formFroup.className = "form-group error";
}
// function for success
 function setSuccessFor(input) {
    const formFroup =input.parentElement;
    formFroup.className = "form-group success";
}
//add information
function addInfo() {

    if (fullName.value === "") {
        table.style.display ="none";
    } else if (email.value === "") {
        table.style.display ="none";
    }
    else if (age.value === "") {
        table.style.display ="none";
    }
    else if (addCountry.value === "") {
        table.style.display ="none";
    } else{
        table.style.display ="block";
    }
    // name
    const newInfoRow = document.createElement("tr");
    const newName = document.createElement("th");
    newName.innerText = fullName.value;
    newInfoRow.appendChild(newName);
    document.querySelector("#fullName").value ="";
    // email
    const newEmail = document.createElement("th");
    newEmail.innerText = email.value;
    newInfoRow.appendChild(newEmail);
    document.querySelector("#email").value ="";
    // age
    const myAge = document.createElement("th");
    myAge.innerText = age.value;
    newInfoRow.appendChild(myAge);
    document.querySelector("#age").value ="";

    // country
    const newCountry = document.createElement("th");
    newCountry.innerText = addCountry.value;
    newInfoRow.appendChild(newCountry);
    document.querySelector("#addCountry").value ="";
   



    addNewInfo.appendChild(newInfoRow);
}