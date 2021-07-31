<?<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$typeSite = $_POST['list_type'];
$typeDesign = $_POST['list_design'];
$typeAdaptability = $_POST['list_adaptability'];
$modal_email = $_POST['modal_email'];
$modal_phone = $_POST['modal_phone'];
$time = $_POST['time'];
$cost = $_POST['cost'];
$mail->isSMTP(); $mail->Host = 'smtp.mail.ru'; $mail->SMTPAuth = true; $mail->Username = 'rab_email_1@mail.ru'; $mail->Password = '11Werkraft22'; $mail->SMTPSecure = 'ssl'; $mail->Port = 465; $mail->setFrom('rab_email_1@mail.ru'); $mail->addAddress('aleksey_yudaev@mail.ru'); $mail->isHTML(true); $mail->Subject = 'Заказ';
$mail->Body = '' . "Email для связи - ". $modal_email. "<br>". "Телефон для связи - ". $modal_phone. "<br>". "Заказ:". "<br>". "Тип сайта - ". $typeSite. "<br>". "Дизайн - ". $typeDesign. "<br>". "Адаптивность - ". $typeAdaptability. "<br>". "Примерное время - ". $time. "д". "<br>". "Примерная стоимость - ". $cost. "р";
$mail->AltBody = '';
if(!$mail->send()) {
return false;
} else {return true;
}
?> ?>