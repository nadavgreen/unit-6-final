const dbName = 'movies'
const dbAddr = process.env.DATABASE_URL || `postgres://localhost/${dbName}`

module.exports = dbAddr
