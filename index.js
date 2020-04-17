function updateObjectWithKeyAndValue(object, key, value){
  var result = Object.assign({}, object);
  result[key] = value;
  return result;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] =  value;
  return object;
}
