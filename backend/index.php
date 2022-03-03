<?php

include "config/config.php";

use src\request as Request;
use src\responses as Response;
use src\controllers as Controller;

$request = new Request\Request();

if (substr($request->getPath(),0,3) === "api") {
    $response = new Response\JSONResponse();

} else {
    set_exception_handler("HTMLexceptionHandler");
    $response = new Response\HTMLResponse();
}


switch ($request->getPath()) {
    case '':
    case 'home':
        $controller = new Controller\HomeController($request, $response);
        break;
    case 'api/authenticate':
        $controller = new Controller\ApiAuthenticateController($request, $response);
        break;
    case 'api/guestlist':
        $controller = new Controller\ApiGuestController($request, $response);
        break;
    case 'api/register':
        $controller = new Controller\ApiRegisterController($request, $response);
        break;
    default:
        if (substr($request->getPath(),0,3) === "api") {
        $controller = new Controller\ApiErrorController($request, $response);
        }  else {
        $controller = new Controller\ErrorController($request, $response);
        }
        break;
}

echo $response->getData();