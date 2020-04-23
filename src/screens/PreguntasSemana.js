import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	ScrollView,
	Alert,
	AsyncStorage,
} from 'react-native'
import styles from '../styles'
import { useHistory } from 'react-router-native'
import Preguntas from '../models/preguntas/Preguntas'
import { LinearGradient } from 'expo-linear-gradient'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler,
} from '../components/androidBackButton'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const PreguntasSemana = ({ match }) => {
	const history = useHistory()
	const preguntas = new Preguntas()
	const semana = match.params.numero
	const [PreguntaActual, setPreguntaActual] = useState(0)
	const [puzzle, setPuzzle] = useState(false)
	const [RespuestaCorrecta, setRespuestaCorrecta] = useState('')
	const [Respuestas, setReaspuestas] = useState([])
	const [PintarPuzzle, setPintarPuzzle] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	])
	const [correo, setCorreo] = useState('')

	useEffect(() => {
		DatosToken()
		handleAndroidBackButton(() => history.push('/Weeks'))
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	useEffect(() => {
		setReaspuestas(
			[
				preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc,
				preguntas.buscarPorSemana(semana)[PreguntaActual].opc1,
				preguntas.buscarPorSemana(semana)[PreguntaActual].opc2,
				preguntas.buscarPorSemana(semana)[PreguntaActual].opc3,
			].sort(() => {
				return Math.random() - 0.5
			})
		)
		setRespuestaCorrecta(
			preguntas.buscarPorSemana(semana)[PreguntaActual].correctOpc
		)
	}, [PreguntaActual])

	const DatosToken = async () => {
		const token = await AsyncStorage.getItem('usertoken')
		if (token !== null) {
			const decoded = jwt_decode(token)
			setCorreo(decoded.cedula)
			GetUserResueltas()
		}
	}

	const GetUserResueltas = async () => {
		await axios
			.get('http://161.35.9.64/usuario/resueltas', {
				email: correo,
			})
			.then((response) => {
				const data = response.data
				console.log(data)
			})
			.catch((err) => {
				console.log(err)
				Alert.alert(
					'Error',
					'Ocurrió un error al enviar la información',
					[
						{
							text: 'Aceptar',
							onPress: () => {},
						},
					],
					{ cancelable: false }
				)
			})
	}

	const PostResuelta = async (id, state) => {
		await axios
			.put('http://161.35.9.64/usuario/resueltas', {
				email: correo,
				resueltas: {
					id: id,
					state: state,
				},
			})
			.then((response) => {
				const data = response.data
				if (data.error) {
					Alert.alert(
						'Error',
						'Ocurrió un error al enviar la información',
						[
							{
								text: 'Aceptar',
								onPress: () => {},
							},
						],
						{ cancelable: false }
					)
				}
			})
	}

	const Respuesta = (props) => {
		return (
			<TouchableHighlight
				style={styles.Respuesta}
				underlayColor="#74FF9B"
				onPress={() => {
					ValidarRespuestaUsuario(props.num)
				}}
			>
				<Text style={styles.bold}>{props.texto}</Text>
			</TouchableHighlight>
		)
	}

	const ValidarRespuestaUsuario = (num) => {
		if (Respuestas[num] === RespuestaCorrecta) {
			const ArrayModificado = PintarPuzzle.map((elemento, index) => {
				if (index === PreguntaActual) {
					return true
				} else {
					return elemento
				}
			})
			setPintarPuzzle(ArrayModificado)
			console.log(PreguntaActual)
			PostResuelta(preguntas.buscarPorSemana(semana)[PreguntaActual].id, true)
			Alert.alert(
				'Correcto!! 😎',
				'Desbloqueaste una nueva ficha del Puzzle.',
				[
					{
						text: 'Siguiente pregunta',
						onPress: () => {
							setPreguntaActual(PreguntaActual + 1)
						},
					},
				],
				{ cancelable: false }
			)
		} else {
			PostResuelta(preguntas.buscarPorSemana(semana)[PreguntaActual].id, false)
			Alert.alert(
				'Fallaste 😪',
				'Más suerte la próxima vez.',
				[
					{
						text: 'Siguiente pregunta',
						onPress: () => setPreguntaActual(PreguntaActual + 1),
					},
				],
				{ cancelable: false }
			)
		}
	}

	return (
		<View style={styles.containerWeeks}>
			{puzzle ? (
				<View style={styles.containerPuzzle}>
					<TouchableHighlight
						onPress={() => {
							setPuzzle(!puzzle)
						}}
						style={styles.puzzleBack}
					>
						<View></View>
					</TouchableHighlight>
					<View style={styles.puzzleImgContainer}>
						<Image
							style={styles.puzzleImg}
							source={require('../img/buho.jpg')}
						/>
						<View style={styles.PiezasContainer}>
							{PintarPuzzle.map((elemento, index) => {
								if (!elemento) {
									return <View key={index} style={styles.pieza}></View>
								} else {
									return <View key={index} style={styles.piezaNull}></View>
								}
							})}
						</View>
					</View>
				</View>
			) : null}
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push(`/Weeks`)
				}}
			>
				<View style={styles.backContainer}>
					<Image style={styles.backImage} source={require('../img/back.png')} />
					<Text style={styles.bold}>Preguntas de la semana {semana}</Text>
				</View>
			</TouchableHighlight>
			<ScrollView horizontal={true} style={styles.contenedorNumerosPreguntas}>
				{preguntas.buscarPorSemana(semana).map((pregunta) => {
					if (
						preguntas.buscarPorSemana(semana).indexOf(pregunta) ===
						PreguntaActual
					) {
						return (
							<TouchableHighlight
								key={pregunta.id}
								style={styles.PreguntaSelected}
								underlayColor="transparent"
								onPress={() => {
									setPreguntaActual(
										preguntas.buscarPorSemana(semana).indexOf(pregunta)
									)
								}}
							>
								<Text style={styles.letrasNumerosPreguntasWhite}>
									{preguntas.buscarPorSemana(semana).indexOf(pregunta) + 1}
								</Text>
							</TouchableHighlight>
						)
					}
					return (
						<TouchableHighlight
							underlayColor="transparent"
							onPress={() => {
								setPreguntaActual(
									preguntas.buscarPorSemana(semana).indexOf(pregunta)
								)
							}}
							key={pregunta.id}
							style={styles.PreguntaNoSelected}
						>
							<Text style={styles.letrasNumerosPreguntas}>
								{preguntas.buscarPorSemana(semana).indexOf(pregunta) + 1}
							</Text>
						</TouchableHighlight>
					)
				})}
			</ScrollView>
			<Text style={styles.flechaNumerosPreguntas}>→</Text>
			<View style={styles.lineaNumerosPreguntas}></View>
			<View style={styles.imgPreguntaContainer}>
				<LinearGradient
					colors={['#b721ff', '#21d4fd']}
					start={[0, 0]}
					end={[0.9, 0.9]}
					style={styles.btnPuzzle}
				>
					<TouchableHighlight
						underlayColor="#8482FF"
						onPress={() => {
							setPuzzle(!puzzle)
						}}
						style={styles.btnPuzzleTouch}
					>
						<Image
							style={styles.NavbarIcon}
							source={require('../img/puzzle.png')}
						/>
					</TouchableHighlight>
				</LinearGradient>
			</View>
			<Text style={styles.eunciadoPregunta}>
				{preguntas.buscarPorSemana(semana)[PreguntaActual].title}
			</Text>
			<Respuesta num={0} texto={Respuestas[0]} />
			<Respuesta num={1} texto={Respuestas[1]} />
			<Respuesta num={2} texto={Respuestas[2]} />
			<Respuesta num={3} texto={Respuestas[3]} />
		</View>
	)
}

export default PreguntasSemana
