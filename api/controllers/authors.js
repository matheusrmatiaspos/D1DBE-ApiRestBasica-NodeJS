module.exports = ()=>{
    const authorsDB = require('../data/authors.json')
    const controller = {}

    controller.listAuthors=(req,res)=>{
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        res.status(200).json(authorsDB)
    }

    controller.author = (req, res)=>{
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        const {id} = req.params
        const authors = authorsDB.authors.data
        const author = authors.find(author => author.id == id)

        res.status(200).json(author)
    }

    controller.insertAuthor = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        console.log(req.body)
        authorsDB.authors.data.push(req.body)
        res.send(req.body)
    }

    return controller
}