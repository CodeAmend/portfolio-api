const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: String,
  about: String
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
