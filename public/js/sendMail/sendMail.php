<?php

    $postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$mail = $request->mail;
	$phone = $request->phone;
	$enterprise = $request->enterprise;
	$name = $request->name;

	$to = "informes@zentro.pe";
	$contact = "<p><strong>Nombres:</strong> $name</p>
				<p><strong>Email:</strong> $mail</p>";
	$content = "<p><strong>Telefono:</strong> $phone</p>
				<p><strong>Empresa:</strong> $enterprise</p>";
 
	$email_subject = "Contacto desde la web .:: Zentro ::.";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
	$headers .= "From: Site <informes@zentro.pe> \r\n";
	$headers .= "To: informes@zentro.pe\r\n";
	$headers .= "MIME-Version: 1.0 \r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1 \r\n";
	$headers .= "X-Mailer: PHP/" . phpversion();
	$headers.= "X-Priority: 1\r\n";
	$headers .= "Cc: edwarllanca@hotmail.com,llanca872@gmail.com,informes@zentro.pe \r\n";
	$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '143',
        'auth' => true,
        'username' => 'informes@zentro.pe', //your gmail account
        'password' => 'Zentro#mail1' // your password
    ));
	$smtp=>mail($to,$email_subject,$email_body,$headers);
	$response_array['status'] = 'success';
	echo json_encode($response_array);
	echo json_encode($email);
	header($response_array);
	return $mail;

?>
