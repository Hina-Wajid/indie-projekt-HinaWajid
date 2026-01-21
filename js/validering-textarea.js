function validateForm(event)
{
event.preventDefault();
console.log(event);
let form = event.target;
console.log(form.name);                 //name attribute of textbox
console.log(form.name.value);
console.log(form.newsletter.checked);

//-------------navn---------------------------------------   

if(!form.name.value) {
    form.name.setCustomValidity("udfyld venligst dit navn");
    form.name.nextElementSibling.textContent = form.name.validationMessage;
    form.name.focus();
}
else if(!isNaN(form.name.value)) {

//felt er ikke Ok! koder til custom validity , instead of alert, show message in span next to inputbox, fokus og we removed retur false so all message
    form.name.setCustomValidity("navn skal ikke være nummer");
    form.name.nextElementSibling.textContent = form.name.validationMessage;
    form.name.focus();
   

}
else {
    form.name.nextElementSibling.textContent = "";
    form.name.setCustomValidity("");

}

//----------------address------------------------------------

if(form.address.value == "") {

    form.address.setCustomValidity("udflyd venligst adresse");
    form.address.nextElementSibling.textContent = form.address.validationMessage;
    form.address.focus();
}
else {
    form.address.nextElementSibling.textContent = "";
    form.address.setCustomValidity("");

}
//----validering af postnummer 

if(form.zip.value.length == 0) {

    form.zip.setCustomValidity("udflyd venligst postnummer");
    form.zip.nextElementSibling.textContent = form.zip.validationMessage;
    form.zip.focus();
   }
else if(isNaN(form.zip.value)) {

//felt er ikke Ok! koder til custom validity , instead of alert, show message in span next to inputbox, fokus og we removed retur false so all message
    form.zip.setCustomValidity("postnummer skal være tal");
    form.zip.nextElementSibling.textContent = form.zip.validationMessage;
    form.zip.focus();
   

}
else if(form.zip.value.length !== 4){
    form.zip.setCustomValidity("postnummer skal være fire cifre");
    form.zip.nextElementSibling.textContent = form.zip.validationMessage;
    form.zip.focus();
   
}
else
{
    form.zip.nextElementSibling.textContent = "";
    form.zip.setCustomValidity("");

}

//---------------by navn---------------

if(form.city.value == "") {

    form.city.setCustomValidity("udflyd venligst by");
   form.city.nextElementSibling.textContent = form.city.validationMessage;
    form.city.focus();

}
else
{
 form.city.nextElementSibling.textContent = "";
 form.city.setCustomValidity("");

}


//----validering af email


if(!form.email.value) {
    form.email.setCustomValidity("udflyd venligst email");
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
    
}
else if(!checkEmail(form.email.value))
{
    form.email.setCustomValidity("udflyd venligst email korrekt format");
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
    
}
else
{
    form.email.nextElementSibling.textContent = "" ;
    form.email.setCustomValidity("");

}

//----validering af telefonnummer-----------------

if(!form.phone.value) {

    form.phone.setCustomValidity("udflyd venligst telefonnummer");
    form.phone.nextElementSibling.textContent = form.phone.validationMessage;
    form.phone.focus();
   
}
else if(isNaN(form.phone.value))
{
//felt er ikke Ok! koder til custom validity , show message in span after input box, fokus og retur false
   form.phone.setCustomValidity("telefonnummer skal være tal");
    form.phone.nextElementSibling.textContent = form.phone.validationMessage;
    form.phone.focus();
    

}
else if(form.phone.value.length !== 8){
    form.phone.setCustomValidity("telefonnummer skal være otte cifre");
    form.phone.nextElementSibling.textContent = form.phone.validationMessage;
    form.phone.focus();
 
}
else
{
    form.phone.nextElementSibling.textContent = "" ;
    form.phone.setCustomValidity("");

}

//---------------------besked-------------------------------


if(!form.message.value) {
    form.message.setCustomValidity("skriv venligst en besked");
    form.message.nextElementSibling.textContent = form.message.validationMessage;
    form.message.focus();
     console.log(message.checkValidity());
   
}
else
{
    form.message.nextElementSibling.textContent = "" ;
    form.message.setCustomValidity("");
   

}

//-----------------newletter-----------------------------------
/* 
if(!form.newsletter.checked) {
    form.newsletter.setCustomValidity("Tilmeld dig til vores nyhedsbrev");
    form.newsletter.parentElement.nextElementSibling.textContent = form.newsletter.validationMessage;
   
    //form.newsletter.nextElementSibling.textContent = form.newsletter.validationMessage;
    form.newsletter.focus();

}
else
{
 form.newsletter.parentElement.nextElementSibling.textContent = "" ;
 form.newsletter.setCustomValidity("");

} */


//----------last---check validity and send form--------------

if(form.checkValidity())
{
form.submit();
}

}

//-------check email function---
//det er et regular expressions /escape ---top level domain TLP

function checkEmail(email){ 
    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/; 
    if (emailRegEx.test(email)){ 
return true; 
    } 
    return false; 
}



// I am checking through regular expression , if my email is in correct format. 


// emailRegEx = escape will ignore -hat-caret means start 
// dollar sign means end , plus is also like adding  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/; 



function resetErrors()
{
    let errorMessages = document.querySelectorAll(".error");
    let areas=document.querySelectorAll('textarea');
    console.log(errorMessages);
    console.log(areas);
    areas.forEach(function(area){
    // area.style.backgroundColor="orange";
    
        area.setCustomValidity("");
})


    // for(let i = 0;i< errorMessages.length; i++) same thing but with foreach
    // {
    //     errorMessages[i].textContent="";

    // }
    errorMessages.forEach(function(message,index){
   
    // console.log(document.getElementsByTagName('textarea')); 

        message.textContent="";
        //  if(message.previousElementSibling.name == "message"){

       
        // message.previousElementSibling.setCustomValidity("");
        // }
    }) //den her function kører for hvert element i errorMessages nodelisten. function executed once for every element 



}

