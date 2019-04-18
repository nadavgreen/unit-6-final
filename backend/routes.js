const {movieDB} = require('./services.js')
const db  = new movieDB()

const usersRoutes = {}

usersRoutes.create = (req, res) => {
	movieDB.create('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.read = (req, res) => {
	movieDB.read('users', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.readAll = (req, res) => {
	movieDB.readAll('users')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.update = (req, res) => {
	movieDB.update('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.delete = (req, res) => {
	movieDB.delete('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json('msg':'failed')
	})
}

const genresRoutes = {}


genresRoutes.create = (req, res) => {
	movieDB.create('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.read = (req, res) => {
	movieDB.read('genres', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.readAll = (req, res) => {
	movieDB.readAll('genres')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.update = (req, res) => {
	movieDB.update('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.delete = (req, res) => {
	movieDB.delete('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json('msg':'failed')
	})
}

const showsRoutes = {}

showsRoutes.create = (req, res) => {
	movieDB.create('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.read = (req, res) => {
	movieDB.read('shows', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.readAll = (req, res) => {
	movieDB.readAll('shows')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.update = (req, res) => {
	movieDB.update('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.delete = (req, res) => {
	movieDB.delete('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json('msg':'failed')
	})
}

const commentsRoutes = {}


commentssRoutes.create = (req, res) => {
	movieDB.create('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.read = (req, res) => {
	movieDB.read('comments', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.readAll = (req, res) => {
	movieDB.readAll('comments')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.update = (req, res) => {
	movieDB.update('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.delete = (req, res) => {
	movieDB.delete('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json('msg':'failed')
	})
}

module.exports = {userRoutes, genresRoutes, showsRoutes, commentsRoutes}
