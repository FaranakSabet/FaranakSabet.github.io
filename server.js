const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

const info = require("./data/info")

const PORT = process.env.PORT || 8000


// register view engine
app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// public dir
app.use(express.static(__dirname + '/public'))


// ROUTES
app.get('/', (req, res) => {
    res.render('index', { info })
})



app.listen(PORT, () => console.log('SERVER RUNNING ON PORT', PORT))
