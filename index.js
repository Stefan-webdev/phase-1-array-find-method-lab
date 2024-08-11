// code your solution here
const name = `Stefan`
const printHello = function(name){
    return `Greetings ${name} Hello World!`
}

const superbowlWin = (records) => {
    const winRecord = records.find(record => record.result === "W")

    return winRecord ? winRecord.year : undefined;
}

const loopThroughArray = function(array){
    for(let item of array) {
        console.log(item)
    }
}

const capitalizeArray = function(array) {
    let newArray = []
    for (let item of array){
        newArray.push(item.toUpperCase())

    }
    console.log(newArray)
}
function handleBooks(fun) {
    let books = [`Eloquent Javascript`, `JavaScript: The Good Parts`, `Learn JavaScript VISUALLY`, `You don't Know JS`]
    
    fun(books)

}   

const newBooks = [ 
    
    {
    title: `Javascript the Guide`,
    author: `The JS Guy`,
    price: 60.95,
    inventory: 1

    },
    {
        title: `Happy Book`,
        author: `Happy Guy`,
        price: 52.87,
        inventory: 4
    },
    {
        title: `Programming Book`,
        author: `Programming Guy`,
        price: 29.67,
        inventory: 1
    }

]

function printReport(foo){
    console.log(foo(newBooks))
}
function totalInventory(array){
    let total = 0
    for(let item of array){
        total += item.inventory
        

    }
    return `total inventory ${total} books`
}
printReport(totalInventory)

 function replenish(array){
    let replenishList = []
    for(item of array){
        if(item.inventory < 3) {
            replenishList.push(item.title)
        }
    }
    console.log(replenishList)
    return `Place Order for: ${replenishList.join(' ')}`
 }
 printReport(totalInventory)
 printReport(replenish)
//handleBooks(loopThroughArray)
//handleBooks(capitalizeArray)
//console.log(printHello(name))