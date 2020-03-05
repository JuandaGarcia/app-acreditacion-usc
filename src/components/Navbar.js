import React from 'react'
import { View, TouchableHighlight, Image, Text } from 'react-native'
import styles from '../styles'
import { useHistory } from 'react-router-native'

const Navbar = () => {
	const history = useHistory()
	return (
		<View style={styles.containerNavbar}>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				onPress={() => {
					history.push('/scan-qr')
				}}
				style={styles.btnNavbar}
			>
				<Image
					style={styles.circleNavbarIcon}
					source={require('../img/qrcode.png')}
				/>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="#B6B5FF"
				onPress={() => {
					history.push('/')
				}}
				style={styles.circleNavbar}
			>
				<Image
					style={styles.circleNavbarIcon}
					source={require('../img/gamepad.png')}
				/>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				onPress={() => {
					history.push('/ranking')
				}}
				style={styles.btnNavbar}
			>
				<Image
					style={styles.circleNavbarIcon}
					source={require('../img/trofeo.png')}
				/>
			</TouchableHighlight>
		</View>
	)
}

export default Navbar
