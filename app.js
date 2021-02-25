// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', './layouts/full-width')
 

app.get('', (req, res) => {
  res.render('index',)
})

app.get('/about', (req, res) => {
  res.render('about',)
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/tyo', (req, res) => {
  res.render('tyo')
})

app.get('/koulutus', (req, res) => {
  res.render('koulutus')
})



 
app.listen(port, () => console.log('kuntelee portia 3000'))