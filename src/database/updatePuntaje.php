<?php
    // Se requiere de la base de datos una vez 
    require_once("./conectarBD.php");

    // Se reciben valores por GET
    $id = $_GET['id'];
    $puntaje = $_GET['puntaje'];
    // Se define un objeto
    $obj = new \stdClass();

    try {
        conectarBD::conexion()->query("UPDATE usuario SET usu_pun=$puntaje WHERE usu_ide = $id");
        $obj->bandera = true;
    } catch (exception $e) {
        die();
        $obj->bandera = false;
    } finally {
        echo json_encode($obj);
    }
?>