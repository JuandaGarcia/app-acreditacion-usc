import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import Semana from '../components/Semana'

const Weeks = () => {
	return (
		<View style={styles.containerWeeks}>
			<Text style={styles.titleWeeks}>Preguntas</Text>
			<Semana numeroSemana={1} />
			<Semana numeroSemana={2} />
			<Semana numeroSemana={3} />
			<Semana numeroSemana={4} />
		</View>
	)
}

export default Weeks
