<?php

namespace src\request;


/**
 *  Request Class that deals with GET or POST methods.
 * 
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class Request {

    private $basepath = BASEPATH;
    private $path;
    private $requestMethod;

    /**
    * 
    * The construct parses the URL requested by the user using $_SERVER["REQUEST_URI"]
    * and extracts its path. The path is then trimmed and sent to determine its
    * request method
    * 
    */

    public function __construct() {
        $this->path = parse_url($_SERVER["REQUEST_URI"])['path'];
        $this->path = strtolower(str_replace($this->basepath,"", $this->path));
        $this->path = trim($this->path, "/");  
        $this->requestMethod = $_SERVER["REQUEST_METHOD"];
    }

    public function getPath() {
        return $this->path;
    }

    public function getRequestMethod() {
        return $this->requestMethod;
    }

    public function getParameter($param) {
        if ($this->getRequestMethod() === "GET"){
            $param = filter_input(INPUT_GET, $param, FILTER_SANITIZE_SPECIAL_CHARS);
        }
        if ($this->getRequestMethod() === "POST") {
            $param = filter_input(INPUT_POST, $param, FILTER_SANITIZE_SPECIAL_CHARS);
        }
        return $param;
    }
}