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

    _polygon.clear = function() {
      _points = [];
      return _polygon;
    }

    _polygon.area = function() {
      return area(_points);
    }

    _polygon.perimeter = function() {
      return perimeter(_points);
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
    if (points.length < 3) return 0;
    var area = 0,
        n = points.length,
        i = -1,
        a,
        b = points[n - 1];
    while (++i < n) {
      a = b;
      b = points[i];
      area += a[0] * b[1] - a[1] * b[0];
    }
    return area / 2;
  }

  /**
   * Calculate the perimeter of a polygon using the sum of the Euclidean
   * distances between consecutive points. O(|points|).
   *
   * @param {Array} points
   */

  function perimeter(points) {
    if (points.length < 3) return 0;
    var perimeter = 0,
        n = points.length,
        i = -1,
        a,
        b = points[n - 1];
    while (++i < n) {
      a = b;
      b = points[i];
      perimeter += Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) +
                             (a[1] - b[1]) * (a[1] - b[1]));
    }
    return perimeter;
  }

  if (typeof define === "function" && define.amd) {
    define(polygon);
  } else if (typeof module === "object" && module.exports) {
    module.exports = polygon;
  } else {
    this.polygon = polygon;
  }
}();