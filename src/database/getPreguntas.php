<?php
    // Se requiere de la base de datos una vez 
    require_once("./conectarBD.php");
    // Se obtiene la base de datos y se le envia un QUERY
    $consulta = conectarBD::conexion()->query("SELECT * FROM usuario");

    // Se reciben valores por GET
    $id = $_GET['id'];

    // Recorremos todas las filas de la consulta retornada
    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC))
        // Si el id enviado por Get es igual a un id en la base de datos
        if($filas['usu_ide'] == $id){
            // Si las respuesta no es '-', que significa que no ha resuelto nada
            if($filas['usu_res'] != "-")             
                echo json_encode(explode("-", $filas['usu_res']));
            else echo json_encode(NULL);
            
            return;
        }
    
?>