<?php
    // Se requiere de la base de datos una vez 
    require_once("./conectarBD.php");
    // Se obtiene la base de datos y se le envia un QUERY
    $consulta = conectarBD::conexion()->query("SELECT * FROM usuario");
    
    // Obtenemos un id enviado por GET
    $id = strtolower($_GET['id']);
    // Se declara un objeto limpio
    $obj = new \stdClass();

    // Recorremos todas las filas de la consulta retornada
    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC))
        // Si el id enviado por Get es igual a un id en la base de datos
        if(strtolower($filas['usu_ide']) == $id){
            // Se declara un atributo puntaje y se le da el valor que da la base de datos
            $obj->puntaje = (int) $filas['usu_pun'];
            // Se imprime la conversion a JSON del objeto
            echo json_encode($obj);
            // Se termina el PHP
            return;
        }
?>