module.exports = {
  allOwnKeys,
  allOwnValues,
  allOwnEntries,
  getProtoChain,
  allKeys,
  forIn,
  shallowClone,
  hasInheritedProperty,
  hasOverridenProperty
};
// Object.keys supporting Symbols and non-enumerables 
function allOwnKeys(o) {
      let prop = [];
      prop = Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
      return prop;
}
// Object.values supporting Symbols and non-enumerables 
function allOwnValues(o) {
  let prop = allOwnKeys(o), values = [];
  for (var i = 0; i < prop.length ; i++) {
    values.push(o[prop[i]]);
  }
  return values;
}
// Object.entries supporting Symbols and non-enumerables 
function allOwnEntries(o) {
  var keys = allOwnKeys(o);
      values =allOwnValues(o);
      entries =[];
  for (var i = 0; i < keys.length; i++) {
    entries.push([keys[i], values[i]]);
  }
  return entries;
}
// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {
  //LOC: 7
  var chain = [];
  chain.push(obj);
  while(Object.prototype.isPrototypeOf(obj)) {
    obj=Object.getPrototypeOf(obj);
    chain.push(obj);
  }

  return chain;
}
// Object.keys including, inherited, not-enumeble, symbols  
function allKeys(obj) {
  //LOC: 10
}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {
  //LOC: 1
  if (callback) {
    callback(allOwnEntries(obj));
  }
}
// create copy of object 
// with same propereties, 
// including symbols, 
// same values 
// and same property ownership 
function shallowClone(obj) {
  return Object.create;
  Object.getPrototypeOf(obj);
  Object.getPropertyDescriptor(obj);
}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {
  //LOC:2
}

function hasOverridenProperty(obj, prop) {
  //LOC:5
}