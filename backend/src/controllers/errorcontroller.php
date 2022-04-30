<?php

namespace src\controllers;
use src\webpages as Webpage;


/**
 * Controller class that instantiaties the functions set out in homepage class and
 * is used for when the user is directed to a page that doesn't exist.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class ErrorController extends Controller 
{
    protected function processRequest() {
        $page = new Webpage\HomePage("Slice Booking System", "", "");
        $page->addHeader("ERROR", "Please use API ");
        return $page->generateWebpage();
    }
}