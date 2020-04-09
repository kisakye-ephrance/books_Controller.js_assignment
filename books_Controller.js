const books = require ('./books')

const bookslength = books.length
for (let i =0; i<bookslength; i++){
    console.log("-----------------------")
    console.log("Books;",books[i].title)
    console.log("Author;",books[i].author)
}

for (let i=0; i<bookslength; i++){
    if (i===1 || i===2 || i===3 || i===5 || i===6 || i===7){
    console.log("-------------------")
    console.log("Books;",books[i].title)
}
}

for (let i=0; i<bookslength; i++){
    if(i===0 || i===2 || i===4 || i===7){
        console.log("-------------")
        console.log("Books;",books[i].title)
    }
}




