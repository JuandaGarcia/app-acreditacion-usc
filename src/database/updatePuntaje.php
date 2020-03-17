<?php
    // Se requiere de la base de datos una vez 
    require_once("./conectarBD.php");

    // Se reciben valores por GET
    $id = $_GET['id'];
    $puntaje = $_GET['puntaje'];

    conectarBD::conexion()->query("UPDATE usuario SET usu_pun=$puntaje WHERE UPPER(usu_ide) = UPPER('$id')");

?>