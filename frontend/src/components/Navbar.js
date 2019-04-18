import React from 'react';
import {Link} from 'react-router-dom'
import Genres from './Genres.js'

export default () => {
	return <>
		{'TV Show Watchlist '} 
		<Link to='/'>Home</Link>
		 {' - '} 
		<Link to='/users'>Users</Link>
		 {' - '} 
		<Link to='/shows'>TV Shows</Link>
		 {' - '} 
		<Genres />
	</>
}
