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
        $page = new Webpage\HomePage("Week 5", ["home"=>"home", "documentation"=>"documentation"], "ERROR", "");
        $page->addHeader("ERROR", "Please check to see if you are using the right link. Check the documentation page top right if you have issues.");
        return $page->generateWebpage();
    }
}