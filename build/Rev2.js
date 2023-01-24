"use strict";
//class
//hardcoded values
class vehicle {
    constructor() {
        this.color = "red";
        this.model = 123;
    }
    displaycolor() {
        console.log(this.color);
    }
}
let audi = new vehicle();
console.log(audi.color);
console.log(audi.model);
audi.displaycolor();
//set values in the constructor
class vehicle2 {
    constructor(mdl, cl) {
        this.color = cl;
        this.model = mdl;
    }
    displayModel() {
        console.log(this.model);
    }
}
let BMW = new vehicle2(123, "Black");
BMW.displayModel();
console.log(BMW.color);
console.log(BMW.model);
//setvalues by using constructor short
class Veh {
    constructor(mdl, color) {
        this.mdl = mdl;
        this.color = color;
    }
    displayColor() {
        console.log(this.color);
    }
}
let Maruti = new Veh(123, "pink");
console.log(Maruti.color);
console.log(Maruti.mdl);
//by using static keyword-
class veh2 {
    static displaycolor() {
        console.log(veh2.color);
    }
}
veh2.color = "red";
veh2.displaycolor();
console.log(veh2.color);
