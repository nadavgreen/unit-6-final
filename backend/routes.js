const {tvDB} = require('./services.js')
const db  = new tvDB()

const usersRoutes = {}

usersRoutes.create = (req, res) => {
	db.create('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.read = (req, res) => {
	db.read('users', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.readAll = (req, res) => {
	db.readAll('users')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.update = (req, res) => {
	db.update('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

usersRoutes.delete = (req, res) => {
	db.delete('users', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

const genresRoutes = {}


genresRoutes.create = (req, res) => {
	db.create('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.read = (req, res) => {
	db.read('genres', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.readAll = (req, res) => {
	db.readAll('genres')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.update = (req, res) => {
	db.update('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

genresRoutes.delete = (req, res) => {
	db.delete('genres', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

const showsRoutes = {}

showsRoutes.create = (req, res) => {
	db.create('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.read = (req, res) => {
	db.read('shows', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.readAll = (req, res) => {
	db.readAll('shows')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.update = (req, res) => {
	db.update('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

showsRoutes.delete = (req, res) => {
	db.delete('shows', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

const commentsRoutes = {}


commentsRoutes.create = (req, res) => {
	db.create('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.read = (req, res) => {
	db.read('comments', req.params)
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.readAll = (req, res) => {
	db.readAll('comments')
	.then(data => res.json({'msg':data}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.update = (req, res) => {
	db.update('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

commentsRoutes.delete = (req, res) => {
	db.delete('comments', req.body)
	.then(res.json({'msg':'passed'}))
	.catch(err => {
		console.log(err)
		res.json({'msg':'failed'})
	})
}

module.exports = {usersRoutes, genresRoutes, showsRoutes, commentsRoutes}
