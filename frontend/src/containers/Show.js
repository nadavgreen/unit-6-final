import React, {Component} from 'react';
import APICalls from '../services/apicalls.js'
import {ActUserContext} from '../context/user.js'

export default class Show extends Component {

	state = {
		show: {},
		comments: [],
		users: [],
		comment: ''
	}

	static contextType  = ActUserContext
	
	comment = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	commentButton = (e) => {
		e.preventDefault()
		const {id} = this.state.show
		const {comment} = this.state
		let user_id = null
		if(this.context) user_id = this.context.id
		const {server} = this.server
		const data = {
			comment_body: comment,
			user_id: user_id,
			show_id: id
		}
		if(user_id) {
			server.post('comments/create', data)
			.then(_=>server.get('comments/readshow', id))
			.then(data=>this.setState({comments: data.data.msg}))
			.catch(console.log)
		}
	}	

	server = {
		server: new APICalls()
	}

	componentDidMount(){
		const {id} = this.props.match.params
		const {server} = this.server
		server.get('shows/readone', id)
		.then(data=>this.setState({show: data.data.msg[0]}))
		.then(_=>server.get('comments/readshow', id))
		.then(data=>this.setState({comments: data.data.msg}))
		.then(_=>server.getAll('users/read'))
		.then(data=>this.setState({users: data.data.msg}))
		.catch(console.log)
	}
	
	render(){
		return <>
			<div>
				<img src={this.state.show.img_url} alt='' />
				<div>
					{this.state.show.title}
				</div>
				<div>
					Being watched by {
					this.state.users.length > 0 ?
					 this.state.users[this.state.show.user_id-1].username
					:
					<></>
					}
				</div>
				<div>
					<input type='text' onChange={this.comment} name='comment'/>
					<button onClick={this.commentButton}/>
				</div>
				<div>
					{
					this.state.comments.length > 0 ?
					this.state.comments.length
					:
					<></>
					} Comments:
				</div>
				{
					this.state.users.length > 0 ?
					this.state.comments.map((e, i)=>{
						return (
							<div key={i}>
								{this.state.users[e.user_id-1].username}: {e.comment_body}
							</div>
						)
					})
					:
					<></>
				}
			</div>
		</>
	}
}
