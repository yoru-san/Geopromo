<?php
class Config
{
  /* Ne pas mettre une adresse ip sinon OpenDB n'arrive pas à trouver le host */

  public static $host = "localhost";
  public static $user = "root";
  public static $password = "";
  public static $dbname = "geopromo";

  public static function OpenDB()
  {
    try {
      $dns = "mysql:host=" . Config::$host . ";dbname=" . Config::$dbname;
      $connection = new PDO($dns, Config::$user, Config::$password);
      $connection->exec("SET CHARACTER SET utf8");
      return $connection;
    } catch (Exception $e) {
      echo "Connection à MySQL impossible : ", $e->getMessage();
      die();
    }
  }
}
