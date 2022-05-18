//1 способ
let student = new Object();
//2 способ
let student_1 = {
    name: "Eugeny",
    age: 19,
    //методы
    getName:function(){
        return this.name;
    },
    getAge:function(){
         return this.age;
    },
}
console.log(student_1.getAge())
console.log(student_1.getName())

//конструктор
Student = function(name, age, country, dep){
    this.name = name;
    this.age = age;
    this.country = country;
    this.dep = dep;
}

Student.prototype.getInst=function(){ //выполняется при создании инстанса
    console.log("Меня зовут " + this.name + ". Мне " + this.age + " лет.");
}
Student.prototype.sp = "ИФСТ";
var me = new Student("Eugeny", 19, "Russia", "ПИТ")
var not_me = new Student("Sveta", 15, "Russia", "ПИТ")
me.getInst();
console.log(me.sp);