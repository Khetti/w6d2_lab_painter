const assert = require("assert");
const Room = require("../room.js");

describe("Room", function(){

  let room;

  beforeEach(function(){
    room = new Room(12, false);
  })

  it("should have an area in square metres", function(){
    const actual = room.area;
    assert.strictEqual(actual, 12);
  });

  it("should start as not painted", function(){
    const actual = room.isPainted;
    assert.strictEqual(actual, false);
  });

  it("should be able to be painted", function(){
    room.isPainted = true;
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  });
});
