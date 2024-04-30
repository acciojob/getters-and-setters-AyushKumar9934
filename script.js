complete this code
class Person {
	_name,_age;
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
		get name(){
			return this._name;
		}
	   
		set age(age){
			this._age=age;
		}
	
	
}

class Student extends Person {
	study(){
		console.log(`${this._name } is studying`)
	}
}

class Teacher extends Person {
	teach(){console.log(`${this._name} is teaching`)}
		
	
}
student s1("Ayush",21);
console.log(s1.study());
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher




