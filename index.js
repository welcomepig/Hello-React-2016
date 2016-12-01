const debug = require('debug')('react2');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  debug('App listening on port 3000');
});

