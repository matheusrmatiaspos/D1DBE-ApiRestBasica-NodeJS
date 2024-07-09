module.exports = app => {
    const controller = require('../controllers/publishers')()

    app.route('/editoras').get(controller.listPublishers)

    app.route('/editora/:id').get(controller.publisher)

    app.route('/editoras').post(controller.insertPublisher)
}