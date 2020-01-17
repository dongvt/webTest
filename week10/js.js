function ValidateNumberOnly(floating)
{
    if (floating) {
        if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 46) 
        {
           event.returnValue = false;
        }
    }
    else {
        if ((event.keyCode < 48 || event.keyCode > 57)) 
        {
           event.returnValue = false;
        }
    }
}

function validation(apr,term,amount)
{
    var message = " ";
    var returnedValue = true;

    //Term out of range
    if((term / 12) <= 0 || (term / 12) > 40) {
        message = "The TERM must be between 1 and 40 years";
        document.getElementById("term").focus();
        returnedValue = false;
    }
    //apr aut of range
    if((apr * 12) < 0.00 || (apr * 12) > 0.25) {

        message = "The APR must be between 0 and 25";
        document.getElementById("apr").focus();
        returnedValue = false;
    }

    //If empty
    if(isNaN(amount)) {
        document.getElementById("amount").focus();
        message = "The amount can't be empty";
        returnedValue = false;
    }
    if(isNaN(term)) {
        document.getElementById("term").focus();
        message = "The term can't be empty";
        returnedValue = false;
    }
    if(isNaN(apr)) {
        document.getElementById("apr").focus();
        message = "The APR can't be empty";
        returnedValue = false;
    }

    document.getElementById("validationMessage").innerHTML = message;
    return returnedValue;
}

function formValidation()
{
    var apr     = (parseFloat(document.getElementById("apr").value) / 100) / 12; //c
    var term    = parseInt(document.getElementById("term").value) * 12; //n
    var amount  = parseFloat(document.getElementById("amount").value); //L

    return validation(apr,term,amount);
       
}          

