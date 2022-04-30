<?php

namespace src\database;
use \PDO, \PDOException;

/**
 * Database connection class.
 * 
 * Primary function is to connect to the database and 
 * execute the SQL requests given from the gateways.
 * 
 * @author Scott Mains w18003567
 * 
 */

class Database 
{
    private $dbConnection;
   
    public function __construct() {
        $this->setDbConnection();
    }

    private function setDbConnection() {   
            $this->dbConnection = new PDO("mysql:host=localhost;dbname=sliceboro",
            "root", "");
            $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     }
 
    public function executeSQL($sql, $params=[]) { 
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function querySQL($sql, $params=[]) { 
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);
        return $stmt->query(PDO::FETCH_ASSOC);
    }

}