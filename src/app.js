const express = require('express');
const { loginUser, addUser } = require('./controllers/UserController');
const { validateFields } = require('./middleware/validateFields');
const { 
  validateDisplayName, 
  validateEmail, 
  validatePass } = require('./middleware/createUserValidate');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateFields, loginUser);
app.post('/user', validateDisplayName, validateEmail, validatePass, addUser);
  
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
