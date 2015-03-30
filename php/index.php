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

//create json
$data = [];

//customer info
$query = mysqli_query($conn, "SELECT id, customer_name, project_id, customer_address, sector, project_manager, roofing_team, date_of_audit FROM saved_reports");
while($r = mysqli_fetch_assoc($query)) {
    $data[] = $r;
};

print json_encode($data, JSON_NUMERIC_CHECK);

?>
