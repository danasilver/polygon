## polygon

A standalone library for working with polygons.

### Construction

```js
var p = polygon();
```

### Add points

```js
p.points([[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]);
```

### Get points

```js
var points = p.points();
//=> [[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]
```

### Area

Calculated as the sum of the determinants of consecutive vertices as described
on [Wolfram MathWorld](http://mathworld.wolfram.com/PolygonArea.html).

Area is signed and defined for a convex polygon to be positive if the points are
arranged in counterclockwise order and negative if they are in clockwise order.

```js
var area = p.area();
```

Methods below will be filled out as they are added.

### Perimeter

### Centroid

### Point in Polygon

See http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html.

### Convex

### Simple

### Intersecting

### Triangulation

### Minimum Weight Triangulation
