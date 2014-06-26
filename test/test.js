var assert = require("assert");
var polygon = require("../");

describe("Polygon", function() {
  describe(".area()", function() {
    it("should return the area of a polygon", function() {
      var p = polygon().points([[0, 0], [1, 0], [1, 1], [0, 1]]);
      assert.equal(1, p.area());
    });
  });

  describe(".perimeter()", function() {
    it("should return the perimeter of a polygon", function() {
      var p = polygon().points([[0, 0], [1, 0], [1, 1], [0, 1]]);
      assert.equal(4, p.perimeter());
    });
  });

  describe(".centroid()", function() {
    it("should return the centroid of a polygon", function() {
      var p = polygon().points([[0, 0], [1, 0], [1, 1], [0, 1]]);
      assert.deepEqual([0.5, 0.5], p.centroid());
    });
  });
});