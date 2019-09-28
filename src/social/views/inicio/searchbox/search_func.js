module.exports.input_verifi_char = function (value) {
    var valid_characters = /[^a-zA-Z0-9_]/;
    var item_returned = { value : null, message : null };
    var validity_char = valid_characters.test(value);
    if(validity_char){
        item_returned.message = "Caracter Invalido";
        return item_returned;
    }
    item_returned.value = value;
    
    return item_returned;
}