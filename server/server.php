<?php
$con = mysqli_connect("localhost","root","","ajax");

if($_POST['type'] == "insert_data"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $pass = $_POST['password'];
    $pincode = $_POST['pincode'];

    $insert_query = mysqli_query($con,"insert into form(name,email,mobile,password,pincode) values('$name','$email','$mobile','$pass','$pincode')");

    if($insert_query){
        echo "Data inserted";
    }

}





if($_POST['type'] == "update_data"){
    // Name
    $name = $_POST['name'];
    // Email
    $email = $_POST['email'];
    // Mobile
    $mobile = $_POST['mobile'];
    // Password
    $pass = $_POST['password'];
    $pass = $_POST['pincode'];

    $user_id= $_POST['id'];

    $insert_query = mysqli_query($con,"update form set name='$name',email='$email', mobile='$mobile',password='$pass',pincode='$pincode where id=$user_id");

    if($insert_query){
        echo "Data updated";
    }

}


if($_POST['type'] == "get_ser_data"){
    $get_query = mysqli_query($con,"select * from form");
    // to check num of rows from db
    $num_rows = mysqli_num_rows($get_query);
    $data_array = array();
    if($num_rows>0){
        while($row = mysqli_fetch_assoc($get_query)){
            $data_array['mydata'][] = $row;
        }
        echo json_encode($data_array);
    }else{
        echo "No Data";
    }
}

if($_POST['type'] == "delete_rec"){
    $del_id = $_POST['delete_id'];
    $del_query = mysqli_query($con,"delete from form where id=$del_id");
    if($del_query){
        echo "data deleted";
    }

}

if($_POST['type'] == "get_up_det"){
    $update_id = $_POST['up_id'];
    $get_query = mysqli_query($con,"select * from form where id=$update_id");
    $data_array = array();
    while($row = mysqli_fetch_assoc($get_query)){
        $data_array['mydata'][] = $row;
    }
    echo json_encode($data_array);
}




?>