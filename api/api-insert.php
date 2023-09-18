<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include "config.php";// include database connection file

$data = json_decode(file_get_contents("php://input"), true); // collect input parameters and convert into readable format

$service_name = $_POST['service_name'];
$serfee = $_POST['serfee'];
$location_name = $_POST['location_name'];
$image = $_FILES['photo'];
$imageName = '';

if ($image['name'] != '') {
    $imageName = 'user_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($image['name'], PATHINFO_EXTENSION);
}
0
........
$sql = "INSERT INTO service(service_name ,location ,serfee,photo) VALUES ('$service_name' ,'$location_name','$serfee','$imageName')";

if (mysqli_query($conn, $sql)) {
    if ($image['name'] != '') {
        move_uploaded_file($image['tmp_name'], 'up/' . $imageName);
    }
    echo json_encode(array('message' => 'Service Record Inserted.', 'status' => true));
} else {
    echo json_encode(array('message' => 'Service Record Not Inserted.', 'status' => false));
}
?>

