// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const retrieve = (objArr,name) => {    

    var fruitObj = fetch(objArr,name);

    return fruitObj;

};

function add(objArr,obj)
{
    objArr.push(obj);
}

function fetch(objArr,obj)
{
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
}


module.exports = retrieve;
