import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from '../styles'
import { useHistory } from 'react-router-native'

const Respuesta = props => {
	return (
		<TouchableHighlight style={styles.Respuesta}>
			<Text style={styles.bold}>{props.texto}</Text>
		</TouchableHighlight>
	)
}

const PreguntasSemana = ({ match }) => {
	const history = useHistory()
	return (
		<View style={styles.containerWeeks}>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push(`/`)
				}}
			>
				<View style={styles.backContainer}>
					<Image style={styles.backImage} source={require('../img/back.png')} />
					<Text style={styles.bold}>
						Preguntas de la semana {match.params.numero}
					</Text>
				</View>
			</TouchableHighlight>
			<View style={styles.contenedorNumerosPreguntas}>
				<Text style={styles.letrasNumerosPreguntas}>1</Text>
				<Text style={styles.letrasNumerosPreguntas}>2</Text>
				<Text style={styles.letrasNumerosPreguntas}>3</Text>
				<Text style={styles.letrasNumerosPreguntas}>4</Text>
				<Text style={styles.letrasNumerosPreguntas}>5</Text>
				<Text style={styles.letrasNumerosPreguntas}>6</Text>
				<Text style={styles.letrasNumerosPreguntas}>7</Text>
			</View>
			<View style={styles.lineaNumerosPreguntas}></View>
			<View style={styles.imgPreguntaContainer}>
				<Image
					style={styles.imgPregunta}
					source={require('../img/img-pregunta.png')}
				/>
			</View>
			<Text style={styles.eunciadoPregunta}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit?
			</Text>
			<Respuesta texto={'Lorem'}></Respuesta>
			<Respuesta texto={'Lorem'}></Respuesta>
			<Respuesta texto={'Lorem'}></Respuesta>
			<Respuesta texto={'Lorem'}></Respuesta>
		</View>
	)
}

export default PreguntasSemana
