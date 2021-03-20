const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', (req, res) => {
    res.render('index')
})

app.listen(3000)