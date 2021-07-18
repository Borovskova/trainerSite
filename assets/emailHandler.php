<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST[user_name];
$target = $_POST[user_target];
$email = $_POST[user_email];

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'belka7066@gmail.com';
$mail->Password = '123Qwertyuiop$';
$mail->SMTPSecure ='ssl';
$mail->Port = 465;

$mail->setForm('belka7066@gmail.com');
$mail->addAddress('sixa.belka@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Заявка из сайта тренера';
$mail->Body = '' .$name . 'оставил заявку, его е-меил' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
  echo 'Error';
}else{
  header('location: thank-you.html');
}

 ?>
