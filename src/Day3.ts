//Enum,type,interface & union

//1.Enum--string / number 

enum operations {
    design,
    production,
    quality,
    packaging,
    dispatched
}

if (operations.design) {
    console.log('to make a design')
}

//Number
enum days {
    day1,
    day2,
    day3
}

console.log(days.day1)

//STRING
enum days2 {
    day1 = "DAY1",
    day2 = "DAY2"
}

console.log(days2.day1)










