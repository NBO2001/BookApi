const enBooks = require('./enBooks');

function listBooks(lang){
    switch(lang){
        case "en":
            return enBooks;
        default:
            return false;
    }
}
function searchId(lang,id){
    
    switch(lang){
        case "en":

            const newBooks = enBooks.filter((smt) => {
        
                return smt.id == id;
        
            });
        
            if(newBooks.length){
                return newBooks;
            }else{
                return false;
            }

        default:
            return false;
    }
}

module.exports = {listBooks, searchId};

