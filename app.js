const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.set('view engine', 'handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(routes)












app.listen(port, () => {
    console.log(`success , http:/localhost:${port}`)
})