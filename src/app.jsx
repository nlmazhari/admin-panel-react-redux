import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Login from './container/Login'
import Home from './container/Home'
import Dashboard from './container/Dashboard'
import Users from './container/Users'
import Rooms from './container/Rooms'
import SingleRoom from './container/Rooms/SingleRoom'
import Playlists from './container/Playlists'
import SinglePlaylist from './container/Playlists/SinglePlaylist'
import NotMatch from './container/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" render={() => (
					<Home>
						<Route exact path="/home/dashboard" component={Dashboard} />
						<Route exact path="/home/users" component={Users} />
						<Route exact path="/home/rooms" component={Rooms} />
						<Route exact path="/home/room/:id" component={SingleRoom} />
						<Route exact path="/home/playlists" component={Playlists} />
						<Route exact path="/home/playlist/:id" component={SinglePlaylist} />
					</Home>
				)} />
				<Route path="*" component={NotMatch}/>
			</Switch>
		</Router>
	)
}

export default App
