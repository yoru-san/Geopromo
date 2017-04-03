<?php

class UsersController extends API
{
  public function __construct()
  {
    parent::__construct();    // Init parent contructor
  }

  protected function loginUser()
  {
    if ($this->get_request_method() != "POST") {
      $this->response('', 406);
    }
    $user = json_decode(file_get_contents("php://input"), true);
    $email = $this->mysqli->real_escape_string((string)$user['email']);
    $password = $this->mysqli->real_escape_string((string)$user['password']);

    $this->response($this->json(array('csr' => "zdkzqhdohqdhoiqzhdoizh")), 200);
  }

  protected function testUser()
  {
    $this->response($this->json(array('status' => "ok")), 200);
  }
}
