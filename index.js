function updateObjectWithKeyAndValue(object, key, value){
  console.log('key and value is ' + key + ' ' + value);
  return Object.assign({}, key, value);
}
