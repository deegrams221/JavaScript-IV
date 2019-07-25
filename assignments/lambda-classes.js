// CODE here for your Lambda Classes
// Person
class Person {
    constructor(attrs) {
        this.name = attrs.name,
        this.location = attrs.location,
        this.age = attrs.age,
        this.catchPhrase = attrs.catchPhrase
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`); 
    }
}

// Instructor
class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}.`);
    }
}

// Student
class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

//Project Manager
class ProjectManager extends Instructor {
    constructor(projMaAttrs) {
        super (projMaAttrs);
        this.gradClassName = projMaAttrs.gradClassName;
        this.favInstructor = projMaAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`);
    }
}

// Objects
const eleven = new Instructor ({
    name: 'Eleven',
    location: 'Oregon',
    age: 35,
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't be afraid to break things!`
});

const billy = new Instructor ({
    name: 'Billy',
    location: 'California',
    age: 39,
    specialty: 'Back-end',
    favLanguage: 'Java',
    catchPhrase: `Practice Practice Practice!`
});

const hopper = new Student ({
    name: 'Hopper',
    location: 'Colorado',
    age: 31,
    previousBackground: 'Special Education/Military',
    className: 'Web22',
    favSubjects: ['Html', 'CSS']
});

const dustin = new Student ({
    name: 'Dustin',
    location: 'Georgia',
    age: 25,
    previousBackground: 'Retail',
    className: 'Web22',
    favSubjects: ['Html', 'CSS', 'Javavscript']
});

const will = new Student ({
    name: 'Will',
    location: 'Arizona',
    age: 19,
    previousBackground: 'Student',
    className: 'Web22',
    favSubjects: ['Html', 'CSS']
});

const mike = new Student ({
    name: 'Mike',
    location: 'Idaho',
    age: 33,
    previousBackground: 'Law Enforcement',
    className: 'Web22',
    favSubjects: ['Javascript', 'React']
});

const steve = new ProjectManager ({
    name: 'Steve',
    location: 'Florida',
    age: 31,
    gradClassName: 'CS1',
    favInstructor: 'Eleven'
});

const lucas = new ProjectManager ({
    name: 'Lucas',
    location: 'Washington',
    age: 26,
    gradClassName: 'CS1',
    favInstructor: 'Billy'
});

eleven.speak();
billy.demo('prototypes');
hopper.PRAssignment('arrays');
dustin.sprintChallenge('Advanced CSS');
will.speak();
will.sprintChallenge('HTML');
mike.listsSubjects();
steve.speak();
steve.standUp('channel');
lucas.debugsCode('Mike', 'HTML');