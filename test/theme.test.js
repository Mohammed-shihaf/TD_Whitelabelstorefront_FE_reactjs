import { expect } from "chai";
import { themeStyles, sortProductsByName } from "../src/lib/theme.js";

describe("themeStyles", () => {
  it("maps a tenant's primary color into inline styles", () => {
    expect(themeStyles({ primaryColor: "#2563eb" })).to.deep.equal({
      background: "#2563eb",
      color: "#ffffff",
    });
  });
});

describe("sortProductsByName", () => {
  it("sorts without mutating input", () => {
    const input = [{ name: "Plus" }, { name: "Basic" }];
    const sorted = sortProductsByName(input);
    expect(sorted.map((p) => p.name)).to.deep.equal(["Basic", "Plus"]);
    expect(input[0].name).to.equal("Plus");
  });
});
