<?php

namespace src\webpages;

/**
 * Generate a webpage
 *
 * In this example, the class has been declared abstract.
 *
 * @author Scott Mains w18003567
 */

abstract class Webpage 
{
    private $head;
    private $foot;
    private $body;

     /**
     * setHead
     * 
     * Create the head from WebpageComponents class and save to $this->head
     * 
     * @param  string $title   The page title
     */

    protected function setHead($title) {
        $this->head = webpageComponents::webpageHead($title);
    }

    private function getHead() {
    	return $this->head;
    }

    protected function setBody($text) {
    	$this->body .= $text;
    }

    private function getBody() {
        return $this->body;
    }

    /**
     * setFoot
     * 
     * Create the foot and save to $this->foot
     */

    protected function setFoot() {
        $this->foot = webpageComponents::webpageFoot();
    }

    private function getFoot() {
        return $this->foot;
    }

    protected function addMenu($links, $activePage) {
        $menu = webpageComponents::menu($links,$activePage);
    	$this->setBody($menu);
    }

    public function addHeading1($text) {
        $this->setBody("<h1 class='text-center'>$text</h1>");
    }

    public function addHeading2($text) {
        $this->setBody("<h2 class='>$text</h2>");
    }


    public function addParagraph($text) {
        $this->setBody("<p class='text-center'>$text</p>");
    }

    public function addHeader($heading, $text) {
        $header = webpageComponents::webpageHeader($heading,$text);
        $this->setBody($header);
    }

    public function addButton ($text, $link) {
        $button = webpageComponents::webpageButton($text, $link);
        $this->setBody($button);
    }

    public function addCard ($title, $method, $path, $description, $link) {
        $card = webpageComponents::webpageCard($title, $method, $path, $description, $link);
        $this->setBody($card);
    }
    

    

    /**
     * generateWebpage
     * 
     * Generate a full HTML5 webpage
     *
     * @return string 
     */
    
    public function generateWebpage() {
        return $this->head . $this->body . $this->foot;
    }

}