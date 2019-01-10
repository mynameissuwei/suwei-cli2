const express = require('express')
const app = express()
const path = require('path')
const file = require('../dist/server.entry.js').default
const reactDOMServer = require('react-dom/server')
const port = 1234
const fs = require('fs')

const template = fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8')

app.use('/public',express.static(path.join(__dirname,'../dist')))

app.use('*',(req,res) => {
  const fileString = reactDOMServer.renderToString(file)
  res.send(template.replace('<!--app-->',fileString))
})
 
app.listen(port,() => {  
  console.log('it works')
})