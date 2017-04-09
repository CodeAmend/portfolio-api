const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = Schema({
  name: String,
  about: String,
  skills: [{
    skill: { type: Schema.Types.ObjectId, ref: 'skill' },
    weight: Number
  }]
});

const Education = mongoose.model('education', EducationSchema);

module.exports = Education;
