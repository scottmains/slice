<?php 

namespace src\responses;


/**
 * Response Class that deals specifically with JSON requests.
 * 
 * If the data recieved is HTML data, this class deals with it 
 * accordingly.  It sets the headers of the data to HTML content
 * so that it is easily readable on a HTML webpage.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class HTMLResponse extends Response
{
    protected function headers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: text/html; charset=UTF-8");
    }
}