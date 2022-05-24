<?php

namespace src\gateways;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use PHPUnit\Framework\TestCase;

require 'vendor/autoload.php';


/**
 * Gateway class that that sends SQL requests to the Database
 * 
 * User gateway that deals with SQL requests specific to the database.
 * It's main function is to select the ID, username and password to be 
 * used in the authenticate controller.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class UserGatewayTest extends TestCase {

    
    public function testFailure(): void
    {
        $this->assertJsonStringEqualsJsonString(
            '{"message": "ok"}', 
            json_encode(["message" => "ok"]), 
            'Check message ok json'
        );
    }
}