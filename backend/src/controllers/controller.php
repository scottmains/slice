<?php

namespace src\controllers;

/**
 * Abstract class that is is implemented by other controller classes.
 * 
 * This class provides predefined methods for functionality that wont
 * change when instantiated by the other controller classes.
 * 
 * @author Scott Mains w18003567
 * 
 */

abstract class Controller {

    private $request;
    private $reponse;
    protected $gateway;

    public function __construct($request, $response) {
        $this->setGateway();
        $this->setRequest($request);
        $this->setResponse($response);

        $data = $this->processRequest();
        $this->getResponse()->setData($data);
    }

    /**
    * A setter method for $request
    * 
    * Sets the type of request for the API controllers.
    * 
    */
    
    private function setRequest($request) {
        $this->request = $request;
    }

    protected function getRequest() {
        return $this->request;
    }

    private function setResponse($response) {
        $this->response = $response;
    }

    protected function getResponse() {
        return $this->response;
    }

    protected function setGateway() {

    }

    protected function getGateway() {
        return $this->gateway;
    }

    protected function processRequest() {

    } 
}