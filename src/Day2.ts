//Assigne data type 
//String,number,boolean,array,touple,Enum,object

//1.String
let firstName:String
firstName="Anita"

//2.Number
let rollnumber:number
rollnumber=50
//----
let studentID=10

//3.Boolean
let Icandrive:boolean
Icandrive=true

//4.array
let names:string[]=[]
names.push('Anita')
names.push('sanchit')
console.log(names)

//Loop
names.forEach(function(el:string){
console.log(el.length)
})


//5.Touple
//touple define a length and datatype at a same time

let rollNo:[number,number,number]
rollNo=[10,20,30]

//or by defult extra (more than define length) data added in the array--by using push method only.
rollNo.push(1)
rollNo.push(2)
console.log(rollNo)

//Enum--to store more relative data to used Enum

enum data {
    manager,
    Hr,
    finance,
    coordinator,
    designer
}
if(data.coordinator){
    console.log('co-ordinate to every one')
}

//object
let person={
    firstName:"Anita",
    lastName:"Pagar",
    age:24
}

let data2:{
    fstname:string,
    lstname:string,
    age:number
}