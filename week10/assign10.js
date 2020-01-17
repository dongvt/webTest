window.onload = function () {
    loadJSON();
};


/*Load the JSon Function*/
function loadJSON()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var  value = "";
            json = JSON.parse(json);
            value = "<table>";
            value += "<tr>";
            value += "<th>File Name</th>";
            value += "<th>Type</th>";
            value += "<th>CWD</th>";
            value += "<th>Action</th>";
            value += "</tr>";
            for(i = 0; i < json.length; i++) {
                value += "<tr>";
                value += "<td>" + json[i].fileName + "</td>";
                value += "<td>" + json[i].fileType + "</td>";
                value += "<td>" + json[i].cwd + "</td>";
                value += "<td><button  onclick = \"window.open(\'" + json[i].fileName + "\')\" class=\"buttons\">Click to display</button></td>";
                value += "</tr>";
            }
            value += "</table>";
            document.getElementById("JSONInfo").innerHTML = value;
        }
    };
    xhttp.open("GET", "assign10Template.php", true);
    xhttp.send();

}