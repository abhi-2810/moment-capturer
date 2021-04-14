const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./server/routes/posts');
const userRoutes = require('./server/routes/users')

dotenv.config();
require('./server/config/dbConnect')();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running at port: ${PORT}`)
});
