var App, app, expect;

App = require("../../src/server/server.js");
expect = require("expect.js");
app = new App();

describe("server testing", function() {
  it("should work", function() {
    expect(typeof app).to.be("object");
  });
  it("The panda should be sad", function() {
    expect(app.getPandaEmotionalState()).to.be("sad");
  });
  it("The panda should now be happy", function() {
    app.setPandaEmotionalState("happy");
    expect(app.getPandaEmotionalState()).to.be("happy");
  });
});
