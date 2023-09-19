<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$fee = $data['fee'];
$class = $data['class'];
$subject = $data['subject'];
$role = $data['role'];
$number = $data['number'];
$username = $data['username'];
$password = $data['password'];

include "config.php";

$sql = "INSERT INTO teacher(tea_name, tea_fee,tea_class,tea_subject,tea_role,tea_number,tea_username,tea_password) 
VALUES 
('$name','$fee' ,'$class',$subject,'$role','$number','$username','$password')";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));

}
?>
