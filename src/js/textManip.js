function createNewDamageString(string, gemValue)
{
	console.log(string);	
	var regResult = string.match(regExpDamage);
	if (regResult != null)
	{
		var newDamageString = "";
		console.log(regResult);
		
		if (regResult.length > 1)
		{
			var newDamageString = calculateAndBuildMultiStringDamage(regResult, gemValue);
			console.log(newDamageString);
			
			console.log(newDamageString.lastIndexOf(","))
			console.log(newDamageString.length)
			/* have this function trim if there's a comma */
			if (newDamageString.lastIndexOf(",") == newDamageString.length-1)
			{
				newDamageString = newDamageString.substring(0,newDamageString.length-1);
			}
			return newDamageString;
		}
		else
		{	
			var newDamageString = calculateSingleStringDamage(regResult, gemValue);
			console.log(newDamageString)
			return newDamageString;
		}
	}
	else
	{
		var newDamageString = calculateSingleStringDamage(regResult, gemValue);
		return newDamageString;
	}
}

function checkIfMultiplier(string)
{
	if (string.indexOf("x") != -1)
	{
		return true;
	}
	return false; 
}

function calculateSingleStringDamage(data, gemValue)
{
	var percentage = gemValue / 100.0
	data = parseFloat(data);
	return parseInt((data * percentage) + data)
}

function calculateAndBuildMultiStringDamage(data, gemValue)
{
	console.log(data);
	var newString = ""
	var isMultiplier = false;
	for (var i = 0; i < data.length; i++)
	{
		console.log("char: " + data[i]);
		if (data[i] == undefined)
		{
			break;
		}
		
		if (isMultiplier)
		{
			newString = newString + data[i];
			isMultiplier = false;
			continue;
		}
		else
		{
			/* if checkIfMultiplier(data[i]) */
			if (data[i].indexOf("x") != -1)
			{
				isMultiplier = true;
				var value = calculateSingleStringDamage(data[i], gemValue)
				newString = newString + value + "x";
			}
			else if (data[i].indexOf("/") != -1)
			{
				var value = calculateSingleStringDamage(data[i], gemValue)
                                newString = newString + value + "/";
			}	
			else
			{
				var value = calculateSingleStringDamage(data[i], gemValue)
				newString = newString + value + ",";
			}
		}
	}
	console.log("Result: " + newString);
	return newString;
}
