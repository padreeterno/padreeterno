const Search = require("./search_func");
describe("Prueba Search", () => {
  const item = new Search();
  it("sin especial caracteres", () => {
    var result = item.input_verifi_char("hola");
    expect(result.value).toEqual("hola");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres '", () => {
    var result = item.input_verifi_char("'hola");
    expect(result.value).toEqual(null);
    expect(result.message).toEqual("Caracter Invalido");
  });
  it("con especial caracteres @", () => {
    var result = item.input_verifi_char("@");
    expect(result.value).toEqual(null);
    expect(result.message).toEqual("Caracter Invalido");
  });
  it("con especial caracteres @Hola", () => {
    var result = item.input_verifi_char("@Hola");
    expect(result.value).toEqual(null);
    expect(result.message).toEqual("Caracter Invalido");
  });
  it("con especial caracteres _hasd", () => {
    var result = item.input_verifi_char("_hasd");
    expect(result.value).toEqual("_hasd");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres fulano.detal", () => {
    var result = item.input_verifi_char("fulano.detal");
    expect(result.value).toEqual(null);
    expect(result.message).toEqual("Caracter Invalido");
  });
});
