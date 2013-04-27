var mongoose = require('mongoose'),
    mongooseTypes = require('mongoose-types'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongooseTypes.loadTypes(mongoose);

var UserSchema = new Schema({
  email: { type: mongoose.SchemaTypes.Email, unique: true },
  name: String,
  mentor: Boolean,
  last_asked: Date,
  created: Date,
  tags: [String]
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');