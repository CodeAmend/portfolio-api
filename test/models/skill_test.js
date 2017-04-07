const expect = require('chai').expect;
const mongoose = require('mongoose');

const Skill = require('../../src/models/skill_schema');

describe("Skill Model", () => {

  it("should save a skill", (done) => {
    const skill = new Skill({ name: 'Javascript', level: 5 });
    skill.save()
    .then((skill) => {
      Skill.findOne({ name: 'Javascript' })
      .then((result) => {
        expect(result._id).to.eql(skill._id);
        done();
      });
    });
  });

});
