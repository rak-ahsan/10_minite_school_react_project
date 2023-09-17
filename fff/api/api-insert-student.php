<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$studentname = $data['studentname'];
$studentnumber = $data['studentnumber'];
$studentemail = $data['studentemail'];
$studentaddress = $data['studentaddress'];
$studentusername = $data['studentusername'];
$studentpassword = $data['studentpassword'];
$studentclass = $data['studentclass'];
$studentrole = $data['studentrole'];

include "config.php";

$sql = "INSERT INTO student_add(studentname, studentnumber,studentemail,studentaddress,studentusername,studentpassword,studentclass,studentrole) 
VALUES 
('$studentname','$studentnumber' ,'$studentemail','$studentaddress','$studentusername','$studentpassword',$studentclass,$studentrole)";

if(mysqli_query($conn, $sql)){
	echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));

}
?>
