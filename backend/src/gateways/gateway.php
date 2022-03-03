<?php

namespace src\gateways;
use src\database as Database;


/**
 * Abstract class that is is implemented by other gateway classes.
 * 
 * This class provides predefined methods for functionality that wont
 * change when instantiated by the other gateway classes.
 * 
 * @author Scott Mains w18003567
 * 
 */


abstract class Gateway {

    private $database;
    private $result;

    protected function setDatabase() {
        $this->database = new Database\Database;
    }

    protected function getDatabase() {
        return $this->database;
    }

    protected function setResult($result) {
        $this->result = $result;
    }

    public function getResult() {
        return $this->result;
    }
}