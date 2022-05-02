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
        $controller = new Controller\ErrorController($request, $response);
        break;
    case 'api/authenticate':
        $controller = new Controller\Authenticate($request, $response);
        break;
    case 'api/register':
        $controller = new Controller\Register($request, $response);
        break;
    case 'api/guestreservation':
        $controller = new Controller\GuestReservation($request, $response);
        break;
    case 'api/userreservation':
        $controller = new Controller\UserReservation($request, $response);
        break;
    case 'api/finduser':
        $controller = new Controller\FindUser($request, $response);
        break;
    case 'api/adminbookings':
        $controller = new Controller\AdminBookings($request, $response);
        break;
    case 'api/admincustomers':
        $controller = new Controller\AdminCustomers($request, $response);
        break;
    case 'api/showuserbookings':
        $controller = new Controller\ShowUserBookings($request, $response);
        break;
    case 'api/checkrestaurant':
        $controller = new Controller\Restaurant($request, $response);
        break;
    case 'api/checktimeslots':
        $controller = new Controller\Timeslots($request, $response);
        break;
    case 'api/adminsettings':
        $controller = new Controller\AdminSettings($request, $response);
        break;
    case 'api/userdeletebooking':
        $controller = new Controller\UserDeleteBooking($request, $response);
        break;
    case 'api/forgotpassword':
        $controller = new Controller\ForgotPassword($request, $response);
        break;
    case 'resetpassword':
        $controller = new Controller\ResetPasswordForm($request, $response);
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