module.exports = () => {
    const publishersDB = require('../data/publishers.json')
    const controller = {}

    controller.listPublishers = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        res.status(200).json(publishersDB)
    }

    controller.publisher = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        const {id} = req.params
        const publishers = publishersDB.publishers.data
        const publisher = publishers.find(publisher => publisher.id == id)

        res.status(200).json(publisher)
    }

    controller.insertPublisher = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        console.log(req.body)
        publishersDB.publishers.data.push(req.body)
        res.status(200).json(req.body)
    }

    return controller
}