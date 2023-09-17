<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include "config.php";

$id = $_GET['id'];

$sql = "SELECT * FROM student_add WHERE stu_id = {$id}";

$result = mysqli_query($conn, $sql) or die("SQL Query Failed.");

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_assoc($result);
    echo json_encode($output);
} else {
    echo json_encode(array('message' => 'No Record Found.', 'status' => false));
}
?>
