import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles'
import ItemRanking from '../components/ItemRanking'

const Ranking = () => {
	const Colors = [
		['#FBC2EB', '#A18CD1'],
		['#96E6A1', '#D4FC79'],
		['#FDA085', '#F6D365'],
		['#66A6FF', '#89F7FE'],
	]

	//Arreglo temporal
	const Ranking = [
		{ id: 1, nombre: 'Ciro', puntos: 31 },
		{ id: 2, nombre: 'Santiago', puntos: 29 },
		{ id: 3, nombre: 'Juan David', puntos: 27 },
		{ id: 4, nombre: 'Juan José', puntos: 25 },
		{ id: 5, nombre: 'Fernando', puntos: 23 },
	]

	return (
		<View style={styles.containerWeeks}>
			<Text style={styles.titleWeeks}>Top 10</Text>
			<LinearGradient
				colors={Colors[0]}
				start={[0, 0]}
				end={[0.9, 0.9]}
				style={styles.HeaderRanking}
			>
				<Image
					style={styles.imgHeaderRanking}
					source={require('../img/premio.png')}
				/>
				<View>
					<Text style={styles.tituloRankingSemana}>Premios</Text>
					<Text style={styles.diasHeader}>Primeros puestos</Text>
				</View>
			</LinearGradient>
			<View style={styles.nombre_puntos}>
				<Text>Nombre</Text>
				<Text>Puntos</Text>
			</View>
			<View>
				{Ranking.map((persona) => {
					return (
						<ItemRanking
							key={persona.id}
							id={persona.id}
							nombre={persona.nombre}
							puntos={persona.puntos}
						/>
					)
				})}
			</View>
		</View>
	)
}

export default Ranking
