<?php

namespace src\webpages;


/**
 * Generate a documentation page
 * 
 * This class extends the Webpage class
 * and sets web components to be used
 * as a documentation page.
 * 
 * 
 * @author Scott Mains w18003567
 * 
 */

class DocumentationPage extends Webpage
{

    /**
     * constructor
     * 
     * Create the head body and foot of the page.
     * This will be a valid HTML5 page with just
     * a heading.
     * 
     * @param string $title   The page title
     * @param string $links this sets the links for the navigation menu dynamically
     * @param string $activePage This sets the current page as the active link
     * @param string $heading1 Sets the header for the page.
     */

    public function __construct($title, $links, $activePage, $heading1) {
        $this->setHead($title);
        $this->addMenu($links, $activePage);
        $this->addHeading1($heading1);
        $this->setFoot();
    } 
}

   