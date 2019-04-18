import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import APICalls from '../services/apicalls.js'

export default class Shows extends Component {

	state = {
		shows: [],
		users: []
	}

	server = {
		server: new APICalls()
	}

	componentDidMount(){
		const {server} = this.server
		server.getAll('shows/read')
		.then(data=>{this.setState({shows: data.data.msg})})
		.then(_=>server.getAll('users/read'))
		.then(data=>this.setState({users: data.data.msg}))
		.catch(console.log)
	}
	
	render(){
		console.log(this.state.shows)
		return <>
			<div style={{display: 'flex', flexWrap:'wrap'}}>
				{
				this.state.shows.map((e,i)=>{
					return(
						<div style={{width: '50%'}} key={i}>
							<div>
								{e.title}
							</div>
							<div>
								{
								this.state.users[e.user_id - 1] ?
								<Link to={`/user/${e.user_id}`}>
									{this.state.users[e.user_id - 1].username}
								</Link>
								:
								<></>
								}
							</div>
						</div>
					)
				})
				}
			</div>
		</>
	}
}
