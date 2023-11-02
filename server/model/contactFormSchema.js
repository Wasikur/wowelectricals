const mongooose = require('mongoose');

const contactFormSchema = new mongooose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})



// collection creation
const Contactform = mongooose.model('Contactform', contactFormSchema);
module.exports = Contactform;