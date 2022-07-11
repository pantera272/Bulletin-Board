const mongoose = require('mongoose');

const connectToDB = () => {
  
  mongoose.connect('mongodb://localhost:27017/bulletin', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.once('open', () => {
    console.log('DB connected')
  });

  db.on('error', (err) => console.log('Error: ', err));
}

module.exports = connectToDB;



