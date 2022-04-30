<?php

namespace src\gateways;


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
                header("HTTP/1.1 400");
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

public function checkFields($input){
        
        //check if all required inputs have been entered
        try {
          if(empty($input["password"])||empty($input["email"])||empty($input["passwordconfirm"])
	  ||empty($input["fullname"])||empty($input["phonenumber"]));
        } catch (Exception $e) {
                return "You don't enter all required fields";
        }
          //check if the password inserted has at least 8 chars
          if(!strlen($input['password'])>=8)
		{
			throw new Exception("The password chose MUST be at least of 8 character"); 
		}
          //check passwords matches
        if(!($input['password'] == $input['passwordconfirm'])){ // == case sensitive comparison
            throw new Exception("<p>The passwords don't match.</p>");	
        }
         //check if the email address is valid
		if(!filter_var($input['email'])|| strlen($input['email'])>30)
		{
			throw new Exception ("Invalid Email Address");
		}

                if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
                        throw new Exception ("Invalid Email Address");
                      } 
    }
}



   
    