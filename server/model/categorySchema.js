const mongooose = require('mongoose');

const categorySchema = new mongooose.Schema({
    categoryid:{
        type: Number,
        required: true
    },
    categoryname:{
        type: String,
        required: true
    },
    categoryurl:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})


// collection creation
module.exports = mongooose.model('categorydb', categorySchema);