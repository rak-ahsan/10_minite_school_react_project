<?php
include "config.php";
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);


$username = $data['username'];
$password = $data['password'];

$access_token = md5(uniqid().rand(1000000, 9999999));


$sql = "SELECT *
FROM teacher
WHERE tea_username = '$username' AND tea_password = '$password' ";



$result = mysqli_query($conn, $sql) or die("SQL Query Failed.");

if(mysqli_num_rows($result) > 0 ){
	
	$output = mysqli_fetch_all($result, MYSQLI_ASSOC);
	// echo json_encode($output);

	echo json_encode(array($output, 'status' => true,'token'=>$access_token));

}else{

 echo json_encode(array('message' => 'No Valid Token Found', 'status' => false,));

}

?>
