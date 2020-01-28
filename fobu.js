
function every(object, predicate) {
  for (let [key,value] of Object.entries(object)) {
    if (!predicate(value, key, object))
      return false;
  }

  return true;
}


function find(object, predicate) {
  for (let [key,value] of Object.entries(object)) {
    if (predicate(value, key, object))
      return [key, value];
  }

  return null;
}


function filter(object, predicate) {
  let result = {};
  for (let [key,value] of Object.entries(object)) {
    if (predicate(value, key, object))
      result[key] = value;
  }

  return result;
}


function forEach(object, fn) {
  for (let [key,value] of Object.entries(object))
    fn(value, key, object);
}


function map(object, fn) {
  let result = {};
  for (let [key,value] of Object.entries(object))
    result[key] = fn(value, key, object);

  return result;
}


function _reduce(object, keys, fn, initialValue) {
  let acc = (initialValue != null) ?
             initialValue :
             object[keys.shift()];
  for (let key of keys)
    acc = fn(acc, object[key], key, object)

  return acc;
}


function reduce(object, fn, initialValue) {
  return _reduce(object, Object.keys(object), fn, initialValue)
}


function reduceRight(object, fn, initialValue) {
  return _reduce(object, Object.keys(object).reverse(), fn, initialValue)
}


function some(object, predicate) {
  return find(object, predicate) ? true : false;
}


module.exports = { every, find, filter, forEach, map, reduce, reduceRight, some };
