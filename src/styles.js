import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	containerNavbar: {
		width: Dimensions.get('window').width,
		height: 70,
		backgroundColor: '#F9F9F9',
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		zIndex: 4000,
	},
	circleNavbar: {
		width: 65,
		height: 65,
		borderRadius: 50,
		backgroundColor: '#8482FF',
		position: 'relative',
		top: -25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	circleNavbarTouch: {
		width: 65,
		height: 65,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnPuzzle: {
		width: 180,
		height: 65,
		borderRadius: 50,
		backgroundColor: '#8482FF',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10,
	},
	btnPuzzleTouch: {
		width: 180,
		height: 65,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnNavbar: {
		width: 130,
		height: '100%',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	NavbarIcon: {
		width: 25,
		height: 25,
	},
	NavbarIconGray: {
		width: 25,
		height: 25,
		opacity: 0.5,
	},
	containerWeeks: {
		padding: 50,
		zIndex: 1,
	},
	semana: {
		height: 100,
		borderRadius: 5,
		marginVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 25,
		position: 'relative',
	},
	HeaderRanking: {
		height: 125,
		borderRadius: 5,
		marginVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 25,
		position: 'relative',
	},
	tituloSemana: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	preguntasPorSemana: {
		color: 'white',
	},
	imgSemana: {
		height: 120,
		position: 'absolute',
		bottom: 0,
		right: 15,
	},
	titleWeeks: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '700',
		color: '#262626',
		marginBottom: 15,
	},
	tituloRankingSemana: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white',
	},
	imgHeaderRanking: {
		height: 120,
		bottom: 0,
		right: 15,
		marginTop: 15,
	},
	diasHeader: {
		color: 'white',
	},
	nombre_puntos: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemRanking: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#E6E6E6',
		height: 45,
		marginVertical: 10,
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	itemRankingPrimero: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#74FF9B',
		height: 45,
		marginVertical: 10,
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	itemRankingSegundo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FDFF84',
		height: 45,
		marginVertical: 10,
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	itemRankingTercero: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FFB890',
		height: 45,
		marginVertical: 10,
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	bold: {
		fontWeight: 'bold',
	},
	backImage: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	backContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	contenedorNumerosPreguntas: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 35,
	},
	letrasNumerosPreguntas: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	letrasNumerosPreguntasWhite: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
	PreguntaSelected: {
		marginRight: 35,
		backgroundColor: '#F4B2FF',
		height: 40,
		width: 40,
		borderRadius: 25,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	PreguntaNoSelected: {
		marginRight: 35,
		height: 40,
		width: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	lineaNumerosPreguntas: {
		opacity: 0.2,
		marginTop: 20,
		height: 1,
		backgroundColor: '#262626',
		position: 'absolute',
		top: 140,
		right: 0,
		left: 0,
	},
	flechaNumerosPreguntas: {
		opacity: 0.1,
		position: 'absolute',
		top: 95,
		right: 15,
		fontSize: 30,
		fontWeight: 'bold',
	},
	imgPregunta: {
		width: 100,
		height: 100,
		marginTop: 40,
	},
	imgPreguntaContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	eunciadoPregunta: {
		fontSize: 20,
		marginTop: 10,
		fontWeight: 'bold',
		marginBottom: 15,
	},
	Respuesta: {
		backgroundColor: '#E7E7E7',
		minHeight: 60,
		marginVertical: 5,
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	flex: {
		display: 'flex',
	},
	containerPuzzle: {
		position: 'absolute',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 21000,
	},
	puzzleBack: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundColor: 'black',
		opacity: 0.5,
	},
	puzzleImgContainer: {
		width: '60%',
		height: '60%',
	},
	puzzleImg: {
		width: '99%',
		height: '100%',
	},
	PiezasContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	pieza: {
		width: '33%',
		height: '20%',
		backgroundColor: '#8482FF',
		borderWidth: 1,
		borderColor: 'white',
	},
	piezaNull: {
		width: '33%',
		height: '20%',
	},
})

export default styles
