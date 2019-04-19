import React, {Component} from 'react';
import {ActUserContext} from '../context/user'
import APICalls from '../services/apicalls.js'

export default class Post extends Component {
	
	state = {
		title: '',
		img_url: '',
		genres: [],
		actgenre: null,
		dropdown: false
	}
	
	actgenre = (e) => {
		const {value} = e.target.attributes[0]
		this.setState({actgenre: this.state.genres[value], dropdown: !this.state.dropdown})
	}

	dropdown = () => {
		this.setState({dropdown: !this.state.dropdown})
	}

	server = {
		server: new APICalls()
	}
	
	static contextType = ActUserContext

	subs = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submit = (e) => {
		e.preventDefault()
		if(this.context && this.state.actgenre && this.state.title.length > 1 && this.state.img_url.length > 1){
			const user_id = this.context.id
			const genre_id = this.state.actgenre.id
			const {title, img_url} = this.state
			const data={user_id: user_id, genre_id:genre_id,title:title,img_url:img_url}
			const {server} = this.server
			server.post('shows/create', data)
			.then(this.setState({actgenre: null}))
			.catch(console.log)
		}
	}

	componentDidMount(){
		const {server} = this.server
		server.getAll('genres/read')
		.then(data=>this.setState({genres: data.data.msg}))
		.catch(console.log)
	}
	
	render(){
		return <>
			<div>
				Add new show to watch ...
			</div>
			<form>
			<div>
				<input style={{width:'150px'}} name='title' placeholder='Title Text Input' onChange={this.subs}/>
			</div>
			<div>
				<input style={{width:'150px'}} name='img_url' placeholder='Image URL Text Input' onChange={this.subs}/>

			</div>
			<div>
				{
				this.state.actgenre ?
				<div>
				<div onClick={this.dropdown} style={{width: '150px', color: 'grey', border:'solid lightgrey 1px'}}>
					{this.state.actgenre.genre_name}
				</div>
				<div>
					{
					!this.state.dropdown ?
					<></>
					:
					this.state.genres.map((e, i)=>{
						return (
							<div onClick={this.actgenre} value={i} key={i}>
								{e.genre_name}
							</div>
						)
					})
					}
				</div>
				</div>
				:
				<>
				<div onClick={this.dropdown} style={{width: '150px', color: 'grey', border:'solid lightgrey 1px'}}>
					Genre Selection Dropdown	
				</div>
				<div>
					{
					!this.state.dropdown ?
					<></>
					:
					this.state.genres.map((e, i)=>{
						return (
							<div onClick={this.actgenre} value={i} key={i}>
								{e.genre_name}
							</div>
						)
					})
					}
				</div>
				</>
				}
			</div>
			<div>
				<button onClick={this.submit} style={{width:'150px'}}>Post new show for user id: {this.context ? this.context.id : ''}</button>
			</div>
			</form>
		</>
	}
}
