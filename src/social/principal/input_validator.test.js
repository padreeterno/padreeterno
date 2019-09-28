const input_validator = require("./input_validator");
describe("Prueba Input create post", () => {
  it("sin especial caracteres", () => {
    var result = input_validator.input_verifi_char("hola");
    expect(result.value).toEqual("hola");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres '", () => {
    var result = input_validator.input_verifi_char("'hola");
    expect(result.value).toEqual(null);
    expect(result.message).toEqual("Caracter Invalido");
  });
  it("con especial caracteres @", () => {
    var result = input_validator.input_verifi_char("@");
    expect(result.value).toEqual("@");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres @Hola", () => {
    var result = input_validator.input_verifi_char("@Hola");
    expect(result.value).toEqual("@Hola");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres _hasd", () => {
    var result = input_validator.input_verifi_char("_hasd");
    expect(result.value).toEqual("_hasd");
    expect(result.message).toEqual(null);
  });
  it("con especial caracteres fulano.detal", () => {
    var result = input_validator.input_verifi_char("fulano.detal");
    expect(result.value).toEqual("fulano.detal");
    expect(result.message).toEqual(null);
  });
});
