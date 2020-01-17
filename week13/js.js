window.onload = function () {

    var performance = document.getElementById('performance');
            
    if (performance) {
        performance.onchange = showSecondName;
    }
        
};

function showSecondName() {
    var optionValue = document.getElementById('performance').value;
    if (optionValue == "duet")
        document.getElementById('second').style.display = "contents";
    else
        document.getElementById('second').style.display = "none";
}

function validateData() {
    var message = "";
    
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var sID = document.getElementById("student_id").value;
    
    var fname2 = document.getElementById("first_name_2").value;
    var lname2 = document.getElementById("last_name_2").value;
    var sID2 = document.getElementById("student_id_2").value;
    
    var room = document.getElementById("room").value;
    var time_slot = document.getElementById("time_slot").value;
    
    var optionValue = document.getElementById('performance').value;
    
    if (fname == "" || lname == "" || sID == "" || room == "" || time_slot == "") {
        document.getElementById("errorMessage").innerHTML = "Please fill all the fields";
        return false;
    }
    
    if (optionValue == "duet") {
        if (fname2 == "" || lname2 == "" || sID2 == "") {
            document.getElementById("errorMessage").innerHTML = "Please fill all the fields";
            return false;
        }
    }
    
    return true;
}

function submitForm() {
    return validateData();
}