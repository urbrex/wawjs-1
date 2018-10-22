// module API
module.exports = {
  countDefined,
  filterDefined,
  sort,
  reverse,
  // TODO: add others (all applicable from array)
};

function countDefined(arr){
	return filterDefined(arr).length;
}

function filterDefined(arr){
	return arr.filter(() => true);
}

function sort(arr,callback){
	return filterDefined(arr).sort(callback);
}

function reverse(arr){
	return arr.map((item,index) => arr[arr.length-1-index]);
}