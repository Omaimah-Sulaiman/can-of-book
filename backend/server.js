const express = require('express') // require the express package
const app = express();
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa'); // we are going to use this package to connect to Auth0
const JWKSURI = process.env.JWKSURI;

  // initialize your express app instance

const mongoose=require('mongoose')

require('dotenv').config()

const { 
    getBooks , 
    createBook,
     updateBook,
    deleteBook} = require('./controller/book.controller')

const PORT = process.env.PORT

const MONGO_DB_BOOK= process.env.MONGO_DB_BOOK

const cors =require('cors');
app.use(cors())

const client = jwksClient({
    // we will send a request to Auth0 to connect to it
    jwksUri: JWKSURI
  });

app.use(express.json());


mongoose.connect(MONGO_DB_BOOK,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const {seedBooksCollection}=require('./models/book')

seedBooksCollection();
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

app.get('/verify-token', (request, response) => {
    // The token will be passed from the frontend to the backend using the request
    // The request will be passing the token the request headers
    const token = request.headers.authorization.split(' ')[1];
    console.log(token);
    // Once we got the token, we wil want to verify the token with JWT
    jwt.verify(token, getKey, {}, (error, user) => {
      if (error) {
        response.send('invalid token');
      }
      response.json(user);
    });
    // response.send("got your token 🍕");
  });
  

app.get('/books',getBooks)

app.post('/book',createBook)

app.put('/book/:book_id',updateBook )

app.delete('/book/:book_id',deleteBook )
//  app.listen(PORT,() =>{
//      console.log(`Server stand on ${PORT}`);
//  } )