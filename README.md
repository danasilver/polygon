## polygon

A standalone library for working with polygons.

Runtimes are given in terms of the number of points.

### Construction

```js
var p = polygon();
```

### Add points

Call `points` once or multiple times to add points.

```js
p.points([[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]);
```

### Get points

```js
p.points();
//=> [[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]
```

### Clear points

```js
p.clear();
```

### Area

Calculated as the sum of the determinants of consecutive vertices as described
on [Wolfram MathWorld](http://mathworld.wolfram.com/PolygonArea.html).

Area is signed and defined for a convex polygon to be positive if the points are
arranged in counterclockwise order and negative if they are in clockwise order.

O(n)

```js
p.area();
//=> 1.5
```

### Perimeter

Calculated as the sum of the
[Euclidean distances](http://en.wikipedia.org/wiki/Euclidean_distance) between
consecutive vertices.

O(n)

```js
p.perimeter();
//=> 5.414213562373095
```

### Centroid

### Point in Polygon

See http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html.

### Convex

### Simple

### Intersecting

### Triangulation

### Minimum Weight Triangulation
