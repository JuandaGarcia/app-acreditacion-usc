import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import styles from "../styles";
import { useHistory } from "react-router-native";
import Preguntas from "../models/preguntas/Preguntas";

const Respuesta = props => {
  return (
    <TouchableHighlight
      onPress={() => {
        if (props.respuesta === props.texto) console.log("CORRECTO");
        else console.log("INCORRECTO");
      }}
      style={styles.Respuesta}
    >
      <Text style={styles.bold}>{props.texto}</Text>
    </TouchableHighlight>
  );
};

const PreguntasSemana = ({ match }) => {
  const history = useHistory();
  const preguntas = new Preguntas();
  const semana = match.params.numero;
  const [PreguntaActual, setPreguntaActual] = useState(0);
  let Respuestas = [
    preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc,
    preguntas.buscarPorSemana(semana)[PreguntaActual].opc1,
    preguntas.buscarPorSemana(semana)[PreguntaActual].opc2,
    preguntas.buscarPorSemana(semana)[PreguntaActual].opc3
  ].sort(() => {
    return Math.random() - 0.5;
  });

  return (
    <View style={styles.containerWeeks}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          history.push(`/`);
        }}
      >
        <View style={styles.backContainer}>
          <Image style={styles.backImage} source={require("../img/back.png")} />
          <Text style={styles.bold}>Preguntas de la semana {semana}</Text>
        </View>
      </TouchableHighlight>
      <ScrollView horizontal={true} style={styles.contenedorNumerosPreguntas}>
        {preguntas.buscarPorSemana(semana).map(pregunta => {
          if (
            preguntas.buscarPorSemana(semana).indexOf(pregunta) ===
            PreguntaActual
          )
            return (
              <TouchableHighlight
                key={pregunta.id}
                style={styles.PreguntaSelected}
                underlayColor="transparent"
                onPress={() => {
                  setPreguntaActual(
                    preguntas.buscarPorSemana(semana).indexOf(pregunta)
                  );
                }}
              >
                <Text style={styles.letrasNumerosPreguntasWhite}>
                  {preguntas.buscarPorSemana(semana).indexOf(pregunta) + 1}
                </Text>
              </TouchableHighlight>
            );

          return (
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setPreguntaActual(
                  preguntas.buscarPorSemana(semana).indexOf(pregunta)
                );
              }}
              key={pregunta.id}
              style={styles.PreguntaNoSelected}
            >
              <Text style={styles.letrasNumerosPreguntas}>
                {preguntas.buscarPorSemana(semana).indexOf(pregunta) + 1}
              </Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
      <Text style={styles.flechaNumerosPreguntas}>→</Text>
      <View style={styles.lineaNumerosPreguntas}></View>
      <View style={styles.imgPreguntaContainer}>
        <Image
          style={styles.imgPregunta}
          source={require("../img/img-pregunta.png")}
        />
      </View>
      <Text style={styles.eunciadoPregunta}>
        {preguntas.buscarPorSemana(semana)[PreguntaActual].title}
      </Text>
      <Respuesta
        texto={Respuestas[0]}
        id={preguntas.buscarPorSemana(semana)[PreguntaActual].id}
        respuesta={preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc}
      ></Respuesta>
      <Respuesta
        texto={Respuestas[1]}
        id={preguntas.buscarPorSemana(semana)[PreguntaActual].id}
        respuesta={preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc}
      ></Respuesta>
      <Respuesta
        texto={Respuestas[2]}
        id={preguntas.buscarPorSemana(semana)[PreguntaActual].id}
        respuesta={preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc}
      ></Respuesta>
      <Respuesta
        texto={Respuestas[3]}
        id={preguntas.buscarPorSemana(semana)[PreguntaActual].id}
        respuesta={preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc}
      ></Respuesta>
    </View>
  );
};

export default PreguntasSemana;
