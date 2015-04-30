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

$query = mysqli_query($conn, "select subject_score
from installation_subjects inner join subjects on installation_subjects.subject_id = subjects.subject_id where project_id = '$id' and subjects.subject_category_id = 1;");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data[] = $r;
};



print json_encode($data, JSON_NUMERIC_CHECK);


?>
