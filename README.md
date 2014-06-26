## polygon

A standalone library for working with polygons.

Runtimes are given in terms of the number of points.

### Testing

Install the dev dependencies:

```sh
$ npm install
```

And run the tests:

```sh
$ npm test
```

### Construction

```js
var p = polygon();
```

### Points

Call `points` once or multiple times to add points.

```js
p.points([[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]);
```

Call `points` with no arguments to get the points.

```js
p.points();
//=> [[0, 0], [1, 0], [1, 1], [1, 2], [0, 1]]
```

### Clear

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

![Cx](http://upload.wikimedia.org/math/e/e/1/ee14cbb2b170c4bb435f1d84e78f6d66.png)
![Cy](http://upload.wikimedia.org/math/a/4/c/a4cee81a1d18e4d067f66d4d40a8a1fe.png)

[http://en.wikipedia.org/wiki/Centroid#Centroid_of_polygon](http://en.wikipedia.org/wiki/Centroid#Centroid_of_polygon).

O(n)

```js
p.centroid();
//=> [0.5555555555555556, 0.7777777777777777]
```

### Point in Polygon

See http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html.

### Convex

### Simple

### Intersecting

### Triangulation

### Minimum Weight Triangulation
