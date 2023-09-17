<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$Address = $data['Address'];
$city = $data['city'];
$country = $data['country'];
$paymentMethod = $data['paymentMethod'];
$number = $data['number'];

include "config.php";

$sql = "INSERT INTO booking(name, Address,city,country,paymentMethod,number) 
VALUES 
('$name','$Address','$city','$country','$paymentMethod','$number')";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));

}
?>
