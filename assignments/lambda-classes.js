class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject, studGrade) {
    let rand = Math.floor(Math.random(0, 100));
    console.log(rand)
    console.log(`${student.name} receives a ${student._grade} on ${subject}.`);
  }
}

class PM extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

class Student extends Instructor {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this._grade = attr.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(e => console.log(e));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  age: 32,
  location: "Tampa, Fl",
  gender: "Non Bianary",
  specialty: "Redux",
  favLanguage: "JavaScript",
  catchPhrase: "I like eggs!"
});

const enoka = new PM({
  name: "Enoka",
  age: 25,
  location: "California",
  gender: "Male",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "You got it!",
  gradClassName: "Web17",
  favInstructor: "Josh Knell"
});

const triston = new Student({
  name: "Triston",
  age: 23,
  location: "Tennessee",
  gender: "Male",
  specialty: "JavaScript",
  favLanguage: "JavaScript",
  catchPhrase: "You people are too sensitive!",
  gradClassName: "Web19",
  favInstructor: "Enoka Jaona",
  previousBackground: "Construction & Law Enforcement",
  className: "Web19: Roxanne",
  favSubjects: ["HTML", "CSS", "Javascript", "C#"],
  defGrade: 100
});

console.log(fred);
console.log(enoka);
console.log(triston);
console.log("----------------");
console.log("------------");
console.log("-------- Instructor");
fred.speak();
fred.demo(triston.favSubjects[2]);
fred.grade(triston, triston.favSubjects[2]);

console.log("----------------");
console.log("------------");
console.log("-------- PM");
enoka.speak();
enoka.standUp("Squad_Enoka");
enoka.debugsCode(triston, triston.favSubjects[2]);

console.log("----------------");
console.log("------------");
console.log("-------- Student");
triston.speak();
triston.listsSubjects();
triston.PRAssignment(triston.favSubjects[2]);
triston.sprintChallenge(triston.favSubjects[2]);
