module.exports = app => {
    const controller = require('../controllers/books')()

    app.route('/livros').get(controller.listBooks)

    app.route('/livro/:id').get(controller.book)

    app.route('/livros').post(controller.insertBook)
}