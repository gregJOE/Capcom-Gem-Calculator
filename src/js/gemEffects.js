/* arrays used when we have to reset values. Useful for remembering original values of stats */
var damageValues = [];
var genAttr = [];
var meterGainValues = [];

$(document).ready(function(){
	/* there has to be an easier way of doing this */
	
	$('#characterData .damage').each(function() {
               	damageValues.push($(this).html());
        });
	
	/* maybe there's a way to actually grab the html value of each class within this particular row? */
	genAttr.push($('.health').html());
	genAttr.push($('.fwalkspeed').html());
	genAttr.push($('.bwalkspeed').html());
 	genAttr.push($('.binvulframe').html());
 	genAttr.push($('.bairframe').html());
	genAttr.push($('.bgroundframe').html());
	genAttr.push($('.btotalframe').html());
	genAttr.push($('.fdashframe').html());
	genAttr.push($('.pjumpframe').html());
	genAttr.push($('.vjumpframe').html());
	genAttr.push($('.djumpframe').html());
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
		recalculateDamageGems();
		console.log(gemEffect);
		if (gemEffect == "immenseLvl2")
		{
			/* reduce speed here */
                        calculateSpeedEffects(-10);
		}
		/* check the other gems to see if they're damage gems as well */
	}
	else if (gemEffect == "ironWallLvl1" || gemEffect == "ironWallLvl2" || gemEffect == "ironWallLvl3" || gemEffect == "fortLvl1" || gemEffect == "fortLvl2")
	{
		console.log("hi");
		/* health temporarily increases? */
		calculateDefenseGems(gemEffect);
	}
	else if (gemEffect == "divineSpeedLvl1" || gemEffect == "divineSpeedLvl2" || gemEffect == "divineSpeedLvl3")
	{
		recalculateSpeedGems();
	}
	else if (gemEffect == "onslaughtLvl1" || gemEffect == "onslaughtLvl2" || gemEffect == "profLvl1" || gemEffect == "profLvl3")
	{
		calculateCrossGaugeGems(gemEffect);
	}
	else if (gemEffect == "lifeLvl1" || gemEffect == "harmLvl1")
	{
		calculateVitalityGems(gemEffect);
	}
	else if (gemEffect == "easyInput" || gemEffect == "superEasyInput" == gemEffect == "cancel" || gemEffect == "autoThrow" || gemEffect == "autoBlock")
	{
		calculateAssistGems(gemEffect);
	}
	else
	{	/* if its "none", check if the damage column was changed. For now, assume it was */
		if (gemEffect == "none")
		{
			recalculateDamageGems();
			recalculateDefenseGems();
			recalculateSpeedGems();
		}
		/* calculate other gems effects */
	}
	return;	
}

function resetConfiguration(gemSlot)
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

function calculateDefenseGems(gemTitle)
{
	console.log(gemTitle);
	var health = parseFloat($('.health').html());
	if (gemTitle == "ironWallLvl1")
	{
		health = (health * (0.10)) + health;
		$('.health').css("color", "green");
	}
	else if (gemTitle == "ironWallLvl2")
        {
                health = (health * (0.20)) + health;
		$('.health').css("color", "green");
        }
	else if (gemTitle == "ironWallLvl3")
        {
                health = (health * (0.30)) + health;
		$('.health').css("color", "green");
        }

	else if (gemTitle == "fortLvl1")
	{
		console.log("fort");
                health = health + 100;
		$('.health').css("color", "green");
	}
	else if (gemTitle == "fortLvl2")
	{
                health = health + 160;
		$('.health').css("color", "green");
	}
	console.log(health);
	$('.health').html(health);
	return;
}

function calculateSpeedGems(gemTitle)
{
	console.log(gemTitle);
	
	if (gemTitle == "divineSpeedLvl1")
	{
		calculateSpeedEffects(10);
	}
	else if (gemTitle == "divineSpeedLvl2")
	{
		calculateSpeedEffects(15);
		/* function here to reduce defense numbers by 8% */
	}
	else if (gemTitle == "divineSpeedLvl3")
	{
		calculateSpeedEffects(20);
	}
	return; 
}

function calculateCrossGaugeGems(gemTitle)
{
	if (gemTitle == "onslaughtLvl1"){
		$('.meter-gain').each(function(){
			console.log($(this).html());
			
			if ($(this).html() == "Meter-Gain")
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
			
			$(this).css('color', 'green');
		})
	}
	else if (gemTitle == "onslaughtLvl2"){
		$('.meter-gain').each(function()
		{
			console.log($(this).html());
			
			if ($(this).html() == "Meter-Gain")
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
					 value = (value * (0.40)) + value;
					 newString = newString + value + ", ";
				 }
				 
				 newString = newString.substring(0,newString.length-2);
				 $(this).html(newString);
			}
			else
			{
				var value = parseFloat($(this).html());
				value = (value * (0.40)) + value;
				$(this).html(value);
			}
			$(this).css('color', 'green');

			/* reduce speed here */
		})
	}
	
	else if (gemTitle == "proficiencyLvl1"){
		$('.meter-gain').each(function()
		{
			if ($(this).html() == "Meter-Gain")
			{
				return;
			}
			
			/* reduce speed by 10% */
			
			/**** NOTE, FIGURE OUT A WAY TO MEASURE AMOUNT OF EX BAR USED BY CERTAIN MOVES *****/
			/* take the numbers of an an entire string, and put it back into the original string
			else if(($(this).is(":contains(',')" )))
			{
				var newString = "";
				var array = $(this).html().split(',');
				for (var i = 0; i < array.length; ++i)
				{
					var value = parseFloat(array[i]);
					value = (value * (-0.0)) + value;
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
			$(this).css('color', 'green'); */
		})	
	}

	else if (gemTitle == "proficiencyLvl2"){
                $('.meter-gain').each(function()
                {
                        if ($(this).html() == "Meter-Gain")
                        {
                                return;
                        }
			
			/* reduce speed by 10% */

                        /**** NOTE, FIGURE OUT A WAY TO MEASURE AMOUNT OF EX BAR USED BY CERTAIN MOVES *****/

                        /* take the numbers of an an entire string, and put it back into the original string
                        else if(($(this).is(":contains(',')" )))
                        {
                                var newString = "";
                                var array = $(this).html().split(',');
                                for (var i = 0; i < array.length; ++i)
                                {
                                        var value = parseFloat(array[i]);
                                        value = (value * (0.40)) + value;
                                        newString = newString + value + ", ";
                                }
                                newString = newString.substring(0,newString.length-2);
                                $(this).html(newString);
                        }
                        else
                        {
                                 var value = parseFloat($(this).html());
                                 value = (value * (0.40)) + value;
                                 $(this).html(value);
                        }
                        $(this).css('color', 'green');
			*/
                })
        }
	return;
}


