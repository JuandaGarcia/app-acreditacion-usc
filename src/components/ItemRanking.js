import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const ItemRanking = props => {
	if (props.id === 1) {
		return (
			<View style={styles.itemRankingPrimero}>
				<Text style={styles.bold}>
					{props.id}. {props.nombre}
				</Text>
				<Text style={styles.bold}>{props.puntos} Pts.</Text>
			</View>
		)
	}
	if (props.id === 2) {
		return (
			<View style={styles.itemRankingSegundo}>
				<Text style={styles.bold}>
					{props.id}. {props.nombre}
				</Text>
				<Text style={styles.bold}>{props.puntos} Pts.</Text>
			</View>
		)
	}
	if (props.id === 3) {
		return (
			<View style={styles.itemRankingTercero}>
				<Text style={styles.bold}>
					{props.id}. {props.nombre}
				</Text>
				<Text style={styles.bold}>{props.puntos} Pts.</Text>
			</View>
		)
	}
	return (
		<View style={styles.itemRanking}>
			<Text style={styles.bold}>
				{props.id}. {props.nombre}
			</Text>
			<Text style={styles.bold}>{props.puntos} Pts.</Text>
		</View>
	)
}

export default ItemRanking
