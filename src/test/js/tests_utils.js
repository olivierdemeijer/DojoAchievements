function intTimesIncreased (times){
  var result = [];
  for (var i=0;i<=times;i++){
    result.push(i);
  }
  return result;
}

function intTimesReduced (times){
	var result = [];
	for (var i=times;i>=0;i--){
		result.push(i);
	}
	return result;
}

function floatTimesIncreased (times){
  var result = [];
  for (var i=0;i<=times;i++){
    result.push(i*0.1);
  }
  return result;
}

function floatTimesReduced (times){
	var result = [];
	for (var i=times;i>=0;i--){
		result.push(i*0.1);
	}
	return result;
}