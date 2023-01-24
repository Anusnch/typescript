//public,private,protected,readonly
//program1
class Person {
    name: string
    constructor(nm: string) {//set the values of name properties
        this.name = nm
    }
}
let anita = new Person("Anita")
console.log(anita)

//OR
class Perso {
    constructor(public name: string) {
        this.name
    }
}
let Snch = new Perso("Snch")
console.log(Snch.name)


//program2
//public---that can access the outside of the class
class PersonB {
    public name: string
    constructor(nm: string) {
        this.name = nm
    }

    public displayName() {
        return this.name
    }
}
let Sanchit = new PersonB("Sanchit")
Sanchit.displayName()
console.log(Sanchit.name)

//program3
//privet
class PersonC {
    private name: string
    constructor(nm: string) {
        this.name = nm
    }
    public dispalyname() {
        console.log(this.name)
        this.greet()     ////access greet method in the same class but cant not access in other class or outside of class
    }

    private greet() {
        console.log("hi")
    }
}
let Anu = new PersonC("Anu")
Anu.dispalyname()//only dispayname method call outside the class-public
//privet method and properties can not access outside the class

//Readonly
class PersonD {
    public readonly name: string
    constructor(nm: string) {
        this.name = nm
    }
    public getName(): string {
        return this.name
    }
}
let ankita = new PersonD("ankit")
console.log(ankita.name)
//readonly-we can only set the values but cannot modify it.