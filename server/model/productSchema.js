const mongooose = require('mongoose');

const productSchema = new mongooose.Schema({
    productid:{
        type: Number,
        required: true
    },
    productname:{
        type: String,
        required: true
    },
    imgnames: [{
        type: String,
        required: true
    }],
    price1:{
        type: Number,
        required: true
    },
    price2:{
        type: Number,
        required: true
    },
    producturl:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
    categoryid: [{
        type: Number,
        required: true
    }],
    description:{
        type: String,
        required: true
    },
    productcode: {
        type: Number,
        required: true
    },
    productfeatures:{
        type: String,
        required: true
    },
    productusp:{
        type: String,
        required: true
    },
    keywords: [{
        type: String,
        required: true
    }],
    date:{
        type: Date,
        default: Date.now
    }
})


// collection creation
module.exports = mongooose.model('Productdb', productSchema);