function updateObjectWithKeyAndValue(object, key, value){
  console.log('key and value is ' + key + ' ' + value);
  var result = Object.assign({}, object);
  var result[key] = value;
  return result;
}
