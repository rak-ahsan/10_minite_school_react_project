<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$id = $_GET['id'];
$studentname = $data['studentname'];
$studentnumber = $data['studentnumber'];
$studentemail = $data['studentemail'];
$studentaddress = $data['studentaddress'];
$studentusername = $data['studentusername'];
$studentpassword = $data['studentpassword'];
$studentclass = $data['studentclass'];
$studentrole = $data['studentrole'];

include "config.php";

$sql = "UPDATE  student_add SET
	studentname = '{$studentname}',
	studentnumber = '{$studentnumber}',
	studentemail = '{$studentemail}',
	studentaddress = '{$studentaddress}',
	studentusername = '{$studentusername}',
	studentclass = '{$studentclass}',
	studentrole = '{$studentrole}'

	WHERE stu_id = {$id} ";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));

}
