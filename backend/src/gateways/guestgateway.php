<?php

namespace src\gateways;


/**
 * Gateway class that that sends SQL requests to the Database
 * 
 * User gateway that deals with SQL requests specific to the database.
 * It's main function is to select SQL for the readinglist end-point.
 * 
 * @author Scott Mains w18003567
 * 
 */


class GuestGateway extends Gateway  {

    public function __construct() {
        $this->setDatabase(DATABASE);
    }

    public function findGuest($user_id) {
        $sql = "SELECT DISTINCT email FROM guest WHERE userid = :userid";
        $params = [":user_id" => $user_id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);
    }

}