let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    city: {type: String},
    zipcode: {type: String},
    birthday: {type: Date},
    email: {type: String, required: true, unique: true},
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    picture: {type: String},
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

userSchema.plugin(mongooseUniqueValidator);

userSchema.methods.toProfileJSON = (user) => {
    return {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture
    };
}

module.exports = mongoose.model('User', userSchema);