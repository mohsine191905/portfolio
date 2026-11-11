
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

// Only accept POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /portfolio-mohssine/index.html#contact");
    exit;
}

// Get form data
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$subject = trim($_POST["subject"] ?? "");
$message = trim($_POST["message"] ?? "");

// Validate data
if (
    $name === "" ||
    $email === "" ||
    $subject === "" ||
    $message === "" ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    header("Location: /portfolio-mohssine/index.html?status=invalid#contact");
    exit;
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username =  'elboussaknemohsine@gmail.com';
    $mail->Password =  'epmh zpro qsbc yhtd';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('elboussaknemohsine@gmail.com', 'Portfolio Contact Form');
    $mail->addAddress('elboussaknemohsine@gmail.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "Portfolio Contact: " . $subject;

    $mail->Body = "
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <p><strong>Message:</strong><br>" .
        nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->AltBody =
        "Name: $name\n" .
        "Email: $email\n" .
        "Subject: $subject\n" .
        "Message: $message";

    $mail->send();

    header("Location: /portfolio-mohssine/index.html?status=success#contact");
exit;

} catch (Exception $e) {

    error_log("Mailer Error: " . $mail->ErrorInfo);

    header("Location: /portfolio-mohssine/index.html?status=error#contact");
    exit;
}
