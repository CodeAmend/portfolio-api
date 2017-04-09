const expect = require('chai').expect;
const mongoose = require('mongoose');

const Skill = require('../../src/models/skill_schema');

describe("Skill Model", () => {

  it("should save a skill", (done) => {
    const skill = new Skill({ name: 'Javascript', level: 5 });
    skill.save()
    .then(() => {
      Skill.findOne({ name: 'Javascript' })
      .then((result) => {
        
        // name property
        expect(result).to.have.property('name');
        expect(result.name).to.eql('Javascript');
        // level property
        expect(result).to.have.property('level');
        expect(result.level).to.eql(5);

        done();
      });
    });
  });

});
