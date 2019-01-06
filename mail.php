<?php
require_once('PHPMailer/PHPMailerAutoload.php');

try {

//    var_dump($_REQUEST);
//    die();

    $files = array();

    $mail = new PHPMailer();
    $mail->CharSet = 'utf-8';
    $method = $_SERVER['REQUEST_METHOD'];
    $form_subject = "form";

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'shiptya.stanislav@gmail.com';               // SMTP username
    $mail->Password = '';                         // SMTP password

    $mail->setFrom('shiptya.stanislav@gmail.com'); // от кого будет уходить письмо?
    $mail->addAddress('shiptya.stanislav@gmail.com');     // Кому будет уходить письмо


    $c = true;
    if ($method === 'POST') {

        $project_name = trim($_POST["project_name"]);
        $admin_email = trim($_POST["admin_email"]);
        $form_subject = trim($_POST["form_subject"]);

        foreach ($_POST as $key => $value) {
            if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
                $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
            }
        }
    }

    $message = "<table style='width: 100%;'>$message</table>";

    for($i=0; $i<count($_FILES['man-file']['name']); $i++){
        $filename = $_FILES['man-file']['name'][$i];
        move_uploaded_file($_FILES['man-file']['tmp_name'][$i],'upload/'.$filename);
        $path = "upload/" . $filename;
        $mail->addAttachment($path, $filename);
        array_push($files, $path);
    }

    for($i=0; $i<count($_FILES['calcs-file']['name']); $i++){
        $filename = $_FILES['calcs-file']['name'][$i];
        move_uploaded_file($_FILES['calcs-file']['tmp_name'][$i],'upload/'.$filename);
        $path = "upload/" . $filename;
        $mail->addAttachment($path, $filename);
        array_push($files, $path);
    }

    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $form_subject;
    $mail->Body = $message;
    $mail->AltBody = '';

    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
    }

    foreach ($files as $file) {
        unlink($file);
    }

    return "ok";

} catch (Exception $e) {
    return $e->getMessage();
}