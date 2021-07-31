<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$name = $_POST['name'];
//$email = $_POST['email'];
//$massage = $_POST['message_forms_textarea'];

$typeSite = $_POST['list_type'];
$typeDesign = $_POST['list_design'];
$typeAdaptability = $_POST['list_adaptability'];
$modal_email = $_POST['modal_email'];
$modal_phone = $_POST['modal_phone'];
$time = $_POST['time'];
$cost = $_POST['cost'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rab_email_1@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '11Werkraft22'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('rab_email_1@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('aleksey_yudaev@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ';
$mail->Body    = '' . "Email для связи - ". $modal_email. "<br>". "Телефон для связи - ". $modal_phone. "<br>". "Заказ:". "<br>". "Тип сайта - ". $typeSite. "<br>". "Дизайн - ". $typeDesign. "<br>". "Адаптивность - ". $typeAdaptability. "<br>". "Примерное время - ". $time. "д". "<br>". "Примерная стоимость - ". $cost. "р";
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>