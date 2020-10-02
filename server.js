// Dependencies
// ===========================================================
const express = require('express');
const app = express();
const PORT = 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
 // Listener
// ===========================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });