<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$id = $_GET['id'];
$name = $data['name'];
$fee = $data['fee'];
$class = $data['class'];
$subject = $data['subject'];
$role = $data['role'];
$number = $data['number'];
$username = $data['username'];
$password = $data['password'];


include "config.php";

$sql = "UPDATE teacher SET tea_name = '{$name}', tea_fee = {$fee}, tea_class = '{$class}',tea_subject='{$subject}',tea_role='{$role}',tea_number='{$number}',tea_username='{$username}',tea_password = '{$password}' WHERE tea_id = {$id}";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Updated.', 'status' => true));
}else{
  echo json_encode(array('message' => 'Student Record Not Updated.', 'status' => false));
}
