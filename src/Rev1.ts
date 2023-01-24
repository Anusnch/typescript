//interface---is a completion of obstraction

interface Worldbank{
    loan():number,
    save():number
}

class SBIa implements Worldbank{
    loan(): number{
        return 10
    }
    
    save(): number {
        return 20
    }

    dispalayNumber():number{
        return 30
    }
}
let puneee=new SBIa()
puneee.dispalayNumber()
puneee.loan()
puneee.save()

//program2
interface loan{
    loaninterest():number
}

interface save{
    saveinterest():number
}

interface current{
    currentinterest():number
}

class PNBb implements loan,save,current{
    loaninterest():number{
       return 10
    }
    saveinterest():number{
        return 20
    }
    currentinterest():number{
        return 30
    }
}
let kharadi=new PNBb()
kharadi.currentinterest()
kharadi.loaninterest()
kharadi.saveinterest()

class PNBd implements loan,save{
    loaninterest():number{
        return 10
     }
     saveinterest():number{
         return 20
     }
}
let p=new PNBd()
p.loaninterest()
p.saveinterest()

//inheritance with interface
interface citizen{
     adharcard:number
}

class Grandfather implements citizen{
    firstname:string
    lastname:string
    adharcard:number
    
    constructor(fn:string,ln:string,adcrd:number){
        this.firstname=fn,
        this.lastname=ln,
        this.adharcard=adcrd
    }
}

class father extends Grandfather{
    constructor(fn:string,ln:string,adcrd:number){
        super(fn,ln,adcrd)
    }
}
let sanchitt=new father("sanchit","chine",123)
console.log(sanchitt.adharcard)
console.log(sanchitt.firstname)
console.log(sanchitt.lastname)