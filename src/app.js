const express = require('express');
const { loginUser, addUser, getUsers, getById } = require('./controllers/UserController');
const { validateFields } = require('./middleware/validateFields');
const { 
  validateDisplayName, 
  validateEmail, 
  validatePass } = require('./middleware/createUserValidate');
  const { validateToken } = require('./middleware/validToken');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateFields, loginUser);
app.get('/user', validateToken, getUsers);
app.post('/user', validateDisplayName, validateEmail, validatePass, addUser);
app.get('/user/:id', validateToken, getById);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
