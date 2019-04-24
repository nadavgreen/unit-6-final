import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import UserContext, {ActUserContext} from '../context/user'
import APICalls from '../services/apicalls.js'

export default class User extends Component {
	
	state = {
		users: [],
		act: ''
	}

	static contextType = UserContext	

	server = {
		server: new APICalls()
	}
	
	loadUser = (e) => {
		const {value} = e.target.attributes[0]
		const {users} = this.state
		this.context(users[value])
		this.setState({act: {backgroundColor: 'red'}})
	}

	componentDidMount(){
		const {server} = this.server
		server.getAll('users/read')
		.then(data=>this.setState({users: data.data.msg}))
		.catch(console.log)
	}

	render(){
		return <>
			<ActUserContext.Consumer>
			{ user => {
				if(user){
					return <>
						<div>
							Welcome to, {user.username}!
						</div>
						<div>
							Your user id is: {user.id}
						</div>
					</>
				}
				else {
					return <>
					</>
				}
			}}
			</ActUserContext.Consumer>
			<div>
				Master List of All Users:
			</div>
			{
			this.state.users.map((e, i)=>{
				return (
					<div value={i} key={i}>
					<Link to={`/user/${e.id}`}>{e.username}</Link>
					{' '}
					<button onClick={this.loadUser} value={i}/>
					</div>
				)
			})
			}
		</>
	}
}
