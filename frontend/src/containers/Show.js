import React, {Component} from 'react';
import APICalls from '../services/apicalls.js'

export default class Show extends Component {

	state = {
		show: {}
	}

	server = {
		server: new APICalls()
	}

	componentDidMount(){
		const {id} = this.props.match.params
		const {server} = this.server
		server.get('shows/readone', id)
		.then(data=>this.setState({show: data.data.msg[0]}))
		.catch(console.log)
	}
	
	render(){
		return <>
			<div>
				<img src={this.state.show.img_url} alt='' />
				<div>
					{this.state.show.title}
				</div>
			</div>
		</>
	}
}
