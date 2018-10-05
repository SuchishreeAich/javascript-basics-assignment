/* Write a Program to Flatten a given n-dimensional array */

const flatten = (objArr) => {
	// Write your code here
	var objResultArray = [];
	
	for(var obj in objArr)
	{		
		pushToArray(objArr[obj],objResultArray);		
	}
		
	return objResultArray;
};

function pushToArray(objVal,objResultArray)
{	
	var arrFlag = objVal instanceof Array;
	
	if(!arrFlag)
	{
		objResultArray.push(objVal);		
	}
	else
	{	
		for(var objArrVal in objVal)
		{
			var objNewVal = objVal[objArrVal];

			if(objNewVal instanceof Array)
			{
				pushToArray(objNewVal,objResultArray);
			}
			else
			{
				objResultArray.push(objNewVal);
			}
		}
	}
	
	return objResultArray;
}

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
