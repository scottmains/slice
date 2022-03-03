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

class ApiGuestController extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\GuestGateway();
    }
 
        protected function processRequest() {

            $token = $this->getRequest()->getParameter("token");



            if ($this->getRequest()->getRequestMethod() === "POST") {
                $key = SECRET_KEY;
                $decoded = JWT::decode($token, new Key($key, 'HS256'));
                $user_id = $decoded->user_id;

                if (!is_null($add)) {
                    $this->getGateway()->add($user_id, $add);
                } elseif (!is_null($remove)) {
                    $this->getGateway()->remove($user_id, $remove);
                } else {
                    $this->getGateway()->findGuestInfo($user_id);
                }
            }  
            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }