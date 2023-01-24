//inheritance
//With hardcoded values
class gMother {
    firstName: string = "vimal"
    lastName: string = "pagar"
    displayName(): void {
        console.log(this.firstName + this.lastName)
    }
}

class Mother extends gMother {
    MfirstName: string = "Anita"

    displayMName(): void {
        console.log(this.MfirstName + this.lastName)
    }
}

class Daughter extends Mother {
    DfirstName: string = "Anshita"

    displayDName(): void {
        console.log(this.DfirstName + this.lastName)
    }
}

let Anshita = new Daughter()
console.log(Anshita.DfirstName)
console.log(Anshita.MfirstName)
console.log(Anshita.firstName)
console.log(Anshita.lastName)

Anshita.displayDName()
Anshita.displayMName()
Anshita.displayName()


//By using constructor

class gMother2 {
    firstName: string
    LastName: string
    constructor(fName: string, lName: string) {
        this.firstName = fName
        this.LastName = lName
    }
    displayName() {
        console.log(this.firstName + this.LastName)
    }
}

class Mother2 extends gMother2 {
    MFirstName: string
    constructor(fName: string, lName: string, MName: string) {
        super(fName, lName)
        this.MFirstName = MName
    }
    displayMName(): void {
        console.log(this.MFirstName + this.LastName)
        super.displayName
    }
}

class Daughter2 extends Mother2 {
    DFirstName: string
    constructor(fName: string, lName: string, MName: string, DName: string) {
        super(fName, lName, MName)
        this.DFirstName = DName
    }
    displayDName(): void {
        console.log(this.DFirstName + this.LastName)
        super.displayMName()
    }

}
let Anuu = new Daughter2("Vimal", "Pagar", "Anita", "Anshita")
console.log(Anuu.DFirstName)
console.log(Anuu.LastName)
console.log(Anuu.MFirstName)
console.log(Anuu.firstName)
Anuu.displayDName()


//1parent-2child

class Mother3 {
    firstName: string
    lastName: string
    constructor(fName: string, lName: string) {
        this.firstName = fName
        this.lastName = lName
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Daughter3 extends Mother3 {
    DfirstName: string
    constructor(fName: string, lName: string, DName: string) {
        super(fName, lName)
        this.DfirstName = DName
    }
    displayDName(): void {
        console.log(this.DfirstName + this.lastName)
    }
}

class son extends Mother3{
    SfirstName:string
    constructor(fName: string, lName: string, SName: string) {
        super(fName, lName)
        this.SfirstName = SName
    }
    displaySName(): void {
        console.log(this.SfirstName + this.lastName)
    }
}

let Anshitaa=new Daughter3("Vimal","pagar","Anita")

let Ayansh=new son("Vimal","Pagar","Ayansh")