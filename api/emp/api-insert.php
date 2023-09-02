<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$empname = $_POST['empname'];
$empnum = $_POST['empnum'];
$emparea = $_POST['emparea'];
$empcata = $_POST['empcata'];
$username = $_POST['username'];
$password = $_POST['password'];
$image = $_FILES['photo'];
$imageName = '';

if ($image['name'] != '') {
    $imageName = 'emp_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($image['name'], PATHINFO_EXTENSION);
}
include "../config.php";


$response = array();

if (!empty($empname) && !empty($empnum) && !empty($emparea) && !empty($empcata)&&!empty($imageName)) {
    $sql = "INSERT INTO emp(empname, empnum, emparea, empcata,emp_photo) VALUES ('$empname', $empnum ,'$emparea','$empcata','$imageName')";

    if (mysqli_query($conn, $sql)) {

       
        if ($image['name'] != '') {
            move_uploaded_file($image['tmp_name'], 'emp_photo/' . $imageName);
        }
        $response['message_employee'] = 'Employee Record Inserted.';
        $response['status_employee'] = true;
    } else {
        $response['message_employee'] = 'Employee Record Not Inserted.';
        $response['status_employee'] = false;
    }
}

if (!empty($username) && !empty($password)&& !empty($emparea)&& !empty($empcata)&&!empty($empname)&&!empty($imageName)&& !empty($empnum)) {
    $sqls = "INSERT INTO login_signup(username, password,loc,empcata,empname,emp_photo,empnum) VALUES ('$username','$password','$emparea','$empcata','$empname','$imageName','$empnum')";
    if (mysqli_query($conn, $sqls)) {
        $response['message_admin'] = 'Admin Record Inserted.';
        $response['status_admin'] = true;
    } else {
        $response['message_admin'] = 'Admin Record Not Inserted.';
        $response['status_admin'] = false;
    }
}

echo json_encode($response);
?>
