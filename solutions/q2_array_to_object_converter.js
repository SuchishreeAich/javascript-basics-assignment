/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (objArr,obj) => {
	// Write your code here
	var objResult = {};

	if(objArr!=null && obj!=null && objArr instanceof Array)
	{
		for(var objVal in objArr)
		{
			var objTemp = objArr[objVal];

			var objKeys = Object.keys(objTemp);

			var objIndex = objKeys.indexOf(obj);

			var objResultIndex = objTemp[objKeys[objIndex]];

			objResult[objResultIndex] = objTemp;
		}
	
		return objResult;
	}

	return null;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
