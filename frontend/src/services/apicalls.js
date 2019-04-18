import axios from 'axios'

export default class APICalls {
	constructor(){
		this.all = axios;
		this.baseUrl = 'http://localhost:3001/'
	}

	post(url, data){
		return this.all({
			baseURL: this.baseUrl,
			url: url,
			method: 'post',
			data: data
		})
	}

	
	get(url, data){
		return this.all({
			baseURL: this.baseUrl,
			url: `${url}/${data}`,
			method: 'get'
		})
	}

	getAll(url){
		return this.all({
			baseURL: this.baseUrl,
			url: url,
			method: 'get'
		})
	}

	put(url, data){
		return this.all({
			baseURL: this.baseUrl,
			url: url,
			method: 'put',
			data: data
		})
	}


	delete(url, data){
		return this.all({
			baseURL: this.baseUrl,
			url: url,
			method: 'delete',
			data: data
		})
	}
}


