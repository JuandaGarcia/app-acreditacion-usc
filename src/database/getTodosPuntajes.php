<?php
  // Se requiere de la base de datos una vez 
  require_once("./conectarBD.php");
  // Se obtiene la base de datos y se le envia un QUERY
  $consulta = conectarBD::conexion()->query("SELECT * FROM usuario");

  // Se declara el objeto y los arreglos a usar
  $obj = new \stdClass();
  $puntaje = array();
  $complemento = array();
  $usuario = array();

  // Recorremos todas las filas de la consulta retornada
  while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)){
    // Se almacena en los arreglos los valores dados por la base de datos
    array_push($puntaje, $filas['usu_pun']);
    array_push($complemento, $filas["usu_pun"]. "-". $filas['usu_ide']. "-". $filas['usu_nom']);
  }

  // Se arregla el arreglo de mayor a menor
  rsort($puntaje);

  $i = 0;
  $j = 0;
  // Se recorre un ciclo donde se ordenaran todos los datos segun el puntaje
  while($i < sizeof($complemento))
    // Si el primer dato del arreglo separado por - es igual al puntaje
    if(explode("-", $complemento[$i])[0] == $puntaje[$j]){
      // se definen los nuevos atributos del objeto y se castean algunos de ellos
      $obj->puntaje = (int) explode("-", $complemento[$i])[0];
      $obj->ide = (int) explode("-", $complemento[$i])[1];
      $obj->nombre = explode("-", $complemento[$i])[2];
      // Se agrega al arreglo usuario
      array_push($usuario, $obj);
      // Se redefine el obj para borrar todos sus atributos
      $obj = new \stdClass();

      // Se elimina el valor usado del arreglo de complementos
      unset($complemento[$i]);
      // Se arreglan los indices del arreglo
      $complemento = array_values($complemento);
      $j++;
      $i = 0;
    } else $i++;
  // Se imprime el JSON
  echo json_encode($usuario);
?>