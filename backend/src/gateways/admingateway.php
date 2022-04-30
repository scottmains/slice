<?php
namespace src\gateways;


class AdminGateway extends Gateway {


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

public function showAllBookings()
{
        $this->sql = "  SELECT bookings.bookingid, bookings.userid, bookings.bookingStart, bookings.bookingDate, bookings.dateBooked, bookings.partysize,
                        users.userid, users.name, users.phonenumber, users.email
                        FROM bookings
                        JOIN users on (bookings.userid = users.userid) 
                        UNION 
                        SELECT bookings.bookingid, bookings.guestid, bookings.bookingStart, bookings.bookingDate, bookings.dateBooked, bookings.partysize,
                        guest.guestid, guest.name, guest.phonenumber, guest.email
                        FROM bookings
                        JOIN guest on (bookings.guestid = guest.guestid)
                        GROUP BY bookings.bookingid
                        ORDER BY bookingDate, bookingStart";
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
        return $result;
}


public function showAllCustomers()
{
        $this->sql = "SELECT users.userid, users.name, users.phonenumber, users.email, users.loyaltyPoints,
                             users.comment
                FROM users";
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
        return $result;
}

public function removeBooking($bookingid) {
        $sql = "DELETE from bookings WHERE (bookingid = :bookingid)";
        $params = [":bookingid" => $bookingid];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    }

public function removeBookingUser($userid) {
        $sql = "DELETE from bookings WHERE (userid = :userid);
                UPDATE users 
                SET loyaltyPoints = loyaltyPoints - 1
                WHERE userid = :userid";
        $params = [":userid" => $userid];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    }

public function changeName($userid, $name) {
        $sql = "UPDATE users 
        SET name =  :name
        WHERE (userid = :userid)";
        $params = [":userid" => $userid, ":name" => $name];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

public function changeEmail($userid, $email) {
        $sql = "UPDATE users 
        SET email = :email
        WHERE (userid = :userid)";
        $params = [":userid" => $userid, ":email" => $email];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

public function changeNumber($userid, $phonenumber) {
        $sql = "UPDATE users 
        SET phonenumber = :phonenumber
        WHERE (userid = :userid)";
        $params = [":userid" => $userid, ":phonenumber" => $phonenumber];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

public function changeLoyaltyPoints($userid, $loyaltyPoints) {
        $sql = "UPDATE users 
        SET loyaltyPoints = :loyaltyPoints
        WHERE (userid = :userid)";
        $params = [":userid" => $userid, ":loyaltyPoints" => $loyaltyPoints];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}

public function changeComment($userid, $comment) {
        $sql = "UPDATE users 
        SET comment = :comment
        WHERE (userid = :userid)";
        $params = [":userid" => $userid, ":comment" => $comment];
        $result = $this->getDatabase()->executeSQL($sql, $params);
}


}