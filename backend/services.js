class movieDB {
	constructor(){
		this.conn = require('./db.js');
		this.addi = require('./config.js')
	}

	create(db, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `${e}, ` 
			return str += `${e})` 
		}, `INSERT INTO ${db} (`)
		const sql2 = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `$[${e}], `
			return str += `$[${e}])`
		}, ' VALUES (')
		return this.conn(this.addi).none(sql+sql2, data)
	}

	read(db, data) {
		console.log(this.addi)
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			return str += `${e} = $[${e}];`
		}, `SELECT * FROM ${db} WHERE `)
		return this.conn(this.addi).one(sql, data)
	}

	update(db, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `${e} = $[${e}]`
			return str += `${e} = $[${e}], `
		}, `UPDATE ${db} SET `)
		return this.conn(this.addi).none(sql, data)
	}

	delete(db, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			return str += `${e} = $[${e}]`
		}, `DELETE FROM ${db} WHERE `)
		return this.conn(this.addi).none(sql, data)
	}
}

module.exports = {movieDB}