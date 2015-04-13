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
$query = mysqli_query($conn, "SELECT
r.id,
r.evoenergy_id,
r.customer_name,
r.customer_address,
r.date_of_audit,
GROUP_CONCAT(CASE WHEN job_id = '1' THEN `people_name` ELSE NULL END
             ORDER BY `project_id` ) AS project_manager,
GROUP_CONCAT(CASE WHEN job_id = '2' THEN `people_name` ELSE NULL END
             ORDER BY `project_id`) AS roofing_team
FROM reports r
LEFT JOIN installation ON r.id = installation.project_id
LEFT JOIN people ON installation.people_id = people.people_id
GROUP BY `id`;");
while($r = mysqli_fetch_assoc($query)) {
    $data[] = $r;
};

print json_encode($data, JSON_NUMERIC_CHECK);

?>
