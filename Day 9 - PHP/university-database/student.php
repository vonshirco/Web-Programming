<?php
//Establish a connection to MYSQL db  - (server name - username - password - databasename)
$connection = mysqli_connect ("localhost", "root", "", "university" );

//Check if the connection has been established
if($connection == false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

//Get form Values
$reg = $_POST['regno'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$sname = $_POST['sname'];
$email = $_POST['email'];
$nationality = $_POST['nationality'];
$dob = $_POST['dob'];

//Attempting to insert data into the database
$sql = "INSERT INTO student (registration_number, fname, mname,
surname, email, nationality, dob) VALUES ('$reg', '$fname', '$mname', '$sname', '$email', '$nationality', '$dob')";

 if(mysqli_query($connection, $sql)){
     echo "Records inserted successfully.";

     header("location:retrieve.php");
 }else{
     echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
 }

?>
