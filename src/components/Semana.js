import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles'

const Semana = props => {
	const Colors = [
		['#A18CD1', '#FBC2EB'],
		['#96E6A1', '#D4FC79'],
		['#FDA085', '#F6D365'],
		['#66A6FF', '#89F7FE']
	]

	const Images = [
		require('../img/semana1.png'),
		require('../img/semana2.png'),
		require('../img/semana3.png'),
		require('../img/semana4.png')
	]

	return (
		<LinearGradient
			colors={Colors[props.numeroSemana - 1]}
			start={[0, 0]}
			end={[0.9, 0.9]}
			style={styles.semana}
		>
			<View>
				<Text style={styles.tituloSemana}>Semana {props.numeroSemana}</Text>
				<Text style={styles.preguntasPorSemana}>5 / 7</Text>
			</View>
			<Image
				style={styles.imgSemana}
				// No funciono así :'c
				// source={require(`../img/semana${props.numeroSemana}.png`)}
				source={Images[props.numeroSemana - 1]}
			/>
		</LinearGradient>
	)
}

export default Semana