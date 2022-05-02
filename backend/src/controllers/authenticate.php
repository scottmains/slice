<?php

namespace src\controllers;
require_once 'src/firebase/jwt/BeforeValidException.php';
require_once 'src/firebase/jwt/ExpiredException.php';
require_once 'src/firebase/jwt/SignatureInvalidException.php';
require_once 'src/firebase/jwt/JWT.php';
use src\gateways as Gateway;
use Firebase\JWT\JWT;

/**
 * Controller class that gets requests and deals with 
 * data from the api/authors end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class Authenticate extends Controller {

    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }

    protected function processRequest() {
        $data = [];
        $email = $this->getRequest()->getParameter("email");
        $password = $this->getRequest()->getParameter("password");
        $userid = $this->getGateway()->findPassword($email);
        if ($this->getRequest()->getRequestMethod() === "POST") {
            if(!is_null($email) && !is_null($password) ) {
               $this->getGateway()->findPassword($email);
               if (count($this->getGateway()->getResult()) == 1) {
                $hashpassword = $this->getGateway()->getResult()[0]['password'];

                if (password_verify($password, $hashpassword)) {
                    $key = SECRET_KEY;
                  
                    $payload = array(
                        "userid" => $userid[0]['userid'],
                        'isAdmin' => $userid[0]['isAdmin'],
                        "exp" => time() + 10000,
                        "iat" => time()
                    );
                    $jwt = JWT::encode($payload, $key, 'HS256');
                    $data = ['success' => 1,
                    'message' => 'You have successfully logged in.',
                    'token' => $jwt,
                    'email' => $email,
                    'userid' => $userid[0]['userid'],
                    
                    ];
                     }
                }
            } 
            if (!array_key_exists('token', $data)) {
            $this->getResponse()->setMessage("Unauthorized");
            $this->getResponse()->setStatusCode(401);
            }
        } else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $data;
    }
}
