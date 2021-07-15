const enBooks = require('./enBooks');
const ptBooks = require('./ptBooks');

function listBooks(lang){
    switch(lang){
        case "en":
            return enBooks;
        case "pt":
            return ptBooks;
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

        case "pt":
            const newBooksPt = ptBooks.filter((smt) => {
        
                return smt.id == id;
        
            });
        
            if(newBooksPt.length){
                return newBooksPt;
            }else{
                return false;
            }
        default:
            return false;
    }
}

function suggestionDay(lang){

    const id = Math.floor((Math.random() * 11) + 1);

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

        case "pt":
            const newBooksPt = ptBooks.filter((smt) => {
        
                return smt.id == id;
        
            });
        
            if(newBooksPt.length){
                return newBooksPt;
            }else{
                return false;
            }
        default:
            return false;
    }
}

module.exports = {listBooks, searchId, suggestionDay};

