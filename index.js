import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello! Welcome to my Express server 👋')
})

app.listen(8000, () => {
  console.log('App running on port 8000')
})
