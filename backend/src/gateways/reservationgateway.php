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

class ReservationGateway extends Gateway {


    public function __construct() {
        $this->setDatabase();
    }

   
    public function addGuestReservation($partysize, $bookingdate, $bookingstart)
    {
            $sql ="INSERT into bookings (userid, guestid, partysize, bookingdate, bookingstart, dateBooked) VALUES 
            (NULL, LAST_INSERT_ID(), :partysize, :bookingdate, :bookingstart, CURRENT_TIMESTAMP)"; 
            $params = [":partysize" => $partysize, ":bookingdate" => $bookingdate, ":bookingstart" => $bookingstart];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
            return $result;
    }

    public function checkReservationExists($userid) {
        $sql = "SELECT userid FROM bookings WHERE userid = $userid and active = 1";
        $result = $this->getDatabase()->executeSQL($sql);   
        if ($result) {
            header("HTTP/1.1 Entry exists");
            http_response_code(409);
        }
        $this->setResult($result);
      
    }

    public function checkRestaurantInfo() {
        $sql = "SELECT max_occupancy, hours_open, hours_closed, timeInterval FROM restaurant";
        $result = $this->getDatabase()->executeSQL($sql);
        $this->setResult($result);
    }

    public function checkBookingDate($bookingdate) {

        $sql = "SELECT bookingDate, bookingStart, partysize FROM bookings WHERE bookingDate =:bookingDate";
        $params = [":bookingDate" => $bookingdate];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);

    }
     
    public function addUserReservation($userid, $partysize, $bookingdate, $bookingstart)
    {       
            $sql = "INSERT into bookings (userid, partysize, bookingDate, bookingStart, dateBooked) VALUES (:userid, :partysize, :bookingdate, :bookingstart, CURRENT_TIMESTAMP)"; 
            $params = [":userid" => $userid, ":partysize" => $partysize, ":bookingdate" => $bookingdate, ":bookingstart" => $bookingstart];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
    }

    public function addLoyalty($userid)
    {
            $sql ="UPDATE users 
                    SET loyaltyPoints = loyaltyPoints + 1
                    WHERE userid = :userid";
            $params = [":userid" => $userid];
            $result = $this->getDatabase()->executeSQL($sql, $params);
            $this->setResult($result);
            return $result;
    }


    public function addGuest($name, $email, $phonenumber) {
        $sql = "INSERT into guest(name, email, phonenumber) VALUES (:name, :email, :phonenumber)";      
        $params = [":name" => $name, ":email" => $email, ":phonenumber" => $phonenumber];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    }
}

   
    