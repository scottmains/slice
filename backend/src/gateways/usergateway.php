<?php

namespace src\gateways;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

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

class UserGateway extends Gateway {


     /**
     * constructor
     * 
     * This constructor changes the database path to the user database.
     * It does this through the USER_BASE constant that is set in the
     * config file.
     * 
     */

    public function __construct() {
        $this->setDatabase();
    }

    public function findPassword($email)
    {
            $sql = "SELECT userid, password, isAdmin FROM users where email = :email";
            $params = [":email" => $email];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
            return $result;
    }

    public function findUser($userid)
    {
        $this->sql = "SELECT userid, name, phonenumber, email, loyaltyPoints, isAdmin from users where userid = :userid";
        $params = ["userid" => $userid];
        $result = $this->getDatabase()->executeSQL($this->sql, $params);
        $this->setResult($result);
    }

    public function sendForgotPasswordEmail($email)
    {
        $this->sql = "SELECT userid, email from users where email= :email";
        $params = ["email" => $email];
        $result = $this->getDatabase()->querySQL($this->sql, $params);
        $this->setResult($result);
        if ($result) {
        $user_email= $result["email"];
        $user_id= $result["userid"];
        //set expiration format
        $token = openssl_random_pseudo_bytes(16);
        $token = bin2hex($token);

        $this->sql = "INSERT INTO password_reset_request (user_id, date_requested, token) VALUES (:user_id, :date_requested, :token)";
        $params = [":user_id" => $user_id, ":date_requested" => date("Y-m-d H:i:s"), ":token" => $token];
        $result2 = $this->getDatabase()->querySQL($this->sql, $params);

        $passwordRequestId = $this->getDatabase()->lastInsert();

        $verifyScript = 'http://localhost/kv6003/backend/resetpassword';
        $linkToSend = $verifyScript . '?uid=' . $user_id . '&id=' . $passwordRequestId . '&t=' . $token;
        
        $mail = new PHPMailer(true);
        try {
        //$mail->SMTPDebug = 0;                     // enables SMTP debug information (for testing)
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = '##';                     //SMTP username
        $mail->Password   = '##';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;               //replace values with yours
 

        $mail->SetFrom('scottmains4@gmail.com', 'Organization'); //replace values with yours
        $mail->AddAddress($email);
 
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Reset your password for Slice';
        $mail->Body    = 'Reset your password with the following link:'.$linkToSend.'"';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
 
        $mail->send();
    echo 'Message has been sent';
        
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
}
}
		
    public function findUserBooking($userid)
    {
        $this->sql = "SELECT users.userid, bookings.bookingid, bookings.bookingstart, bookings.bookingdate, bookings.dateBooked, bookings.partysize
         from users 
         INNER JOIN bookings ON bookings.userid = users.userid
         where users.userid = :userid";
        $params = ["userid" => $userid];
        $result = $this->getDatabase()->executeSQL($this->sql, $params);
        $this->setResult($result);
    }

 

    public function checkEmailExists($email) {
        $sql = "SELECT email FROM users WHERE email =:email";
        $params = [":email" => $email];
        $result = $this->getDatabase()->executeSQL($sql, $params);    
        if ($result) {
            header("HTTP/1.1 404 Not Found");
        }
}

public function checkEmailDoesntExist($email) {
        $sql = "SELECT email FROM users WHERE email =:email";
        $params = [":email" => $email];
        $result = $this->getDatabase()->executeSQL($sql, $params);    
        
}

    public function addUser($name, $phonenumber, $email, $password) {
        $passwordHash = password_hash($password, PASSWORD_BCRYPT, array("cost" => 12));
        $sql = "INSERT into users (name, phonenumber, email, password) VALUES (:name,  :phonenumber, :email, :password)";      
        $params = [":name" => $name, ":phonenumber" => $phonenumber, ":email" => $email, ":password" => $passwordHash];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

        public function addGuest($email, $fullname, $phonenumber) {
        
        $sql = "INSERT into guest(email, fullname, phonenumber) VALUES (:email, :fullname, :phonenumber)";      
        $params = [":email" => $email, ":fullname" => $fullname, ":phonenumber" => $phonenumber];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

public function checkFields($name, $phonenumber, $email, $password){
        
        //check if all required inputs have been entered
        try {
          if(empty($password)||empty($email)
	  ||empty($name)||empty($phonenumber));
        } catch (Exception $e) {
                return "You don't enter all required fields";
        }
          //check if the password inserted has at least 8 chars
          if(!strlen($password)>=8)
		{
			throw new Exception("The password chose MUST be at least of 8 character"); 
		}
         //check if the email address is valid
		if(!filter_var($email)|| strlen($email)>30)
		{
			throw new Exception ("Invalid Email Address");
		}

                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        throw new Exception ("Invalid Email Address");
                      } 
    }
}



   
    