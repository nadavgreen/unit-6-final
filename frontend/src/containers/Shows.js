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
		.then(data =>{
			const {msg} =  data.data
			const temp  = []
			let hold = {}
			msg.forEach((e,i) => {
				if(i === 0) {hold.title = e.title; hold.users = []; hold.users.push(e.user_id);}
				else if(i === msg.length - 1) {hold.users.push(e.user_id); temp.push(hold)}
				else if(hold.title === e.title) hold.users.push(e.user_id)
				else 
					{
					temp.push(hold); 
					hold={}; 
					hold.title = e.title; 
					hold.users = []; 
					hold.users.push(e.user_id);}
			})
			if(msg[msg.length - 1].title !== msg[msg.length - 2].title) 
				{hold={}; 
				hold.title =  msg[msg.length-1].title; 
				hold.users = []; 
				hold.users.push(msg[msg.length-1].user_id); 
				temp.push(hold)
			}
			this.setState({shows: temp})
		})
		.then(_=>server.getAll('users/read'))
		.then(data=>this.setState({users: data.data.msg}))
		.catch(console.log)
	}
	
	render(){
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
								Who's watching? {
								e.users.length > 0 ?
								e.users.map((e, i)=>{
									return(
										<span key={i}>
										<Link to={`/user/${i+1}`}>
											{this.state.users.length > 0 ?
											this.state.users[e-1].username+" "
											:
											<></>
											}
										</Link>
										</span>
									)
								})
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
