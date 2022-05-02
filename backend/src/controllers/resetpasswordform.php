<?php

namespace src\controllers;
use src\webpages as Webpage;


/**
 * Controller class that instantiaties the functions set out in homepage class.
 * 
 * This class creates the content for the Homepage of the web application.
 * It takes the homepage class and sets its variables to create content
 * for the home page. The content is displayed in HTML format.
 * Additional functions can be added to add further content.
 * 
 * @author Scott Mains w18003567
 * 
 */

class ResetPasswordForm extends Controller {

protected function processRequest() {
    $page = new Webpage\HomePage("Reset your password", "Reset Password");
    $page->addHeader("Use link below to reset password:", "<form class='login-form' action='new_password.php' 
    method='post'><div class='form-group'>
    <label>New password</label>
    <input type='password' name='new_pass'>
    </div>");
    $page->addParagraph("<label>Confirm New password</label><input type='password' name='new_pass_c'>");
    $page->addParagraph("<button type='submit' name='new_password' class='login-btn'> Submit </button> </form>");
    return $page->generateWebpage();
}
}