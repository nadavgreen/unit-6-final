class tvDB {
	constructor(){
		this.conn = require('./db.js');
		this.addi = require('./config.js')
	}

	create(table, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `${e}, ` 
			return str += `${e})` 
		}, `INSERT INTO ${table} (`)
		const sql2 = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `$[${e}], `
			return str += `$[${e}])`
		}, ' VALUES (')
		return this.conn(this.addi).none(sql+sql2, data)
	}

	read(table, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			return str += `${e} = $[${e}];`
		}, `SELECT * FROM ${table} WHERE `)
		return this.conn(this.addi).any(sql, data)
	}

	readAll(table) {
		const sql = `SELECT * FROM ${table}`
		return this.conn(this.addi).any(sql)
	}

	update(table, data, term) {
		const keys = Object.keys(data)
		let sql = keys.reduce((str, e, i) => {
			if(i !== keys.length - 1) return str += `${e} = $[${e}], `
			return str += `${e} = $[${e}] `
		}, `UPDATE ${table} SET `)
		sql += `WHERE ${term} = $[${term}]`
		console.log(sql)
		return this.conn(this.addi).none(sql, data)
	}

	delete(table, data) {
		const keys = Object.keys(data)
		const sql = keys.reduce((str, e, i) => {
			return str += `${e} = $[${e}]`
		}, `DELETE FROM ${table} WHERE `)
		return this.conn(this.addi).none(sql, data)
	}
}

module.exports = {tvDB}
