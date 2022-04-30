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

class Register extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }

        protected function processRequest() {

            if ($this->getRequest()->getRequestMethod() === "POST") {

                $input['password'] = filter_has_var(INPUT_POST, 'password') ? $_POST['password'] : null;
                $input['email'] = filter_has_var(INPUT_POST, 'email') ? $_POST['email'] : null;
                $input['name'] = filter_has_var(INPUT_POST, 'name') ? $_POST['name'] : null;
                $input['phonenumber'] = filter_has_var(INPUT_POST, 'phonenumber') ? $_POST['phonenumber'] : null;

                function trim_input($inputs){
                    foreach($inputs as $key => $value){
                        $inputs[$key] = trim($value);
                    }
                    return $inputs;
                }
                $input= trim_input($input);
                
                $this->getGateway()->addUser($input['name'], $input['phonenumber'], $input['email'], $input['password']);
            }
            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }