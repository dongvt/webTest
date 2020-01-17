<?php

//Capture form data
$performance = $_POST['performance'];
$fname       = $_POST['first_name'];
$lname       = $_POST['last_name'];
$studentID   = $_POST['student_id'];
$fname2      = $_POST['first_name_2'];
$lname2      = $_POST['last_name_2'];
$studentID2  = $_POST['student_id_2'];
$skill       = $_POST['skill'];
$instrument  = $_POST['instrument'];
$location    = $_POST['location'];
$room        = $_POST['room'];
$time_slot   = $_POST['time_slot'];


$myFile = fopen("data/completeData.txt", "a") or die("Unable to open file!");

//Write in the registration file
fwrite($myFile,"############ Registraton #############\n");
fwrite($myFile,"Performance: " . $performance . "\n");
fwrite($myFile,"First Name: " . $fname . "\n");
fwrite($myFile,"Last Name: "  . $lname . "\n");
fwrite($myFile,"Student ID: " . $studentID . "\n");
//Write Second Student Information When We Have a Duet
if ($performance == "duet") {
    fwrite($myFile,"First Name 2: " . $fname2 . "\n");
    fwrite($myFile,"Last Name 2: " . $lname2 . "\n");
    fwrite($myFile,"Student ID 2: " . $studentID2 . "\n");
}
fwrite($myFile,"Skill: " . $skill . "\n");
fwrite($myFile,"Instrument: " . $instrument . "\n");
fwrite($myFile,"Location: " . $location . "\n");
fwrite($myFile,"Room: " . $room . "\n");
fwrite($myFile,"Time Slot: " . $time_slot . "\n");
fwrite($myFile,"############ End Registration ########\n");
//Close File
fclose($myfile);

//Write the name of the student
$mySecondFile = fopen("data/registeredStudents.txt", "a") or die("Unable to open registeredStudents file!");

fwrite($mySecondFile,"Student: " . $fname . " " . $lname);
if ($performance == "duet")
    fwrite($mySecondFile," | Second Student: " . $fname2 . " " . $lname2);
fwrite($mySecondFile,"\n");
fclose($mySecondFile);

//Assign the file content to a new variable
$mySecondFile = fopen("data/registeredStudents.txt", "r") or die("Unable to open registeredStudents file to read!");
$registeredStudents = "";
while(!feof($mySecondFile)) {
  $registeredStudents .= fgets($mySecondFile);
}
fclose($mySecondFile);

include('assign13.html');

?>
    