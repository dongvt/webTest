function focusFirstName(){
    document.mainForm.first_name.focus();
    document.getElementById("validationMessage").innerHTML = "";
}

function submitFormValidation(){
    if (document.mainForm.first_name.value == "") {
         document.mainForm.first_name.focus();
        return false;
    }
        
    if (document.mainForm.last_name.value == "") {
        document.mainForm.last_name.focus();
        return false;
    }
         
    if (document.mainForm.address.value == "") {
        document.mainForm.address.focus();
        return false;
    }
         
    if (document.mainForm.phone.value == "") {
        document.mainForm.phone.focus();
        return false;
    }
         
    if (document.mainForm.credit_card.value == ""){
        document.mainForm.credit_card.focus();
        return false;
    }
}

function phoneChange(){
    var phone = document.mainForm.phone.value;
    
    if(phone.match(/[^0-9-]/) || phone.length != 12){ //12 twelve because of the - character
        document.getElementById("validationMessage").innerHTML = 
            "phone must be in format 000-000-0000";
        
        document.mainForm.phone.focus();
    }
    else 
        document.getElementById("validationMessage").innerHTML = "";
        
}

function creditCardValidation(){
    var cardNumberString = document.mainForm.credit_card.value;
    
    //add spaces each four digits
    if(cardNumberString.length == 4 ||
       cardNumberString.length == 9 ||
       cardNumberString.length == 14) {
        document.mainForm.credit_card.value = cardNumberString + " ";
    }
    
    var carNumber = cardNumberString.split(' ').join('');

    if(carNumber.match(/[^0-9]/) ) {
        document.getElementById("validationMessage").innerHTML = 
            "Incorrect value in card number"; //show message
        //empty again for secuirity reasons
        document.mainForm.credit_card.value = "";
        document.mainForm.credit_card.focus(); //set focus
        return false; // don't do anything
    }
    // if more than 16 digits don't do anything (except for bakspace)
    if (carNumber.length >= 16) {
        if (event.key != "Backspace") {
            return false;
        }
    }
       
}

function expDateValidation(){
    var date = new Date(document.mainForm.exp_date.value);
    if (date.getFullYear() <= 2018)
        document.getElementById("validationMessage").innerHTML = 
            "The year must be major than " + date.getFullYear();
}

function addSubtrackTotal(){
    var check1 = document.getElementById('item_0');
    var check2 = document.getElementById('item_1');
    var check3 = document.getElementById('item_2');
    var check4 = document.getElementById('item_3');
    
    
    var total = 0;
    
    if(check1.checked)
        total += 2;
    if(check2.checked)
        total += 2;
    if(check3.checked)
        total += 8;
    if(check4.checked)
        total += 5;
    
    if(total < 0) 
        total = 0;
    
    document.mainForm.total.value = total;
}

window.onload = function () {

    var form = document.getElementById('mainForm');
    if (form) {
        form.onreset = focusFirstName;
        form.submit = submitFormValidation;
    }
    
    var phone = document.getElementById('phone');
    if (phone) {
        phone.onblur = phoneChange;
    }
    
    var cardNumber = document.getElementById('credit_card');
    if (cardNumber) {
        cardNumber.onkeydown = creditCardValidation;
        cardNumber.onchange = creditCardValidation;
    }
    
    var expDate = document.getElementById('exp_date');
    if (expDate) {
        expDate.onchange = expDateValidation;
        expDate.onblur = expDateValidation;
    }
    
    //chekbox
    var check1 = document.getElementById('item_0');
    var check2 = document.getElementById('item_1');
    var check3 = document.getElementById('item_2');
    var check4 = document.getElementById('item_3');
    
    if (check1) {
        check1.onclick = addSubtrackTotal;
    }
    if (check2) {
        check2.onclick = addSubtrackTotal;
    }
    if (check3) {
        check3.onclick = addSubtrackTotal;
    }
    if (check4) {
        check4.onclick = addSubtrackTotal;
    }
    
};