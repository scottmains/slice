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
            $sql = " Select userid, password from users where email = :email";
            $params = [":email" => $email];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
            return $result;
    }

    public function fetchUser($userid)
    {
            $sql = " Select userid, email, password from users where userid= :userid";
            $params = [":userid" => $userid];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
            return $result;
    }


    public function checkEmail($email) {
        $sql = "SELECT COUNT(email) as num FROM users WHERE email =:email";
        $params = ["email" => $email];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    
}

    public function addUser($email, $password) {
        $passwordHash = password_hash($password, PASSWORD_BCRYPT, array("cost" => 12));
        $sql = "INSERT into users (email, password) VALUES (:email, :password)
                INSERT into guest (userid, fullname, phonenumber) VALUES (LAST_INSERT_ID(), :fullname, :phonenumber";
        $params = [":email" => $email, ":password" => $passwordHash,":fullname" => $fullname, ":phonenumber" => $phonenumber];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

        public function addGuest($fullname, $phonenumber) {
        $sql = "INSERT into guest (fullname, phonenumber) VALUES (:fullname, :phonenumber)
                INNER JOIN users on (user.userid = guest.userid)
                WHERE userid= :userid";
        $params = ["fullname" => $fullname, ":phonenumber" => $phonenumber, "userid" => $userid];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}
}



   
    