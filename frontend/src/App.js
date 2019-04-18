import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Home from './components/Home';
import Users from './containers/Users.js'
import User from './containers/User.js'
import Post from './containers/Post.js'
import Show from './containers/Show.js'
import Shows from './containers/Shows.js'
import Error404 from './components/Error404.js'
import UserContext, {ActUserContext} from './context/user'

class App extends Component {

	state = {
		user: null,
	}

	updateUser = (user) => {
		this.setState({user: user})
	}

	render() {
    		return <>
			<HashRouter>
				<UserContext.Provider value={this.updateUser}>
				<ActUserContext.Provider value={this.state.user}>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/users' exact component={Users} />
						<Route path='/user/post' exact component={Post} />
						<Route path='/user/:id' exact component={User} />
						<Route path='/show/:id' exact component={Show} />
						<Route path='/shows' exact component={Shows} />
						<Route component={Error404} />
					</Switch>
				</ActUserContext.Provider>
				</UserContext.Provider>
			</HashRouter>
	</>
  }
}

export default App;
