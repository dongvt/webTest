window.onload = function () {

    var Compute = document.getElementById('Compute');
            
    if (Compute) {
        Compute.onclick = loadJSON;
    }
        
};

function stateValidation(state){
    
    //no more than two characters
    if(state.length > 1) {
        event.returnValue = false;
    }
       
}

function loadJSON()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var  value = "";
            json = JSON.parse(json);
            var trip = json.trip;
            value = "<table>";
            value += "<tr>";
            value += "<th>Star City</th>";
            value += "<th>End City</th>";
            value += "<th>Miles</th>";
            value += "<th>Mode</th>";
            value += "</tr>";

                value += "<tr>";
                value += "<td>" + trip.startcity + "," + trip.startstate + "</td>";
                value += "<td>" + trip.endcity + "," + trip.endstate + "</td>";
                value += "<td>" + trip.miles + "</td>";
                value += "<td>";
                if (typeof trip.tmode != 'undefined') {
                    for(var x = 0; x < trip.tmode.length; x++) {
                        value += trip.tmode[x] + "<br>";
                    }
                }
                value += "<td>";
                value += "</tr>";
            
            value += "</table>";
            document.getElementById("JSONInfo").innerHTML = value;
        }
    };
    xhttp.open("GET", "/cgi-bin/ercanbracks/mileage/mileageAjaxJSON?"
                      + "startCity=" + document.getElementById("startCity").value
                      + "&startState=" + document.getElementById("startState").value
                      + "&endCity=" + document.getElementById("endCity").value
                      + "&endState=" + document.getElementById("endState").value, true);
    xhttp.send();

}