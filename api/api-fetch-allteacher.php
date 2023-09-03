<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include "config.php";

$sql = "SELECT * FROM teacher 
Join subject on subject.sub_id = teacher.tea_subject
Join class on class.class_id = teacher.tea_class

ORDER BY tea_id DESC;
";
$result = mysqli_query($conn, $sql) or die("SQL Query Failed.");

if(mysqli_num_rows($result) > 0 ){
	
	$output = mysqli_fetch_all($result, MYSQLI_ASSOC);
	echo json_encode($output);

}else{

 echo json_encode(array('message' => 'No Record Found.', 'status' => false));

}


?>