/* this function just writes HTML code */
function calculateVitalityGems(gemTitle)
{
	
}

/* this function just writes HTML code */
function calculateAssistGems(gemTitle)
{

}

function calculateDamage(gemTitle)
{
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
			
			$(this).css('color', 'green');
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
			$(this).css('color', 'green');

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
			$(this).css('color', 'green');
		})	
	}
	return;
}

function recalculateDamageGems()
{
	resetDamageValues();
		
	calculateDamage($("#gems1").val());
	calculateDamage($("#gems2").val());
	calculateDamage($("#gems3").val());
		
	return;
}

function recalculateDefenseGems()
{
        resetDefenseValues();

        calculateDefenseGems($("#gems1").val());
	calculateDefenseGems($("#gems2").val());
	calculateDefenseGems($("#gems3").val());
	return;
}

function recalculateSpeedGems()
{
	resetSpeedValues();
	
	calculateSpeedGems($("#gems1").val());
        calculateSpeedGems($("#gems2").val());
        calculateSpeedGems($("#gems3").val());
	return;

}
/* these effect functions exist because gems have secondary effects on
certain character features */

function calculateSpeedEffects(value)
{	
	console.log("speed reduce: " + value);
	/* walk speed values are in percentage. */
	var fwalk = parseFloat($(".fwalkspeed").html());
	fwalk+=value;
	fwalk+="%";
	$(".fwalkspeed").html(fwalk);
	
	var bwalk = parseFloat($(".bwalkspeed").html());
        bwalk+=value;
        bwalk+="%";
        $(".bwalkspeed").html(bwalk);
	
	if (value < 0)
	{
		$(".fwalkspeed").css("color", "red");
		$(".bwalkspeed").css("color", "red");
	}
	else
	{
		$(".fwalkspeed").css("color", "green");
                $(".bwalkspeed").css("color", "green");
	}
	/* convert value to decimal	
	var binvulframe = parseFloat($(".binvulframe").html());
	value*=-1;
	value/=100;
	var p = binvulframe*=value;
	binvulframe+=p;
	console.log(binvulframe);
        $(".binvulframe").html(binvulframe);
	*/

	/* change backwards walk speed */
	var btotalframe = parseFloat($(".btotalframe").html());
	var bairframe = parseFloat($(".bairframe").html());
	var bgroundframe = parseFloat($(".bgroundframe").html());
	var binvulframe = parseFloat($(".binvulframe").html());
	
	if (value < 0)
	{	
		value*=-1;
		value/=100;
		var perVal = 0
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
		var perVal = 0

		perVal = bairframe*value;
                bairframe-=perVal;

                perVal = bgroundframe*value;
                bgroundframe-=perVal;
		
		perVal = binvulframe*value;
                binvulframe-=perVal;

	}
	console.log(bairframe);
	console.log(bgroundframe);
	console.log(binvulframe);
	bairframe = parseInt(bairframe);
	bgroundframe = parseInt(bgroundframe);
	binvulframe = parseInt(binvulframe);
	btotalframe = bairframe+bgroundframe+binvulframe;
	console.log(btotalframe);

	$(".btotalframe").html(btotalframe);
	$(".bairframe").html(bairframe);
	$(".bgroundframe").html(bgroundframe);
	$(".binvulframe").html(binvulframe);
	
	if (value < 0)
	{
		$(".btotalframe").css("color", "red");
        	$(".bairframe").css("color", "red");
        	$(".bgroundframe").css("color", "red");
        	$(".binvulframe").css("color", "red");
	}
	else
	{
                $(".btotalframe").css("color", "green");
                $(".bairframe").css("color", "green");
                $(".bgroundframe").css("color", "green");
                $(".binvulframe").css("color", "green");
	}	
	return;
}
function resetSpeedValues()
{
	console.log("Reset Speed");
	$(".fwalkspeed").html(genAttr[1]);
	$(".bwalkspeed").html(genAttr[2]);
	$(".btotalframe").html(genAttr[6]);
        $(".bairframe").html(genAttr[4]);
        $(".bgroundframe").html(genAttr[5]);
        $(".binvulframe").html(genAttr[3]);

	$(".fwalkspeed").css("color", "black");
        $(".bwalkspeed").css("color", "black");
	$(".btotalframe").css("color", "black");
	$(".bairframe").css("color", "black");
	$(".bgroundframe").css("color", "black");
	$(".binvulframe").css("color", "black");
	return;	
}

function resetDefenseValues()
{
	console.log("Reset");

        $('.health').html(genAttr[0]);
        $('.health').css('color', 'black');
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
		$(this).css('color', 'black');
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
	
