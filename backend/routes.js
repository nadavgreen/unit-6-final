const {movieDB} = require('./services.js')
const db  = new movieDB()

const usersRoutes = {}

userRoutes.create = (req, res) => {
	movieDB.create('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

userRoutes.read = (req, res) => {
	movieDB.read('users', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

userRoutes.readAll = (req, res) => {
	movieDB.readAll('users')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

userRoutes.update = (req, res) => {
	movieDB.update('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

userRoutes.delete = (req, res) => {
	movieDB.delete('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json('msg':'failed')
	})
}

const genresRoutes = {}
const showsRoutes = {}
const commentsRoutes = {}

module.exports = {userRoutes, genresRoutes, showsRoutes, commentsRoutes}
