"use strict";
//interface---is a completion of obstraction
class SBIa {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    dispalayNumber() {
        return 30;
    }
}
let puneee = new SBIa();
puneee.dispalayNumber();
puneee.loan();
puneee.save();
class PNBb {
    loaninterest() {
        return 10;
    }
    saveinterest() {
        return 20;
    }
    currentinterest() {
        return 30;
    }
}
let kharadi = new PNBb();
kharadi.currentinterest();
kharadi.loaninterest();
kharadi.saveinterest();
class PNBd {
    loaninterest() {
        return 10;
    }
    saveinterest() {
        return 20;
    }
}
let p = new PNBd();
p.loaninterest();
p.saveinterest();
class Grandfather {
    constructor(fn, ln, adcrd) {
        this.firstname = fn,
            this.lastname = ln,
            this.adharcard = adcrd;
    }
}
class father extends Grandfather {
    constructor(fn, ln, adcrd) {
        super(fn, ln, adcrd);
    }
}
let sanchitt = new father("sanchit", "chine", 123);
console.log(sanchitt.adharcard);
console.log(sanchitt.firstname);
console.log(sanchitt.lastname);
