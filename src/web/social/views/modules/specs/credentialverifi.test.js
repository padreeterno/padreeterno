import credential from "../credentialverifi";

describe("credentialverifi",() =>{
	it("Length",() =>{
		var result = credential.password("cara","cara");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["Longitud mayor a 8"]);
	});
	it("Empty",() =>{
		var result = credential.password("","");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["Longitud mayor a 8"]);
	});
	it("Wrong",() =>{
		var result = credential.password("carambolas","carambola");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["No hay coincidencia"]);
	});
	it("SpaceBar",() =>{
		var result = credential.password("%carambolas ","&carambolas");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["Eliminar el espacio","No hay coincidencia"]);
	});
	it("Equal",() =>{
		var result = credential.password("yoshualopez","yoshualopez");
		expect(result.isCorrect).toEqual(true);
		expect(result.message).toEqual(null);
	});
	it("Case Length and SpaceBar",() =>{
		var result = credential.password("yoshu alopez","yoshu alopez");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["Eliminar el espacio"]);
	});
	it("Case ",() =>{
		var result = credential.password("yos al","yos al");
		expect(result.isCorrect).toEqual(false);
		expect(result.message).toEqual(["Eliminar el espacio","Longitud mayor a 8"]);
	});
})