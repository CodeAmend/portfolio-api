const expect = require('chai').expect;
const mongoose = require('mongoose');

const Skill = require('../../src/models/skill_schema');
const Education = require('../../src/models/education_schema');

describe("Education Model", () => {

  let skills = [];

  beforeEach((done) => {
    const skill1 = new Skill({ name: "Javascript", level: 9 });
    const skill2 = new Skill({ name: "Node.js", level: 8 });
    const skill3 = new Skill({ name: "React / Redux", level: 7 });
    Promise.all([skill1.save(), skill2.save(), skill3.save()])
    .then((results) => {
      results.map((skill) => {
        skills.push(skill);
      });
    })
    .then(() => done());
  });

  describe("has properties", () => {

    let education;

    beforeEach((done) => {
      education = new Education({
        name: "Javascript: The Weird Parts",
        about: "The best education ever.",
        skills: [
          // Javascript
          { skill: skills[0], weight: 10 },
        ]
      });
      education.save()
      .then((saved_education) => {
        education = saved_education;
        done();
      });
    });

    it("name", () => {
      expect(education).to.have.property('name');
      expect(education.name).to.eql('Javascript: The Weird Parts');
    });

    it("about", () => {
      expect(education).to.have.property('about');
      expect(education.about).to.eql('The best education ever.');
    });

    // it("skills", () => {
    //   expect(education).to.have.property('skills');
    //   expect(education.skills).to.have.length(3);
    // });
    //
    // describe("skills sub document", () => {
    //
    //   it("skill.name", () => {
    //     const skill = education.skills[0].skill;
    //     expect(skill).to.have.property('name');
    //     expect(skill.name).to.eql('Javascript');
    //   });
    //
    //   it("skill.level", () => {
    //     const skill = education.skills[0].skill;
    //     expect(skill).to.have.property('level');
    //
    //     expect(skill.level).to.eql(9);
    //   });
    //
    //   it("weight", () => {
    //     expect(education.skills[0]).to.have.property('weight');
    //     expect(education.skills[0].weight).to.eql(3);
    //   });
    //
    // });


  });

});
