<?php

namespace src\responses;


/**
 * Abstract class that is is implemented by other response classes.
 * 
 * This class provides predefined methods for functionality that wont
 * change when instantiated by the other response classes.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */


abstract class Response
{
protected $data;

public function __construct() {
    $this->headers();
}

public function setData($data) {
    $this->data = $data;
}

public function getData() {
    return $this->data;
}

protected function headers() {
    
}

}