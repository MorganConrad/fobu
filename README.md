[![Build Status](https://secure.travis-ci.org/MorganConrad/fobu.png)](http://travis-ci.org/MorganConrad/fobu)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/fobu)
[![NPM Downloads](http://img.shields.io/npm/dm/fobu.svg)](https://www.npmjs.org/package/fobu)
[![Known Vulnerabilities](https://snyk.io/test/github/morganconrad/fobu/badge.svg)](https://snyk.io/test/github/morganconrad/fobu)
[![Coverage Status](https://coveralls.io/repos/github/MorganConrad/fobu/badge.svg)](https://coveralls.io/github/MorganConrad/fobu)

# fobu
Yet another set of utilities to do "functional programming" on JavaScript Objects.  You can find many other versions of these online.

Basically, allows you to use the ES6 array methods like `map()` and `reduce()` on objects.

Maybe you will find this useful.  I mainly put it on GitHub so I can easily cut and paste these into other code.

## API

All methods take the object as the first argument, and the user function (or "predicate") to be applied as the 2nd.
The method will loop over the key/value pairs in the object, as determined by `Object.keys(theObject)`.

The user function will usually be called with three arguments, much like the array versions.
 - The value
 - the key (for the corresponding array versions, this is the index)
 - the entire object

For `reduce() and `reduceRight()`, the user function takes an additional `acc` first argument. 

### every(object, predicate)
Tests if every key/value pair passes `predicate(key, value, object)`.  Returns true or false, and will "short-circuit".

### find(object, predicate)
Finds the first key/value pair that passes `predicate(key, value, object)`.
 - returns it as an array: [key, value]

### filter(object, predicate)
Creates a new object with (shallow) copies of all key/value pairs that pass `predicate(key, value, object)`.

### forEach(object, fn)
Calls fn(key, value, object) for every key/value pair.

### map(object, fn)
Returns a new result object, with result[key] = fn(object[key], key, object).

### reduce(object, fn, initialValue)

### reduceRight(object, fn, initialValue)

### some(object, predicate)
Tests if any key/value pair passes `predicate(key, value, object)`.  Returns true or false, and will "short-circuit".

