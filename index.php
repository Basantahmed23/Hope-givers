<?php

$firstname = $_REQUEST['firstname']; 
$secondname = $_REQUEST['secondname']; 
$address = $_REQUEST['address'];    
$amount = $_REQUEST['amount'];    

if(isset($_POST['btntest'])){ 

    $host = "localhost"; 
    $user = "root"; 
    $password =""; 
    $db = "hopegivers";

    @$conn= mysqli_connect($host,$user,$password,$db);
    $insert= "insert into donate values('$firstname','$secondname','$address' , '$amount')";
    mysqli_query($conn,$insert);
    if($conn){
       
        echo("<h1 style=color:blue;> Your Donation is Done!</h1>");
        

    }
    else{
        echo("<h1 style=color:red;> Your Donation is Failed❌</h1>");
    }

}

?>