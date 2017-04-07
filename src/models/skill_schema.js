const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: String,
  level: Number
});

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;
