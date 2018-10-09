/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (objArr, obj) => {
	// Write your code here
	let objResult = {};

	if(objArr !== null && obj !== null && objArr instanceof Array)
	{
		for(let objVal in objArr)
		{
			if(objArr.hasOwnProperty(objVal))
			{
				let objTemp = objArr[objVal];

				let objKeys = Object.keys(objTemp);

				let objIndex = objKeys.indexOf(obj);

				let objResultIndex = objTemp[objKeys[objIndex]];

				objResult[objResultIndex] = objTemp;
			}
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
