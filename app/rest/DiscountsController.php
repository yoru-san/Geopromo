<?php
/**
 *
 */
class DiscountsController extends API
{

  function __construct()
  {
   parent::__construct();
  }

  protected function ajouterDiscount()
  {
    if ($this->get_request_method() != "POST") {
      $this->response('', 406);
    }

    $discount = json_decode(file_get_contents("php://input"), true);
    $name = $this->mysqli->real_escape_string((string)$discount['name']);
    $description = $this->mysqli->real_escape_string((string)$discount['description']);
    $image = $this->mysqli->real_escape_string((string)$discount['image']);
    $dateDebut = $this->mysqli->real_escape_string((string)$discount['dateDebut']);
    $dateFin = $this->mysqli->real_escape_string((string)$discount['dateFin']);

    $query = "INSERT INTO discounts (name, description, image, start_date, end_date) VALUES ('$name', '$description', '$image','$dateDebut', '$dateFin');";
    $this->mysqli->query($query) or $this->throwError($query);
    $this->response($this->json(array()), 204); // No content
  }
}

 ?>
