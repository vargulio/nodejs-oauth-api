const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(authRoutes);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});