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
  grade(student, subject) {
    let rand = Math.ceil(Math.random() * 100);
    if(student._grade == 100){
        console.log(`${student.name} receives a ${student._grade - rand} on ${subject}.`);
        student._grade -= rand;
    }else{
        rand = Math.ceil(Math.random() * 20);
        console.log(`${this.name} has regraded ${student.name}'s project to ${student._grade + rand}.`);
        student._grade += rand;
    }
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

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this._grade = attr._grade;
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
  graduate(instructor){
    while(this._grade < 70){
        instructor.grade(this)
    }
    console.log(`He graduates, with a grade of ${this._grade}!`)
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
  previousBackground: "Construction & Law Enforcement",
  className: "Web19: Roxanne",
  favSubjects: ["HTML", "CSS", "Javascript", "C#"],
  _grade: 100
});

console.log(fred);
console.log(enoka);
console.log(triston);
console.log("----------------");
console.log("----- Instructor");
console.log("----------------");

fred.speak();
fred.demo(triston.favSubjects[2]);

console.log("----------------");
console.log("------------- PM");
console.log("----------------");

enoka.speak();
enoka.standUp("Squad_Enoka");

console.log("----------------");
console.log("-------- Student");
console.log("----------------");

triston.speak();
triston.listsSubjects();
triston.PRAssignment(triston.favSubjects[2]);
triston.sprintChallenge(triston.favSubjects[2]);
enoka.debugsCode(triston, triston.favSubjects[2]);
fred.grade(triston, triston.favSubjects[2]);
triston.graduate(fred)
