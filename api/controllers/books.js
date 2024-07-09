module.exports=()=>{
    const booksDB = require('../data/books.json');
    const controller = {};

    controller.listBooks = (req,res)=>{
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        res.status(200).json(booksDB)
    }

    controller.book = (req,res)=>{
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        const {id} = req.params
        const books = booksDB.books.data
        const book = books.find(book => book.id == id)
        res.status(200).json(book)
    }

    controller.insertBook = (req,res)=>{
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        console.log(req.body)
        booksDB.books.data.push(req.body)
        res.send(req.body)
    }

    return controller;
}