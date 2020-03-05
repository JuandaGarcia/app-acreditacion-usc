import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Weeks from './src/screens/Weeks'
import ScanQR from './src/screens/ScanQR'
import Ranking from './src/screens/Ranking'
import Layout from './src/components/Layout'

const App = () => {
	return (
		<NativeRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Weeks} />
					<Route exact path="/scan-qr" component={ScanQR} />
					<Route exact path="/ranking" component={Ranking} />
				</Switch>
			</Layout>
		</NativeRouter>
	)
}

export default App
