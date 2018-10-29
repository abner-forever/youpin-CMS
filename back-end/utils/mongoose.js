var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/youpindb', {
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// db.on('error', function(err){
//     console.log(err);
    
// });

db.once('open', function () {
  console.log('连接成功');
});

module.exports = mongoose