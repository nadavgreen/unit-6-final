import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import APICalls from '../services/apicalls.js'

export default class User extends Component {

	state = {
		user: {},
		shows: [],
		genres: []
	}

	server = {
		server: new APICalls()
	}
	
	componentDidMount(){
		const {id} = this.props.match.params
		const {server} = this.server
		server.getAll('genres/read')
		.then(data=>this.setState({genres: data.data.msg}))
		.then(_=>server.get('users/read', id))
		.then(data=>this.setState({user: data.data.msg}))
		.then(_=>server.get('shows/read', id))
		.then(data=>this.setState({shows: data.data.msg}))
		.then(console.log)
		.catch(console.log)
	}	

	render() {
		console.log(this.state.shows)
		return <>
			<div style={{display: 'flex', flexWrap: 'wrap'}}>
			{
			this.state.shows.map((e, i)=>{
				return (
					<div style={{width: '50%'}} key={i}>
						<div>
							{e.title}
						</div>
						<div>
							{
							this.state.genres[e.genre_id - 1] ?
							this.state.genres[e.genre_id - 1].genre_name
							:
							<></>
							}
						</div>
						<Link to={`/show/${e.id}`}>
							<img src={e.img_url} alt='' />
						</Link>
					</div>
				)
			})
			}
			</div>
		</>
	}
}
