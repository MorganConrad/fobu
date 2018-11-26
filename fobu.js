
function every(object, predicate) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (!predicate(object[key], key, object))
      return false;
  }
  
  return true;
}


function find(object, predicate) {
  let keys = Object.keys(object);
  for (let key of keys) {
    let value = object[key];
    if (predicate(value, key, object))
      return [key, value];
  }
  
  return null;
}


function filter(object, predicate) {
  let keys = Object.keys(object);
  let result = {};
  for (let key of keys) {
    let value = object[key];
    if (predicate(value, key, object))
      result[key] = value;
  }
  
  return result;
}

  
function forEach(object, fn) {
  let keys = Object.keys(object);
  for (let key of keys)
    fn(object[key], key, object);
}


function map(object, fn) {
  let keys = Object.keys(object);
  let result = {};
  for (let key of keys)
    result[key] = fn(object[key], key, object);
  
  return result;
}


function _reduce(object, keys, fn, initialValue) {
  let acc = (initialValue != undefined) ? 
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
