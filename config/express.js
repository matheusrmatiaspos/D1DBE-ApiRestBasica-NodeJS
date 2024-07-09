const express    = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || 8080)

  app.use(bodyParser.json())

  app

  require('../api/routes/root')(app)
  require('../api/routes/books')(app)
  require('../api/routes/authors')(app)
  require('../api/routes/categories')(app)
  require('../api/routes/publishers')(app)
  require('../api/routes/users')(app)

  return app
};