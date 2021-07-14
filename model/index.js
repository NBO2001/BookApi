const books = [
    {
        id: 1,
        name: "Price Test"
    },
    {
        id:2,
        name: "Edu"
    }
]
function listBooks(){
    return books;
}
function listBooks2(id){
    return `Esse foi o id2: ${id}`;
}

module.exports = {listBooks, listBooks2};

