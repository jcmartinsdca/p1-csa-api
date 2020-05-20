const express = require('express')
const app = express()

app.use(express.json())
app.set('port', process.env.port || 8000)

const basketsRouter = require('./routes/baskets')

app.use('/baskets', basketsRouter)
app.get('/', (req, res) => {
  res.send('welcome to the app')
})

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))