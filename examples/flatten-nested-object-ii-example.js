/**
 * Flatten Nested Object
 */

const source = {
  a: 1,
  b: {
    c: true,
    d: {
      e: "foo",
    },
  },
  f: false,
  g: ["red", "green", "blue"],
  h: [
    {
      i: 2,
      j: 3,
    },
  ],
};

/** Answer */
const solution = {
  a: 1,
  "b.c": true,
  "b.d.e": "foo",
  f: false,
  "g.0": "red",
  "g.1": "green",
  "g.2": "blue",
  "h.0.i": 2,
  "h.0.j": 3,
};

const flatten = (obj, prefix = "", res = {}) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const k = `${prefix}${key}`;
    if (typeof val === "object") {
      flatten(val, `${k}.`, r);
    } else {
      res[k] = val;
    }
    return r;
  }, res);

console.log(flatten(source));
