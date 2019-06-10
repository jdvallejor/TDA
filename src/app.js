const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
require('./helpers')

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

app.use(bodyParser.urlencoded({extended: false}))
const publicFolder = path.join(__dirname, '../public')
const partialsFolder = path.join(__dirname, '../partials')
app.use(express.static(publicFolder))
hbs.registerPartials(partialsFolder)

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})