<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "javierernesto2000@gmail.com";
$subject = "Novo e-mail de contato";
$body = "Nome: $name\nE-mail: $email\nMensagem: $message";

mail($to, $subject, $body);
