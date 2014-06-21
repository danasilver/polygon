!function() {

  /**
   * Polygon constructor with instance methods.
   */

  function polygon() {
    var _points = [];

    function _polygon() { };

    _polygon.points = function(point_array) {
      if (!arguments.length) return _points;
      for (var i = 0; i < point_array.length; i++) {
        _points.push(point_array[i]);
      }
      return _polygon;
    }

    _polygon.area = function() {
      if (!_points.length) return 0;
      else return area(_points);
    }

    return _polygon;
  }

  /**
   * Calculate the area of a simple polygon. Negative area indicates points are
   * given in clockwise order. O(|points|).
   *
   * @param {Array} points
   */

  function area(points) {
    var _area = 0;
    var length = points.length;
    for (var i = 0; i < length - 1; i++) {
      _area += points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
    }
    return _area / 2;
  }

  if (typeof define === "function" && define.amd) {
    define(polygon);
  } else if (typeof module === "object" && module.exports) {
    module.exports = polygon;
  } else {
    this.polygon = polygon;
  }
}();