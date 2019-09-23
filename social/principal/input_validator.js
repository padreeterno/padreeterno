class Search {
    constructor(){
        this.invalid_characters = /[^a-zA-Z0-9\/_.@#*+-\/]/;
    }
    input_verifi_char(value){
        var item_returned = { value : null, message : null };
        var validity_char = this.invalid_characters.test(value);
        if(validity_char){
            item_returned.message = "Caracter Invalido";
            return item_returned;
        }
        item_returned.value = value;
        
        return item_returned;
    }
}
module.exports.input_verifi_char  = function(value){
    var invalid_characters = /[^a-zA-Z0-9\/_.@#*+-\/]/;
    var item_returned = { value : null, message : null };
    var validity_char = invalid_characters.test(value);
    if(validity_char){
        item_returned.message = "Caracter Invalido";
        return item_returned;
    }
    item_returned.value = value;
    
    return item_returned;
}
// module.exports = Search;