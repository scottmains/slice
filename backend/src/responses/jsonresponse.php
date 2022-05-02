<?php 

namespace src\responses;
/**
 * Response Class that deals specifically with JSON requests.
 * 
 * If the data recieved is JSON data, this class deals with it 
 * accordingly.  It sets the headers of the data to JSON content
 * and then sets the message to the reader accoding to the status
 * code that is received.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class JSONResponse extends Response
{

    private $message;

    protected function headers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    }

    public function setMessage($message) {
        $this->message = $message;
    }

    /** setter method for status code property */
    public function setStatusCode($statusCode) {
        $this->statusCode = $statusCode;
    }

     public function getData() {
        if (is_null($this->data)) {
            $this->data = [];
        }

        /** set different codes within this conditional */
        if (is_null($this->message)) {
            if (count($this->data) > 0) {
                $this->message = "ok";
                $this->setStatusCode(200);
            } else {
                $this->message = "no content";
                $this->setStatusCode(204);
            }
        }
      
        /** return the given code */
        http_response_code($this->statusCode);

        $response['message'] = $this->message;
        $response['count'] = count($this->data);
        $response['results'] = $this->data;

        return json_encode($response);
    }
}