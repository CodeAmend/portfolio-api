const expect = require('chai').expect;
const mongoose = require('mongoose');

const Skill = require('../../src/models/skill_schema');

describe("Skill Model", () => {

  let skill;

  beforeEach((done) => {
    skill = new Skill({ name: "Javascript", level: 9 })
    skill.save()
    .then((saved_skill) => {
      skill = saved_skill;
      done();
    });
  });

  describe("has properties", () => {

    it("name", () => {
      expect(skill).to.have.property('name');
      expect(skill.name).to.eql('Javascript');
    });

    it("level", () => {
      expect(skill).to.have.property('level');
      expect(skill.level).to.eql(9);
    });
  })

});
