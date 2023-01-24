//interface
//Program1
interface Worldbank {
    loan(): number,
    save(): number
}

class SBI implements Worldbank {
    loan(): number {
        return 10
    }
    save(): number {
        return 20
    }
    greet(): string {
        return "hello"
    }
}
let SBIPune = new SBI()

SBIPune.loan()
SBIPune.save()
SBIPune.greet()

//program2
interface student {
    info(): string
}

interface Teacher {
    salary(): number
}

class Anita implements student, Teacher {//accesss property & method from both interface
    info(): string {
        return "my name is Anita"
    }

    salary(): number {
        return 2000
    }
}
let StudentAnita = new Anita()
StudentAnita.info()
StudentAnita.salary()

//program3
//access method from one interface only
class sanchit implements student {
    info(): string {
        return "my name is snchit"
    }
}
let StudentSanchit = new sanchit()

StudentSanchit.info()

//program4
//extends keyword

interface WorldbankB {
    getcode(): number
}

class RBI implements WorldbankB {      //class 1
    getcode(): number {
        return 20
    }
}

class PNB extends RBI {
    loan(): number {
        return 50
    }
    save(): number {
        return 100
    }
}
let pune = new PNB()
pune.getcode()
pune.loan()
pune.save()

//program5
//extends keyword,overriding and super keyword

interface WorldbankB {
    getcode(): number
}

class RBIa implements WorldbankB {      //class 1
    getcode(): number {
        return 200
    }
}

class PNBa extends RBIa {
    loan(): number {
        return 500
    }
    save(): number {
        return 1000
    }
    //overriding-same method name,same signature,diffrent class
    getcode(): number {

        super.getcode()///inherits the method from another class
        return 600
    }

}
let punee = new PNBa()
pune.getcode()
pune.loan()
pune.save()

//abstract--can no create object fron abstarct class
//Program6
abstract class RBIIndia{
   abstract loan():number
   abstract save():number

   country():string{
    return "INDIA"
   }
}

    