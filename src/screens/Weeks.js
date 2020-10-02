import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	Image,
	AsyncStorage,
	TouchableHighlight,
	Alert,
} from 'react-native'
import styles from '../styles'
import Semana from '../components/Semana'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-native'

const Weeks = () => {
	const [name, setName] = useState('')
	const [avatar, setAvatar] = useState(0)
	const Avatars = [
		require('../img/avatars/a1.png'),
		require('../img/avatars/a2.png'),
		require('../img/avatars/a3.png'),
		require('../img/avatars/a4.png'),
		require('../img/avatars/a5.png'),
		require('../img/avatars/a6.png'),
		require('../img/avatars/a7.png'),
		require('../img/avatars/a8.png'),
	]

	const history = useHistory()

	useEffect(() => {
		DatosToken()
		return () => {}
	}, [])

	const DatosToken = async () => {
		const token = await AsyncStorage.getItem('usertoken')
		if (token !== null) {
			const decoded = jwt_decode(token)
			setName(decoded.nombre)
			setAvatar(decoded.avatar)
		}
	}

	const LogOut = async () => {
		Alert.alert(
			'Cerrar sesión',
			'¿Estás seguro de que quieres cerrar la sesión?',
			[
				{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'Cerrar sesión',
					onPress: () => {
						AsyncStorage.removeItem('usertoken')
						history.push(`/`)
					},
				},
			],
			{ cancelable: false }
		)
	}

	return (
		<View style={styles.containerWeeks}>
			<View style={styles.profileHeader}>
				<View style={styles.NombreAvatar}>
					{avatar ? (
						<Image style={styles.imgProfile} source={Avatars[avatar - 1]} />
					) : null}
					<Text style={styles.ProfileName}>{name}</Text>
				</View>
				<TouchableHighlight
					underlayColor="transparent"
					onPress={() => {
						LogOut()
					}}
				>
					<Image
						style={styles.NavbarIcon}
						source={require('../img/logout.png')}
					/>
				</TouchableHighlight>
			</View>
			<Semana numeroSemana={1} />
			<Semana numeroSemana={2} />
			<Semana numeroSemana={3} />
			<Semana numeroSemana={4} />
		</View>
	)
}

export default Weeks
