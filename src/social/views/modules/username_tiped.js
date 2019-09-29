module.exports.username = function(__username){
	var valid_characters = /[^a-zA-Z0-9_]/;
	var returnData = { data : null, message : null };
	var isEspecialCharacter = valid_characters.test(__username);
	
	returnData.message = false;
	
	if(isEspecialCharacter){
		returnData.message = true
	}
	
	returnData.data = __username;

	return returnData;
}