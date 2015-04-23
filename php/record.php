<?php

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, 'roof_audit');

// Check connection
if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

$id = $_GET['id'];

//create json
$data = [];

//customer info
$query = mysqli_query($conn, "select *
from reports
where id = '$id';");
while($r = mysqli_fetch_assoc($query)) {
    $data[] = $r;
};

print json_encode($data, JSON_NUMERIC_CHECK);


?>
