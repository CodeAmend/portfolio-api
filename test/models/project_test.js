const expect = require('chai').expect;
const mongoose = require('mongoose');

const Skill = require('../../src/models/skill_schema');
const Project = require('../../src/models/project_schema');

describe("Project Model", () => {

  let skills = [];

  beforeEach((done) => {
    const skill1 = new Skill({ name: "Javascript" });
    const skill2 = new Skill({ name: "Node.js" });
    const skill3 = new Skill({ name: "React / Redux" });
    Promise.all([skill1.save(), skill2.save(), skill3.save()])
    .then((results) => {
      results.map((skill) => {
        skills.push(skill);
      });
    })
    .then(() => done());
  });

  describe("has properties", () => {

    let project;

    beforeEach((done) => {
      project = new Project({
        name: "Portfolio Website",
        skills: [
          // Javascript
          { skill: skills[0], weight: 6 },
          // Node.js
          { skill: skills[1], weight: 4 },
          // React / Redux
          { skill: skills[2], weight: 5 }
        ]
      });
      project.save()
      .then((saved_project) => {
        project = saved_project;
        done();
      });
    });

    it("name", () => {
      expect(project).to.have.property('name');
      expect(project.name).to.eql('Portfolio Website');
    });

  });

});
