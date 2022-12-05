const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ "test": ['userOne', 'userTwo', 'userThree'] });
});

app.listen(8000, () => {
  console.log('Server started on port `http://localhost:8000/api`');
});