'use strict';


const { request } = require('express');
const {userModel} = require('../models/user')
const booksModel=require('../models/book')


const getBooks = (req,res) => {
   
    const { email } = req.query;

 booksModel.findOne({email: email}, (error,books) => {
  if (error) {
      res.send(error);
  } else { 
      res.json(books)
  }

 });
}


const createBook=async(red,res)=>{
    const{
        email,
        title,
        description,
        status
    }= req.body;
    const newBook =new booksModel({
        email,
        title,
        description,
        status

    });
    newBook.save();
    res.json(newBook)
}
const deleteBook=async(req,res) =>{
    booksModel.deleteOne({_id:req.params.book_id},(err,book)=>{
        res.json(book)
    })
}
const updateBook=async(req,res) =>{
    const bookId=req.params.book_id;
    const{
        email,
        title,
        description,
        status
    }=req.body
    
    booksModel.findIdAndUpdate({_id:book_id},{
        email,
        title,
        description,
        status
     },{new:true},(err,data)=>{

         res.json(book)
         
    }
    )
}


module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook

};