complete this code
class Person {
    constructor(name, age){
        _name = name;
        _age = age;
    }

    get name(){
        return _name;
    }
   
    set age(age){
        _age = age;
    }
    
    get age(){
        return _age;
    }
}

class Student extends Person {
    study(){
        console.log(`${name()} is studying`);
    }
}

class Teacher extends Person {
    teach(){
        console.log(`${name()} is teaching`);
    }
}

let s1 = new Student("Ayush", 21);
s1.study();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;