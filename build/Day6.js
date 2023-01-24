"use strict";
//public,private,protected,readonly
//program1
class Person {
    constructor(nm) {
        this.name = nm;
    }
}
let anita = new Person("Anita");
console.log(anita);
//OR
class Perso {
    constructor(name) {
        this.name = name;
        this.name;
    }
}
let Snch = new Perso("Snch");
console.log(Snch.name);
//program2
//public---that can access the outside of the class
class PersonB {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let Sanchit = new PersonB("Sanchit");
Sanchit.displayName();
console.log(Sanchit.name);
//program3
//privet
class PersonC {
    constructor(nm) {
        this.name = nm;
    }
    dispalyname() {
        console.log(this.name);
        this.greet(); ////access greet method in the same class but cant not access in other class or outside of class
    }
    greet() {
        console.log("hi");
    }
}
let Anu = new PersonC("Anu");
Anu.dispalyname(); //only dispayname method call outside the class-public
//privet method and properties can not access outside the class
//Readonly
class PersonD {
    constructor(nm) {
        this.name = nm;
    }
    getName() {
        return this.name;
    }
}
let ankita = new PersonD("ankit");
console.log(ankita.name);
//readonly-we can only set the values but cannot modify it.
