function loadDoc(country) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var countryList = this.responseText;
            countryList = countryList.replace(/\n/g,"<br>");
            document.getElementById("countryInfo").innerHTML = countryList;
        }
    };
    if (country == "Mexico")
        xhttp.open("GET", "mexico.txt", true);
    if (country == "Canada")
        xhttp.open("GET", "canada.txt", true);
    if (country == "Russia")
        xhttp.open("GET", "russia.txt", true);
    if (country == "USA")
        xhttp.open("GET", "usa.txt", true);

    xhttp.send();
}

function loadJSON()
{
    var xhttp = new XMLHttpRequest();
    var fileName = document.getElementById("fileName").value;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var  value = "";
            json = JSON.parse(json);
            var students = json.students;
            value = "<table>";
            value += "<tr>";
            value += "<th>First Name</th>";
            value += "<th>Last Name</th>";
            value += "<th>Address</th>";
            value += "<th>Major</th>";
            value += "<th>GPA</th>";
            value += "</tr>";
            for(var i = 0; i < students.length; i++) {
                value += "<tr>";
                value += "<td>" + students[i].first + "</td>";
                value += "<td>" + students[i].last + "</td>";
                //address
                value += "<td>";
                value += students[i].address.city + ", ";
                value += students[i].address.state;
                value += " " + students[i].address.zip;
                value += "</td>";
                //end address
                value += "<td>" + students[i].major + "</td>";
                value += "<td>" + students[i].gpa + "</td>";
                value += "</tr>";
            }
            value += "</table>";
            document.getElementById("JSONInfo").innerHTML = value;
        }
        if (this.status == 404) {
            document.getElementById("JSONInfo").innerHTML = "File not found";
        }
    };
    xhttp.open("GET", fileName, true);
    xhttp.send();

}