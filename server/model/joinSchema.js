const mongooose = require('mongoose');

const joinSchema = new mongooose.Schema({
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})



// collection creation
const User1 = mongooose.model('USER1', joinSchema);
module.exports = User1;