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

$data['jobDetails'] = [];

//customer info
$query = mysqli_query($conn, "SELECT id,
customer_name,
evoenergy_id,
customer_address,
date_of_audit,
pitch,
advisory_description_roof_type,
advisory_description_roof_material,
advisory_note,
(SELECT subject_score FROM installation_subjects WHERE project_id = '$id' AND subject_id = 1) AS description,
(SELECT group_concat(subject_score)
FROM installation_subjects INNER JOIN subjects ON installation_subjects.subject_id = subjects.subject_id WHERE project_id = '$id' AND subjects.subject_category_id = 2) as score
FROM reports
WHERE id = '$id';");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data['jobDetails'][] = $r;
};

$data['description'] = [];
$query = mysqli_query($conn, "select subject_name, subject_score, subject_note
from installation_subjects inner join subjects on installation_subjects.subject_id = subjects.subject_id where project_id = '$id' and subjects.subject_category_id = 1;");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data['description'][] = $r;
};

$data['workmanship'] = [];
$query = mysqli_query($conn, "select subject_name, subject_score, subject_note
from installation_subjects inner join subjects on installation_subjects.subject_id = subjects.subject_id where project_id = '$id' and subjects.subject_category_id = 2;");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data['workmanship'][] = $r;
};

$data['pv'] = [];
$query = mysqli_query($conn, "select subject_name, subject_score, subject_note
from installation_subjects inner join subjects on installation_subjects.subject_id = subjects.subject_id where project_id = '$id' and subjects.subject_category_id = 3;");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data['pv'][] = $r;
};

$data['sales'] = [];
$query = mysqli_query($conn, "select subject_name, subject_score, subject_note
from installation_subjects inner join subjects on installation_subjects.subject_id = subjects.subject_id where project_id = '$id' and subjects.subject_category_id = 4;");
WHILE($r = mysqli_fetch_assoc($query)) {
	$data['sales'][] = $r;
};

print json_encode($data, JSON_NUMERIC_CHECK);


?>
