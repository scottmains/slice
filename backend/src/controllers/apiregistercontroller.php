<?php
namespace src\controllers;
require_once 'src/firebase/jwt/BeforeValidException.php';
require_once 'src/firebase/jwt/ExpiredException.php';
require_once 'src/firebase/jwt/SignatureInvalidException.php';
require_once 'src/firebase/jwt/JWT.php';
require_once 'src/firebase/jwt/Key.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

use src\gateways as Gateway;

/**
 * Controller class that gets requests and deals with 
 * data from the api/readinglist end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class ApiRegisterController extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }

        protected function processRequest() {

            if ($this->getRequest()->getRequestMethod() === "POST") {

                $email = !empty($_POST['email']) ? trim($_POST['email']) : null;
                $password = !empty($_POST['password']) ? trim($_POST['password']) : null;
                $fullname = !empty($_POST['fullname']) ? trim($_POST['fullname']) : null;
                $phonenumber = !empty($_POST['phonenumber']) ? trim($_POST['phonenumber']) : null;

                $this->getGateway()->checkEmail($email);
                $this->getGateway()->addUser($email, $password);
                $this->getGateway()->addGuest($fullname, $phonenumber);

            }

            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }