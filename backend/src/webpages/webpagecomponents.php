<?php

namespace src\webpages;
  
/**
 * Components for Webpage
 *
 * This class provides static methods for creating webpage components 
 *
 * @author Scott Mains w18003567
 */

class WebpageComponents 
{
    public static function webpageHead($title) {
        $css = "././assets/style.css";
        return "
        <!DOCTYPE html>
        <html lang='en-gb'>
        <head>
            <title>$title</title>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
            
            <link rel='stylesheet' href='assets/style.css'>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'>
        </head>
        <body class='text-center' data-spy='scroll'>";
    }

    public static function webpageFoot() {
        return "
        </body>
        </html>";
 
    }

    public static function webpageHeader($heading, $text) {
    return 
    "<header>
        <div class='header-content text-center mx-auto'>
            <div class='header-content-inner'>
                <h2>$heading</h2>
                <p>$text</p>
            </div>
        </div>
    </header>";
      
    }

    public static function webpageButton ($link, $text) {
    return 
        "<a class='btn btn-primary' href='$link' role='button'>$text</a>";
       
    }

    public static function webpageCard ($title, $method, $path, $description, $link) {
    return  
    
        "<div class='card mx-auto mt-3' style='width: 70rem;'>
        <div class='card-body'>
            <h4 class='card-title'>$title</h5>
            <h5 class='card-subtitle mb-2 text-muted'>Method: $method</h5>
            <h6 class='card-subtitle mb-2 text-muted'>Path: $path</h6>
            <p class='card-text'>$description</p>
            <a href='$link' class='card-link'>Click here for the end-point</a>
        </div>
    </div>";
      
    }

    

    /**
     * Create a menu
     *
     * This method creates a menu as an unordered list. This is best practice for
     * menus. It is styled using CSS to better look like a menu.
     *
     * @param array   $links      Associative array of name=>link pairs for menu
     * @param string  $activePage Name of active page (should match a name in $links)
     */
    public static function menu($links, $activePage) {
        $menu = "
                    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                    <div class='container-fluid'>
                    <a class='navbar-brand' href='#'>DIS</a>
                    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                      <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                      <ul class='navbar-nav ms-auto'>";
        
        foreach($links as $name=>$link) {
            $active = ($name === $activePage) ? "active" : "";
            $menu .= "<li class = 'nav-item px-4'><a href='$link' class='$active nav-link'>$name</a></li>";
        }

        $menu .= "</ul></div></div></nav>";
        return $menu;
    }
}
