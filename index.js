const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AminSuaad:Amin01684750221@cluster0.wub2s.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteerNetwork").collection("register");
  app.post('/addbooking', (req, res) => {
      const newRegister = req.body;
      collection.insertOne(newRegister)
      .then(result => {
          res.send(result.insertedCount > 0)
      })

  })
  /*app.get('/registers', (req, res) => {
      collection.find({})
      .toArray((err, documents) => {
          res.send(documents)
      })
  })*/
  
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})