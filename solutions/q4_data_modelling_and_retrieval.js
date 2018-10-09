// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

function fetch(objArr, obj)
{
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
}

function add(objArr, obj)
{
	objArr.push(obj);

	return objArr;
}

function update(objArr)
{
	let fruit = objArr[2];

	fruit.pricePerKg = 500;

	objArr.push(fruit);

	return objArr;
}

const retrieve = (objArr, name) => {
	// Write your code here
	let fruitNew = {name: 'Grapes', color: 'Green', pricePerKg: 300};

	add(objArr, fruitNew);

	update(objArr);

    let fruitObj = fetch(objArr, name);

    return fruitObj;
};


module.exports = retrieve;
