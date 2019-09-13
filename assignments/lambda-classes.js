// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Don\'t forget the homies',
});

const wilma = new Instructor({
    name: 'Wilma',
    age: 37,
    location: 'Bedrock',
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: 'I\'m calm.',
});

const lane = new Student({
    name: 'Lane',
    age: 28,
    location: 'Portland',
    previousBackground: 'Painter',
    className: 'CS101',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

const john = new ProjectManagers({
    name: 'John',
    age: 40,
    location: 'Boston',
    specialty: 'Full-stack',
    favLanguage: 'React',
    catchPhrase: 'Devastating',
    gradClassName: 'WEBPT4',
    favInstructor: 'Fred',
});

console.log(fred.favLanguage); // JavaScript
console.log(wilma.demo('Flexbox')); // Today we are learning about Flexbox.
console.log(fred.grade(lane, 'HTML')); // Lane receives a perfect score on HTML.
lane.listsSubjects(); // HTML CSS JavaScript
console.log(lane.PRAssignment('CSS')); // Lane has submitted a PR for CSS.
console.log(lane.sprintChallenge('JavaScript')); // Lane has begun sprint challenge on JavaScript.
console.log(john.standUp('webpt10')); // John announces to webpt10, @channel standy times!
console.log(john.debugsCode(lane, 'JavaScript')); // John dugs Lane's code on JavaScript.