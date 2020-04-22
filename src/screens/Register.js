import React, { useState, useEffect } from 'react'
import {
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator,
	TextInput,
	TouchableHighlight,
	Alert,
	Picker,
} from 'react-native'
import styles from '../styles'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler,
} from '../components/androidBackButton'
import axios from 'axios'

const Register = () => {
	const [cedula, setCedula] = useState('')
	const [correo, setCorreo] = useState('')
	const [nombre, setNombre] = useState('')
	const [avatar, setAvatar] = useState('')
	const [contraseña, setContraseña] = useState('')
	const [facultad, setFacultad] = useState('Facultad de Ingeniería')
	const [programa, setPrograma] = useState('Otro')

	const [activeAvatarScreen, setActiveAvatarScreen] = useState(false)

	const [ErrorCedula, setErrorCedula] = useState(false)
	const [ErrorNombre, setErrorNombre] = useState(false)
	const [ErrorCorreo, setErrorCorreo] = useState(false)
	const [ErrorContraseña, setErrorCotraseña] = useState(false)

	const [avatarOpacity, setAvatarOpacity] = useState([
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
		styles.avatarImg,
	])
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/

	useEffect(() => {
		handleAndroidBackButton(() => setActiveAvatarScreen(false))
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	const elegirAvatar = (n) => {
		setAvatar(n)
		const ArrayModificado = avatarOpacity.map((style, index) => {
			if (n !== index) {
				return styles.avatarImgOpacity
			} else {
				return styles.avatarImg
			}
		})
		setAvatarOpacity(ArrayModificado)
	}

	const Validacion = () => {
		let noNext = false
		if (cedula.length === 0) {
			setErrorCedula(true)
			noNext = true
		} else {
			setErrorCedula(false)
		}
		if (nombre.length === 0) {
			setErrorNombre(true)
			noNext = true
		} else {
			setErrorNombre(false)
		}
		if (correo.length === 0 || !correo.match(pattern)) {
			setErrorCorreo(true)
			noNext = true
		} else {
			setErrorCorreo(false)
		}
		if (contraseña.length < 8) {
			setErrorCotraseña(true)
			noNext = true
		} else {
			setErrorCotraseña(false)
		}

		if (!noNext) {
			setActiveAvatarScreen(true)
		}
	}

	/* const PostData = async () => {
		await axios
			.post('users/register', {
				username: user,
				email: email.toLowerCase(),
				password: password,
			})
			.then((response) => {
				const data = response.data
				if (data.status === `${email} Registered!`) {
					console.log('Registered')
					axios
						.post('users/login', {
							email: email.toLowerCase(),
							password: password,
						})
						.then((response) => {
							localStorage.setItem('usertoken', response.data)
							props.history.push(`/welcome`)
							return response.data
						})
						.catch((err) => {
							console.log(err)
							Swal.fire({
								position: 'center',
								icon: 'error',
								title: `Ocurrió un error al iniciar sesión por favor intenta mas tarde.`,
								showConfirmButton: false,
								timer: 3000,
							})
						})
				}
				if (data.error) {
					if (data.error === 'User already exists') {
						Swal.fire({
							position: 'center',
							icon: 'warning',
							title: `${email} ya se encuentra registrado.`,
							showConfirmButton: false,
							timer: 3000,
						})
					} else {
						Swal.fire({
							position: 'center',
							icon: 'error',
							title: `Ocurrió un error intenta mas tarde.`,
							showConfirmButton: false,
							timer: 3000,
						})
					}
				}
			})
	} */

	if (activeAvatarScreen) {
		return (
			<View style={styles.containerLoginRegister}>
				<Text style={styles.text_Header}>Selecciona tu avatar</Text>
				<View style={styles.avatarsContainer}>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(0)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[0]}
							source={require('../img/avatars/a1.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(1)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[1]}
							source={require('../img/avatars/a2.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(2)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[2]}
							source={require('../img/avatars/a3.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(3)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[3]}
							source={require('../img/avatars/a4.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(4)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[4]}
							source={require('../img/avatars/a5.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(5)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[5]}
							source={require('../img/avatars/a6.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(6)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[6]}
							source={require('../img/avatars/a7.png')}
						/>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="rgba(0,0,0,0.0)"
						onPress={() => {
							elegirAvatar(7)
						}}
						style={styles.avatar}
					>
						<Image
							style={avatarOpacity[7]}
							source={require('../img/avatars/a8.png')}
						/>
					</TouchableHighlight>
				</View>
				<View style={styles.contenedorBotonRegistro}>
					<TouchableHighlight
						underlayColor="#32CF5E"
						style={styles.buttonRegistro}
						onPress={() => {}}
					>
						<Text style={styles.textbuttonRegistro}>Registrarse</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.containerLoginRegister}>
			<Text style={styles.text_Header}>Registro</Text>
			{ErrorCedula ? (
				<Text style={styles.textError}>Este campo es requerido</Text>
			) : null}
			<TextInput
				style={styles.inputText}
				onChangeText={(text) => setCedula(text)}
				value={cedula}
				keyboardType="numeric"
				placeholder="Cédula"
				maxLength={200}
			/>
			{ErrorNombre ? (
				<Text style={styles.textError}>Este campo es requerido</Text>
			) : null}
			<TextInput
				style={styles.inputText}
				onChangeText={(text) => setNombre(text)}
				value={nombre}
				placeholder="Nombre"
				maxLength={200}
			/>
			{ErrorCorreo ? (
				<Text style={styles.textError}>
					Ingresa un correo electrónico valido
				</Text>
			) : null}
			<TextInput
				style={styles.inputText}
				onChangeText={(text) => setCorreo(text)}
				value={correo}
				placeholder="Correo"
				maxLength={200}
			/>
			{ErrorContraseña ? (
				<Text style={styles.textError}>
					Ingresa una contraseña valida (min. 8 caracteres)
				</Text>
			) : null}
			<TextInput
				style={styles.inputText}
				onChangeText={(text) => setContraseña(text)}
				value={contraseña}
				secureTextEntry={true}
				placeholder="Contraseña"
				maxLength={200}
			/>
			<Picker
				selectedValue={facultad}
				style={{ height: 50, width: '100%' }}
				onValueChange={(text) => setFacultad(text)}
			>
				<Picker.Item
					label={'Facultad de Ingeniería'}
					value={'Facultad de Ingeniería'}
				/>
			</Picker>
			<Picker
				selectedValue={programa}
				style={{ height: 50, width: '100%' }}
				onValueChange={(text) => setPrograma(text)}
			>
				<Picker.Item label={'Otro'} value={'Otro'} />
				<Picker.Item label={'Bioingeniería'} value={'Bioingeniería'} />
				<Picker.Item
					label={'Ingeniería Electrónica'}
					value={'Ingeniería Electrónica'}
				/>
				<Picker.Item
					label={'Ingeniería en Energías'}
					value={'Ingeniería en Energías'}
				/>
				<Picker.Item
					label={'Ingeniería Comercial'}
					value={'Ingeniería Comercial'}
				/>
				<Picker.Item
					label={'Ingeniería de Sistemas'}
					value={'Ingeniería de Sistemas'}
				/>
				<Picker.Item
					label={'Ingeniería Industrial'}
					value={'Ingeniería Industrial'}
				/>
				<Picker.Item
					label={'Tecnología en Sistemas de Información'}
					value={'Tecnología en Sistemas de Información'}
				/>
				<Picker.Item
					label={'Tecnología en Gestión de Procesos Industriales'}
					value={'Tecnología en Gestión de Procesos Industriales'}
				/>
			</Picker>
			<View style={styles.contenedorBotonRegistro}>
				<TouchableHighlight
					underlayColor="#32CF5E"
					style={styles.buttonRegistro}
					onPress={() => {
						Validacion()
					}}
				>
					<Text style={styles.textbuttonRegistro}>Siguiente</Text>
				</TouchableHighlight>
			</View>
		</View>
	)
}

export default Register
