/* Write a Program to Flatten a given n-dimensional array */

function pushToArray(objVal, objResultArray)
{
	let arrFlag = objVal instanceof Array;
	if(!arrFlag)
	{
		objResultArray.push(objVal);
	}
	else
	{
		for(let objArrVal in objVal)
		{
			if(objVal.hasOwnProperty(objArrVal))
			{
				let objNewVal = objVal[objArrVal];

				pushToArray(objNewVal, objResultArray);
			}
		}
	}
	return objResultArray;
}

const flatten = (objArr) => {
	// Write your code here
	let objResultArray = [];

	if(objArr !== null && objArr instanceof Array)
	{
		for(let obj in objArr)
		{
			if(objArr.hasOwnProperty(obj))
			{
				pushToArray(objArr[obj], objResultArray);
			}
		}
		return objResultArray;
	}
	return null;
};


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
