describe("Test ci",() => {
    const ci = require("../ci");
    it("CI NUMBER CORRECT EXEPT LENGTH", () => {
        var result_ci = ci(112323);
        expect(result_ci.message).toEqual("Longitud debe ser mayor a 7");
        expect(result_ci.value).toEqual(112323);
    });
    it("CI NUMBER WITH INVALID CHAR", () => {
        var result_ci = ci("hol");
        expect(result_ci.message).toEqual("Caracter Invalido");
        expect(result_ci.value).toEqual(false);
    });
    it("CI CORRECT!", () => {
        var result_ci = ci(2300874910);
        expect(result_ci.message).toEqual(false);
        expect(result_ci.value).toEqual(2300874910);
    });
    it("CI NUMBER WITH INVALID CHAR", () => {
        var result_ci = ci("2300874910as");
        expect(result_ci.message).toEqual("Caracter Invalido");
        expect(result_ci.value).toEqual(false);
    });
})