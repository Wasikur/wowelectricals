const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));

// use if DeprecationWarning -
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: false
// }).then(() => {
//     console.log('connection successfull');
// }).catch((err) => console.log('no connection'));