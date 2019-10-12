module.exports.password = function (password_one,password_two){
	var __returned = { isMatched : false, isChar : false, _isPasswordLength : false, _isSpaceBar : false};
	var _returnedData = { isCorrect : false, message : [] };
	var _passwordOneSpaceBar = password_one.indexOf(" ");
	var _passwordTwoSpaceBar = password_two.indexOf(" ");
	
	if(password_one !== password_two){
		__returned.isMatched = false;	
	}
	if( _passwordOneSpaceBar !== -1 || _passwordTwoSpaceBar !== -1 ){
		__returned._isSpaceBar = true;
	}
	if(password_one.length < 8 || password_two.length < 8){
		__returned._isPasswordLength = true;
	}
	if(password_one === password_two){
		__returned.isMatched = true;	
	}
	if(__returned._isSpaceBar){
		_returnedData.message.push("Eliminar espacio");
	}
	if(__returned._isPasswordLength){
		_returnedData.message.push("Longitud debe ser mayor a 8");
	}
	if(!__returned.isMatched){
		_returnedData.message.push("No hay coincidencia");
	}
	if(__returned.isMatched){
		if(_returnedData.message.length <= 0 ){
			_returnedData.isCorrect = __returned.isMatched;
			_returnedData.message = null
		}
	}

	return _returnedData;
}