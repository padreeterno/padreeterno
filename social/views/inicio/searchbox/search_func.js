class Search {
    constructor(){
        this.valid_characters = /[^a-zA-Z0-9\/_\/]/;
    }
    input_verifi_char(value){
        var item_returned = { value : null, message : null };
        var validity_char = this.valid_characters.test(value);
        if(validity_char){
            item_returned.message = "Caracter Invalido";
            return item_returned;
        }
        item_returned.value = value;
        
        return item_returned;
    }
}
module.exports = Search;