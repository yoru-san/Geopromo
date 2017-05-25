<?php

require_once("../config.php");
require_once("Rest.inc.php");

class API extends REST
{

  public $data = "";
  protected $db = NULL;
  protected $mysqli = NULL;

  public function __construct()
  {
    parent::__construct();    // Init parent contructor
    $this->dbConnect();     // Initiate Database connection
  }

  /*
   *  Connect to Database
   */

  protected function dbConnect()
  {
    $this->mysqli = new mysqli(Config::$host, Config::$user, Config::$password, Config::$dbname);
    $this->mysqli->set_charset('utf8');
    /* Vérification de la connexion */
    if ($this->mysqli->connect_errno) {
      printf("Échec de la connexion : %s\n", $this->mysqli->connect_error);
      exit();
    }
  }

  /*
   * Dynmically call the method based on the query string
   */

  public function processApi($lastitem)
  {
    $func = strtolower(trim(str_replace("/", "", $_REQUEST['x'])));
    if ((int)method_exists($this, $func) > 0) {
      $this->$func();
      return true;
    } else {
      if ($lastitem) {
        $this->response('', 404);
      } // If the method not exist with in this class "Page not found". )
      return false;
    }
  }

  /*
   * Report mail and JSON 500
   */

  protected function throwError($query)
  {
    if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1") {
      //plus de trace pas besoin de mail
      $this->response($this->json(array('error' => 'REST_INTERNAL_ERROR', 'details' => $this->mysqli->error . __LINE__ . "<br/>" . $this->mysqli->info, 'query' => $query)), 500);
    } else {
      Config::mail_SQLReport($query, $this->mysqli->error . __LINE__ . "<br/>" . $this->mysqli->info);
      $this->response($this->json(array('error' => 'REST_INTERNAL_ERROR')), 500);
    }
  }

  protected function json($data)
  {
    if (is_array($data)) {
      return json_encode($data);
    }
  }

  /**
   * Permet de tester la validité d'un CSR client et de récupérer le cas échéant son id
   * @param $csr token de sécurité
   * @param $iptest bool est-ce que l'on effectue un test sur l'ip également. On peut éventuellement mettre à true mais peut poser problème si utilisé depuis un smartphone. l'ip change régulièrement.
   * @return int return l'id du l'utilisateur si CSR valide, sinon déclenche une exception pour le client
   */
  protected function testCSR($csr, $iptest = false)
  {
    $query = "SELECT USR_N_ID FROM gamecms_users WHERE USR_CH_CSR = '$csr'";
    if ($iptest) {
      $ip = $_SERVER['REMOTE_ADDR'];
      $query .= " AND USR_CH_IP = '$ip'";
    }
    $r = $this->mysqli->query($query) or $this->throwError($query);
    if ($r->num_rows > 0) {
      $row = $r->fetch_assoc();
      return $row['USR_N_ID'];
    } else {
      $this->response($this->json(array('error' => "REST_FORBIDDEN")), 403);
    }
  }

  protected function sanitize($string, $force_lowercase = true, $anal = false)
  {
    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]",
      "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",
      "â€”", "â€“", ",", "<", ".", ">", "/", "?");
    $clean = trim(str_replace($strip, "", strip_tags($string)));
    $clean = preg_replace('/\s+/', "-", $clean);
    $clean = ($anal) ? preg_replace("/[^a-zA-Z0-9]/", "", $clean) : $clean;
    return ($force_lowercase) ?
      (function_exists('mb_strtolower')) ?
        mb_strtolower($clean, 'UTF-8') :
        strtolower($clean) :
      $clean;
  }
}

require_once("UsersController.php");
require_once("DiscountsController.php");


$controllers = array();

//Ajout des controllers
array_push($controllers, "UsersController");
array_push($controllers, "DiscountsController");

//Gestion du service
for ($i = 0; $i < count($controllers); $i++) {
  $ctrl = new $controllers[$i]();
  if ($ctrl->processApi($i == (count($controllers) - 1))) {
    break;
  }
}
