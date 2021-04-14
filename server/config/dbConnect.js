const mongoose = require('mongoose');

const dbConnect = () => {
  //connect DB
    mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log('Db Connected'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;