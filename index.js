var polygon = function() {
  var points = [];

  // Subclassing technique copied from D3
  if ({}.__proto__) {
    points.__proto__ = polygonPrototype;
  } else {
    for (var prop in polygonPrototype) points[prop] = polygonPrototype[prop];
  }

  return points;
};

var polygonPrototype = [];

polygonPrototype.points = function(_) {
  if (!arguments.length) return this;
  for (var i = 0; i < _.length; i++) this.push(_[i]);
  return this;
}

polygonPrototype.area = function() {
  var area = 0,
      n = this.length,
      i = -1,
      a,
      b = this[n - 1];
  while (++i < n) {
    a = b;
    b = this[i];
    area += a[0] * b[1] - a[1] * b[0];
  }
  return area / 2;
};

polygonPrototype.perimeter = function() {
  var perimeter = 0,
      n = this.length,
      i = -1,
      a,
      b = this[n - 1];
  while (++i < n) {
    a = b;
    b = this[i];
    perimeter += Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) +
                           (a[1] - b[1]) * (a[1] - b[1]));
  }
  return perimeter;
}

polygonPrototype.centroid = function() {
  var cx = 0,
      cy = 0,
      n = this.length,
      i = -1,
      a,
      b = this[n - 1],
      c,
      k = 1 / (6 * this.area());
  while (++i < n) {
    a = b;
    b = this[i];
    c = a[0] * b[1] - b[0] * a[1];
    cx += (a[0] + b[0]) * c;
    cy += (a[1] + b[1]) * c;
  }
  return [cx * k, cy * k];
}

if (typeof define === "function" && define.amd) {
  define(polygon);
} else if (typeof module === "object" && module.exports) {
  module.exports = polygon;
} else {
  this.polygon = polygon;
}
