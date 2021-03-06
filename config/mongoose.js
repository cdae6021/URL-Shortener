const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect('mongodb://localhost/url-shortener')

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})

module.exports = db