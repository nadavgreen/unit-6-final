const {usersRoutes, genresRoutes, showsRoutes, commentsRoutes} = require('./routes.js')
const express = require('express')

const routers = {}

routers.users = () => {
	const router = express.Router()
	router.post('/create', usersRoutes.create)
	router.get('/read/:id', usersRoutes.read)
	router.get('/read', usersRoutes.readAll)
	router.put('/update', usersRoutes.update)
	router.delete('/delete', usersRoutes.delete)
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
	router.get('/readgenres/:genre_id', showsRoutes.read)
	router.get('/read/:user_id', showsRoutes.read)
	router.get('/readone/:id', showsRoutes.read)
	router.get('/read', showsRoutes.readAll)
	router.put('/update', showsRoutes.update)
	router.delete('/delete', showsRoutes.delete)
	return router
}

routers.comments = () => {
	const router = express.Router()
	router.post('/create', commentsRoutes.create)
	router.get('/read/:id', commentsRoutes.read)
	router.get('/readshow/:show_id', commentsRoutes.read)
	router.get('/read', commentsRoutes.readAll)
	router.put('/update', commentsRoutes.update)
	router.delete('/delete', commentsRoutes.delete)
	return router
}

module.exports = {routers}
