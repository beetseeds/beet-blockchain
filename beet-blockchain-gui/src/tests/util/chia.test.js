const beet = require("../../util/beet");

describe("beet", () => {
  it("converts number mojo to beet", () => {
    const result = beet.mojo_to_beet(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to beet", () => {
    const result = beet.mojo_to_beet("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to beet string", () => {
    const result = beet.mojo_to_beet_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to beet string", () => {
    const result = beet.mojo_to_beet_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number beet to mojo", () => {
    const result = beet.beet_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string beet to mojo", () => {
    const result = beet.beet_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = beet.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = beet.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = beet.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = beet.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = beet.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = beet.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
