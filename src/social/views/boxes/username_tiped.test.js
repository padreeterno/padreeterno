import funcionUsername from "./username_tiped";
describe("username_tiped",() =>{
	// number 1 == invalid character
	// number 0 == valid character
	it("noSpecialCharacter",() =>{
		var resultado = funcionUsername.username("Yoshua");
		expect(resultado.data).toEqual("Yoshua");
		expect(resultado.message).toEqual(false)
	})
	it("isSpecialCharacter [&]",() =>{
		var resultado = funcionUsername.username("&Yoshua");
		expect(resultado.data).toEqual("&Yoshua");
		expect(resultado.message).toEqual(true)
	});
	it("isSpecialCharacter [$]",() =>{
		var resultado = funcionUsername.username("&Yoshua_lopez");
		expect(resultado.data).toEqual("&Yoshua_lopez");
		expect(resultado.message).toEqual(true)
	});
	it("noSpecialCharacter",() =>{
		var resultado = funcionUsername.username("Yoshua_lopez");
		expect(resultado.data).toEqual("Yoshua_lopez");
		expect(resultado.message).toEqual(false)
	})
})