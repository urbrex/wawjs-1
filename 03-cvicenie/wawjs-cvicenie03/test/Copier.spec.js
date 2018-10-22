// tested library
const Copier = require("../src/Copier2.js");
//
const assert = require("assert");

describe("Copying existing files - API styles test", function() {

  it("Copier supports event api", function(done) {

    let from = __filename; // use self as source
    let to = __filename + ".bak";

    var c = new Copier(from, to);
    c.on("finish", () => done());
    c.on("error", (err) => done(err));
    c.copy();

  });

  it("Copier supports also callback api ", function(done) {

    let from = __filename; // use self as source
    let to = __filename + ".bak";

    var c = new Copier(from, to);

    c.copy(function(err, data) {
      done(err, data);
    });

  });

  it.skip("TODO: events shell not be fired in callback api ", function(done) {

    // DO this only after previous is implemented
    let from = __filename; // use self as source
    let to = __filename + ".bak";

    var c = new Copier(from, to);
    c.on("error", () => called = true);
    c.on("data", () => called = true);
    c.copy(function(err, data) {
      if (called) done(new Error("callbacks shell not be called"));
      else done(err, data);
    });

  });

  it.skip("FIXME: copy called multiple times incorrectly appends",function(done) {

    let from = __filename; // use self as source
    let to = __filename + ".bak";

    var c = new Copier(from, to);
    c.on("error", (err) => done(err));
    c.copy(function(err, data) {
      done(err, data);
    });
    c.copy(function(err, data) {
      done(err, data);
    });

  });

});