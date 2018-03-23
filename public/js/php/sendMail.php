<?php

   $postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$email = $request->mail;
	$telefono = $request->phone;
	$empresa = $request->enterprise;
	$mensaje = $request->message;
	$name = $request->name;
 
	$to_email = "informes@zentro.pe";
 
	$contact = "<p><strong>Nombres:</strong> $name</p>
				<p><strong>Email:</strong> $email</p>";
	$content = "<p><strong>Telefono:</strong> $telefono</p>
				<p><strong>Empresa:</strong> $empresa</p>
				<p><strong>Mensaje:</strong> $mensaje</p>";
 
	$email_subject = "Contacto desde la web .:: Zentro ::.";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0". "\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1". "\r\n";
	$headers .= "From: $email". "\r\n";
	$headers .= "Cc: hzapatagamarra@gmail.com". "\r\n";
	$headers .= "Cc: marixa_zegarra@yahoo.com". "\r\n";
	$headers .= "Reply-To: $email". "\r\n";
	$headers .= "X-Mailer: PHP/" . phpversion();
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $email;
	echo json_encode($response_array);
	echo json_encode($email);
	header($response_array);
	return $email;

?>