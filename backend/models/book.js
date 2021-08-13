'use strict'

const mongoose =require('mongoose');


const bookSchema=new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String},
    email: {type: String},
})

const booksModel = mongoose.model('books','bookSchema')

const seedBooksCollection=()=>{
    const book1=new booksModel({
        title:"book 1",
        description:" book111",
        status:"ok",
        email:"om@gmail.com"
    });
    const book2=new booksModel({
        title:"book 2",
        description:" book2222",
        status:"ok",
        email:"om@gmail.com"
    });
    const book3=new booksModel({
        title:"book 3",
        description:" book333",
        status:"ok",
        email:"om@gmail.com"
    });

    book1.save();
    book2.save();
    book3.save();

}
module.exports= {booksModel,
seedBooksCollection};