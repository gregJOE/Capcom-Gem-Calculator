var damageValues = [];

$(document).ready(function(){
	/* there has to be an easier way of doing this */
	
	$('#characterData .damage').each(function() {
               	damageValues.push($(this).html());
        });

	console.log("Ready");
});

$('#gems1').live('change', function(){
	var val = $("#gems1").val();
	calculateGemEffects(val);
});

$('#gems2').live('change', function(){
	var val = $("#gems2").val();
	calculateGemEffects(val);		
});

$('#gems3').live('change', function(){
	var val = $("#gems3").val();
	calculateGemEffects(val);	
});

function calculateGemEffects(gemEffect)
{
	if (gemEffect == "immenseLvl1" || gemEffect == "immenseLvl2" || gemEffect == "immenseLvl3")
	{
		/* recalculate Damage values */
		calculateDamage(gemEffect, true);
		console.log(gemEffect);
		if (gemEffect == "immenseLvl2")
		{
			/* reduce speed here */
                        calculateSpeedEffects(-10);
		}
		/* check the other gems to see if they're damage gems as well */
	}
	else
	{	/* if its "none", check if the damage column was changed. For now, assume it was */
		if (gemEffect == "none")
		{
			resetDamageValues();
		}
		/* calculate other gems effects */
	}
	return;	
}

function resetConfiguration()
{
	console.log("resetting everything");
	resetDamageValues();
	resetSpeedValues();
	resetDefenseValues();
	resetCrossGaugeValues();
	
	$('#gems1').val("none");
	$('#gems2').val("none");
	$('#gems3').val("none");
	return;
}


function calculateDamage(gemTitle, reset)
{
	if (reset == true)
	{
		resetDamageValues();
	}
	if (gemTitle == "immenseLvl1"){
		$('.damage').each(function(){
			console.log($(this).html());
			
			if ($(this).html() == "Damage")
			{
				return;
			}

			else if(($(this).is(":contains(',')" )))
			{
				var newString = "";
				var array = $(this).html().split(',');
				for (var i = 0; i < array.length; ++i)
				{
					console.log("Loop: " + array[i]);
					var value = parseFloat(array[i]);
					value = (value * (0.10)) + value; 
					newString = newString + value + ", ";
				}	
				newString = newString.substring(0,newString.length-2);			
				$(this).html(newString);	
			}
			else
			{
				var value = parseFloat($(this).html());
				value = (value * (0.10)) + value;
				$(this).html(value);

			}
			
			$(this).css({ 'color': 'green'});
		})
	}
	else if (gemTitle == "immenseLvl2"){
		$('.damage').each(function()
		{
			console.log($(this).html());
			
			if ($(this).html() == "Damage")
			{
				return;
			}
			else if(($(this).is(":contains(',')" )))
			{
				var newString = "";
				 var array = $(this).html().split(',');
				 for (var i = 0; i < array.length; ++i)
				 {
					 var value = parseFloat(array[i]);
					 value = (value * (0.20)) + value;
					 newString = newString + value + ", ";
				 }
				 
				 newString = newString.substring(0,newString.length-2);
				 $(this).html(newString);
			}
			else
			{
				var value = parseFloat($(this).html());
				value = (value * (0.20)) + value;
				$(this).html(value);
			}
			$(this).css({ 'color': 'green'});

			/* reduce speed here */
		})
	}
	
	else if (gemTitle == "immenseLvl3"){
		$('.damage').each(function()
		{
			if ($(this).html() == "Damage")
			{
				return;
			}

			/* take the numbers of an an entire string, and put it back into the original string */
			else if(($(this).is(":contains(',')" )))
			{
				var newString = "";
				var array = $(this).html().split(',');
				for (var i = 0; i < array.length; ++i)
				{
					var value = parseFloat(array[i]);
					value = (value * (0.30)) + value;
					newString = newString + value + ", ";
				}
				newString = newString.substring(0,newString.length-2);
				$(this).html(newString);
			}
			else
			{
				 var value = parseFloat($(this).html());
				 value = (value * (0.30)) + value;
				 $(this).html(value);
			}
			$(this).css({ 'color': 'green'});
		})	
	}
	return;
}

function calculateSpeedEffects(value)
{	
	console.log("speed reduve");
	/* walk speed values are in percentage. */
	var fwalk = parseFloat($(".fwalkspeed").html());
	fwalk+=value;
	fwalk+="%";
	$(".fwalkspeed").html(fwalk);
	
	var bwalk = parseFloat($("bfwalkspeed").html());
        bwalk+=value;
        bwalk+="%";
        $(".bwalkspeed").html(bwalk);

	/* convert value to decimal	
	var binvulframe = parseFloat($(".binvulframe").html());
	value*=-1;
	value/=100;
	var p = binvulframe*=value;
	binvulframe+=p;
	console.log(binvulframe);
        $(".binvulframe").html(binvulframe);
	*/

	var btotalframe = parseFloat($(".btotalframe").html());
	var bairframe = parseFloat($(".bairframe").html());
	var bgroundframe = parseFloat($(".bgroundframe").html());
	var binvulframe = parseFloat($(".binvulframe").html());
	if (value < 0)
	{	
		value*=-1;
		value/=100;
		var perVal = btotalframe*value;
		btotalframe+=perVal;

		perVal = bairframe*value;
		bairframe+=perVal;
		
		perVal = bgroundframe*value;
		bgroundframe+=perVal;
		
		perVal = binvulframe*value;
                binvulframe+=perVal;

	}
	else
	{
		value/=100;
		var perVal = btotalframe*=value;
                btotalframe-=perVal;

		perVal = bairframe*value;
                bairfame-=perVal;

                perVal = bgroundframe*value;
                bgroundframe-=perVal;
		
		perVal = binvulframe*value;
                binvulframe-=perVal;

	}
	console.log(btotalframe);
	console.log(bairframe);
	console.log(bgroundframe);
	console.log(binvulframe);
	btotalframe = parseInt(btotalframe);
	bairframe = parseInt(bairframe);
	bgroundframe = parseInt(bgroundframe);
	binvulframe = parseInt(binvulframe);
	
	$(".btotalframe").html(btotalframe);
	$(".bairframe").html(bairframe);
	$(".bgroundframe").html(bgroundframe);
	$(".binvulframe").html(binvulframe);
	
	
	return;
}
function resetSpeedValues()
{
	return;
}

function resetDefenseValues()
{
	return;
}

function resetCrossGaugeValues()
{
	return;
}

function resetDamageValues()
{
	console.log("Reset");
	$i = 1;
	$('.damage').each(function()
	{
		if ($(this).html() == "Damage")
		{
			return;
		}
		else
		{
			$(this).html(damageValues[$i]);
			$i++;
		}
		$(this).css({ 'color': 'black'});
	});
	return;
}

function returnDamageValueFromString(string, delminator)
{
	if (string.contains("x"))
	{
		var number = $(this).html().substring(0, ($(this).html().indexOf('x', 0)));
		return number;
	}

}
/* Download / Upload stuff */
function downloadGemConfig()
{
	alert("You wish to download your current gem loadout");
}

function uploadGemConfig()
{
	alert("You wish to upload your current gem loadout");
}
	
