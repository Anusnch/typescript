"use strict";
class SBI {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    greet() {
        return "hello";
    }
}
let SBIPune = new SBI();
SBIPune.loan();
SBIPune.save();
SBIPune.greet();
class Anita {
    info() {
        return "my name is Anita";
    }
    salary() {
        return 2000;
    }
}
let StudentAnita = new Anita();
StudentAnita.info();
StudentAnita.salary();
//program3
//access method from one interface only
class sanchit {
    info() {
        return "my name is snchit";
    }
}
let StudentSanchit = new sanchit();
StudentSanchit.info();
class RBI {
    getcode() {
        return 20;
    }
}
class PNB extends RBI {
    loan() {
        return 50;
    }
    save() {
        return 100;
    }
}
let pune = new PNB();
pune.getcode();
pune.loan();
pune.save();
class RBIa {
    getcode() {
        return 200;
    }
}
class PNBa extends RBIa {
    loan() {
        return 500;
    }
    save() {
        return 1000;
    }
    //overriding-same method name,same signature,diffrent class
    getcode() {
        super.getcode(); ///inherits the method from another class
        return 600;
    }
}
let punee = new PNBa();
pune.getcode();
pune.loan();
pune.save();
//abstract--can no create object fron abstarct class
//Program6
class RBIIndia {
    country() {
        return "INDIA";
    }
}
