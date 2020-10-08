/*const a={
    "name":"Aman Narola",
    "age":20
}

console.log(a); */

/* var name="Aman";
var age=20;

console.log("Hii %s you are %s years old",name,age); */

class users{
    constructor(){
        this.name="Aman Narola";
        this.age=20;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
}

var user = new users();
console.log(user.getName());
console.log(user.getAge());