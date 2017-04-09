const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: String,
  about: String,
  skills: [{
    skill: { type: Schema.Types.ObjectId, ref: 'skill' }
  }]
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
