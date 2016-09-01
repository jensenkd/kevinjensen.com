<?php

 
//Prefedined Variables  
$to = "checkingforms@yahoo.com";

// Email Subject
$subject = "Contact from your website.";


// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if($_POST) {

// Collect POST data from form
$name = stripslashes($_POST['name']);
$email = stripslashes($_POST['email']);
$phone = stripslashes($_POST['phone']);
$message= stripslashes($_POST['message']);

// Collecting all content in HTML Table
$content='<table width="100%">
<tr><td  align "center"><b>Contact Details</b></td></tr>
<tr><td>Name:</td><td> '.$name.'</td></tr>
<tr><td>Email:</td><td> '.$email.' </td></tr>
<tr><td>Subject:</td><td> '.$phone.'</td></tr>
<tr><td>Message:</td> <td> '.$message.'</td></tr>
<tr><td>Date:</td> <td> '.date('d/m/Y').'</td></tr>
</table> ';


// Define email variables
$headers = "From:".$email."\r\n";
$headers .= "Reply-to:".$email."\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8';

if( ! empty($name) && ! empty($email) && ! empty($content) ) {

// Sending Email 
if( mail($to, $subject, $content, $headers) ) {
print "<p>Thank you, we will getback to you shortly</p><br>";
return true;
}
else {
print "<p>Some errors to send the mail.</p>";
return false;
}
}
else {
print "<p>Some errors to send the mail.</p>";
return false;
}
}