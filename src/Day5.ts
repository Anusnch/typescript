//types
type Pesrson = {
    firstname: string
    lastname: string
}

let anu: Pesrson = {
    firstname: "Anita",
    lastname: "pagar"
}

let sachin: Pesrson = {
    firstname: "Sachin",
    lastname: "pagar"
}

let amol: { fstname: string, lsname: string } = {  //for that whole line we can use the types
    fstname: "Amol",
    lsname: "Arote"
}

//interface
interface Personn {
    fistname: string
    lastname: string
}

let D: Personn = {
    fistname: "Anu",
    lastname: "pagar"
}

//unions
function PrintAdd(code: string | number) {
    console.log(`my address is ${code}`)
    console.log(code)
}
PrintAdd(12)
PrintAdd("Pune")

let account:"saving"|"current"


