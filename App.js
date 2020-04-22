import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Weeks from './src/screens/Weeks'
import InfoApp from './src/screens/InfoApp'
import Ranking from './src/screens/Ranking'
import Register from './src/screens/Register'
import Layout from './src/components/Layout'
import PreguntasSemana from './src/screens/PreguntasSemana'

const App = () => {
	return (
		<NativeRouter>
			<Switch>
				<Route
					exact
					path="/preguntas-semana/:numero"
					component={PreguntasSemana}
				/>
				<Route exact path="/" component={Register} />
				<Layout>
					<Route exact path="/Weeks" component={Weeks} />
					<Route exact path="/info" component={InfoApp} />
					<Route exact path="/ranking" component={Ranking} />
				</Layout>
			</Switch>
		</NativeRouter>
	)
}

export default App
