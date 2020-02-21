const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkGenerator = require('./talk_generator.js')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const character = req.body.inlineRadioOptions
  const talk = talkGenerator(character)
  console.log(talkGenerator(character))
  res.render('index', { talk: talk })
})

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})