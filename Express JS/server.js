const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('here')
    //res.download('server.js')
    res.render('index', { text: 'passed' })
    //res.status(200).send('ok')
})

const userRouter = require('./routes/users')
// links route to path
app.use('/users', userRouter)

app.listen(3000)

