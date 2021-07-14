const books = [
    {
        id: 1,
        name: "Price Test"
    },
    {
        id:2,
        name: "Edu"
    }
];

function listBooks(){
    return books;
}
function searchId(id){
   
    return books.filter((smt) => {

        return smt.id == id;
        
    });
}

module.exports = {listBooks, searchId};

