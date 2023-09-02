<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$id = $_GET['emp_id'];
$name = $data['empname'];
$age = $data['empnum'];
$city = $data['emparea'];
$cata = $data['empcata'];

include "config.php";

$sql = "UPDATE emp SET empname = '{$name}', empnum = {$age}, emparea = '{$city}',empcata='{$cata}' WHERE emp_id = {$id}";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Updated.', 'status' => true));
}else{
  echo json_encode(array('message' => 'Student Record Not Updated.', 'status' => false));
}


?>
