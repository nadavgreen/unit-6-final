const {userRoutes, genresRoutes, showsRoutes, commentsRoutes} = require('./routes.js')
const express = require('express')

const routers = {}

routers.users = () => {
	const router = express.Router()
	router.post('/create', userRoutes.create)
	router.get('/read/:id', userRoutes.read)
	router.get('/read', userRoutes.readAll)
	router.put('/update', userRoutes.update)
	router.delete('/delete', userRoutes.delete)
	return router
}

routers.genres = () => {
	const router = express.Router()
	router.post('/create', genresRoutes.create)
	router.get('/read/:id', genresRoutes.read)
	router.get('/read', genresRoutes.readAll)
	router.put('/update', genresRoutes.update)
	router.delete('/delete', genresRoutes.delete)
	return router
}

routers.shows = () => {
	const router = express.Router()
	router.post('/create', showsRoutes.create)
	router.get('/read/:id', showsRoutes.read)
	router.get('/read', showsRoutes.readAll)
	router.put('/update', showsRoutes.update)
	router.delete('/delete', showsRoutes.delete)
	return router
}

routers.comments = () => {
	const router = express.Router()
	router.post('/create', commentsRoutes.create)
	router.get('/read/:id', commentsRoutes.read)
	router.get('/read', commentsRoutes.readAll)
	router.put('/update', commentsRoutes.update)
	router.delete('/delete', commentsRoutes.delete)
	return router
}

module.exports = {routers}
