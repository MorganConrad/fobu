var test = require('tape');
var fobu = require('../fobu.js');

const OBJECT1 = {
  a: 1,
  b: "b",
  c: [1,2,3],
}

let forEacher = [];

function keyEqVal(v,k) { return v === k; }

test('some', function(t) {
   t.true(fobu.some(OBJECT1, keyEqVal));
   t.false(fobu.some(OBJECT1, (v,k,o) => !o ));
   
   t.end();
});

test('every', function(t) {
   t.false(fobu.every(OBJECT1, keyEqVal) );
   t.true(fobu.every(OBJECT1, (k) => k) );
   
   t.end();
});

test('find', function(t) {
   let result = fobu.find(OBJECT1, keyEqVal);
   t.equals(JSON.stringify(result), '["b","b"]');
   
   t.end();
});


test('filter', function(t) {
   let result = fobu.filter(OBJECT1, (v,k) => k === v);
   t.equals(JSON.stringify(result), '{"b":"b"}');
   
   t.end();
});


test('forEach', function(t) {
  fobu.forEach(OBJECT1, (v,k) => { forEacher.push(k+v) } );
  let joined = forEacher.join('.');
   t.equals(joined, 'a1.bb.c1,2,3');
   
   t.end();
});



test('mapped', function(t) {
   let result = fobu.map(OBJECT1, (v,k) => k+v);
   t.equals(JSON.stringify(result), '{"a":"a1","b":"bb","c":"c1,2,3"}');
   
   t.end();
});


test('reduce', function(t) {
   let result = fobu.reduce(OBJECT1, (acc, v,k) => acc+k+v+'.', "");
   t.equals(JSON.stringify(result), '"a1.bb.c1,2,3."');
   
   t.end();
});

test('reduceRight', function(t) {
   let result = fobu.reduceRight(OBJECT1, (acc, v,k) => acc+k+v+'.', "");
   t.equals(JSON.stringify(result), '"c1,2,3.bb.a1."');
   
   t.end();
});


