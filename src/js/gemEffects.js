/* arrays used when we have to reset values. Useful for remembering original values of stats */

/* TODO: CLEAN UP CODE. MAKE SMALLER FUNCTIONS SO THINGS ARE EASIER TO READ/FOLLOW*/

var damageValues = [];
var genAttr = [];
var meterGainValues = [];
var regExpAllNumbers = /[0-9]+/g;
var regExpAllMultipliers = /\d+(?!x)\d+/g;
//var regExpDamage = /[\d]+(,|x|f)|[\d]+/g;
var regExpDamage = /[\d]+(.|,|x|f)|[\d]+/g;

/* READY FUNCTION */
$(document).ready(function(){
	/* there has to be an easier way of doing this */
	
	$('#characterData .damage').each(function() 
	{
		damageValues.push($(this).html());
	});
	
	/* maybe there's a way to actually grab the html value of each class within this particular row? */

	/* in case we remove gems/reset values, keep original values in an array */
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

/* watch for any changes to the gem options and call a function immediately */
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

/* DAMAGE GEM FUNCTIONS */
function traverseDamageFields(gemTitle)
{
	var gemValue = 0;
	if (gemTitle == "immenseLvl1")
	{
		gemValue = 10;
		$('.damage').each(function()
		{
			if ( $(this).html() != "Damage")
			{
				if (containsNumber($(this).html()))
				{
					$(this).html(createNewDamageString($(this).html(), gemValue));
					
					if (gemValue > 0)
					{
                				$(this).css('color', 'green');
        				}
        				else
        				{
						$(this).css('color', 'red');
					}
				}
			}
		})
	}
	else if (gemTitle == "immenseLvl2")	
	{
		gemValue = 20;

		$('.damage').each(function()
		{
			if ( $(this).html() != "Damage")
			{
				if (containsNumber($(this).html()))
				{
					$(this).html(createNewDamageString($(this).html(), gemValue));
		                	if (gemValue > 0)
		                	{
		                	        $(this).css('color', 'green');
		                	}
		               		else
		                	{
		                	        $(this).css('color', 'red');
		                	}
				}
			}

		})		
		/* reduce speed here */
		calculateSpeedEffects(-10);
	}
	
	else if (gemTitle == "immenseLvl3")
	{
		gemValue = 30;
		$('.damage').each(function()
		{
			if ( $(this).html() != "Damage")
			{
				if (containsNumber($(this).html()))
				{
					$(this).html(createNewDamageString($(this).html(), gemValue));
					
					if (gemValue > 0)
					{
						$(this).css('color', 'green');
					}
					else
					{
						$(this).css('color', 'red');
					}
				}
			}

		})
	}
	return;
}

/* DEFENSE GEM FUNCTIONS */

/* SPEED GEM FUNCTIONS */

/* HEALTH GEM FUNCTIONS */

/* INPUT GEM FUNCTIONS */

/* USER CONFIG STUFF */

	
function calculateGemEffects(gemEffect)
{
	resetValuesWhileKeepingGemConfig();
	
	/* covering all gem types, since we aren't checking which gem was selected */	
	retraverseDamageFieldsGems();
	recalculateDefenseGems();
	recalculateSpeedGems();
	recalculateAssistGems();
	recalculateVitalityGems();		
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

		traverseDamageFieldsEffects(-10);
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
		calculateDefenseEffects(-8);
	}
	else if (gemTitle == "divineSpeedLvl3")
	{
		calculateSpeedEffects(20);
	}
	return; 
}

function calculateCrossGaugeGems(gemTitle)
{
	var gemValue = 0;
	if (gemTitle == "onslaughtLvl1"){
		gemValue = 20;
		$('.meter-gain').each(function(){
			
			$(this).html(createNewDamageString($(this).html(), gemValue));
			if (gemValue > 0)
			{
				$(this).css('color', 'green');
			}
			else
			{
				$(this).css('color', 'red');
			}

		})
	}
	else if (gemTitle == "onslaughtLvl2"){
		gemValue = 40
		$('.meter-gain').each(function()
		{
			$(this).html(createNewDamageString($(this).html(), gemValue));
			if (gemValue > 0)
			{
				$(this).css('color', 'green');
			}
			else
			{
				$(this).css('color', 'red');
			}
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
			calculateSpeedEffects(-10);
			/**** NOTE, FIGURE OUT A WAY TO MEASURE AMOUNT OF EX BAR USED BY CERTAIN MOVES *****/
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
        	})
	}
	return;
}

/* this function just writes HTML code */
function calculateVitalityGems(gemTitle)
{
	console.log("Vitality");

	if (gemTitle == "lifeForceLvl1")
	{
		$("#additionalEffects").append("<li> Gradually restore 80 points of HP for 5 seconds </li>");
	}
	
	else if (gemTitle == "harmonizeLvl1")
	{
		$("#additionalEffects").append("<li> Instally restore 80 points of HP </li>");
	}	
}

/* this function just writes HTML code */
function calculateAssistGems(gemTitle)
{
	console.log("Assist!");
	/* might cause a bug where strings may be written over again */
	if (gemTitle == "easyInput")
	{
		traverseDamageFieldsEffects(-10);
		$("#additionalEffects").append("<li> Special Moves become easier to do </li>");
	}
	
	else if (gemTitle == "superEasyInput")
        {
		traverseDamageFieldsEffects(-10)
                $("#additionalEffects").append("<li>Special Moves become very easy to do </li>");
        }
	
	else if (gemTitle == "cancelAssist")
        {
		traverseDamageFieldsEffects(-10)
		$("#additionalEffects").append("<li>Special Move cancels become easy to do</li>");
        }

	else if (gemTitle == "autoThrowEscape")
        {
		$("#additionalEffects").append("<li>Escape from throws automatically</li> <li> Cross Gauge decreases by 1/2 block when activated </li>");
        }
	
	else if (gemTitle == "autoBlock")
        {
		$("#additionalEffects").append("<li>Block Attacks automatically</li> <li> Cross Gauge decreases by 1 block when activated </li>");
        }
}

function retraverseDamageFieldsGems()
{
	traverseDamageFields($("#gems1").val());
	traverseDamageFields($("#gems2").val());
	traverseDamageFields($("#gems3").val());
		
	return;
}

function recalculateDefenseGems()
{
	calculateDefenseGems($("#gems1").val());
	calculateDefenseGems($("#gems2").val());
	calculateDefenseGems($("#gems3").val());
	return;
}

function recalculateSpeedGems()
{
	calculateSpeedGems($("#gems1").val());
	calculateSpeedGems($("#gems2").val());
	calculateSpeedGems($("#gems3").val());
	return;

}

function recalculateAssistGems()
{
	calculateAssistGems($("#gems1").val());
	calculateAssistGems($("#gems2").val());
	calculateAssistGems($("#gems3").val());

}

function recalculateVitalityGems()
{
        calculateVitalityGems($("#gems1").val());
        calculateVitalityGems($("#gems2").val());
        calculateVitalityGems($("#gems3").val());

}

/* these effect functions exist because gems have secondary effects on
certain character features */

function calculateSpeedEffects(value)
{	
	console.log("speed reduce: " + value);
	/* walk speed values are in percentage. */
	var fwalk = parseInt($(".fwalkspeed").html());
	fwalk+=value;
	fwalk+="%";
	$(".fwalkspeed").html(fwalk);
	
	var bwalk = parseInt($(".bwalkspeed").html());
        bwalk+=value;
        bwalk+="%";
        $(".bwalkspeed").html(bwalk);
	
	if (value < 0)
	{
		$(".fwalkspeed").css("color", "red");
		$(".bwalkspeed").css("color", "red");
		$(".btotalframe").css("color", "red");
		$(".bairframe").css("color", "red");
		$(".bgroundframe").css("color", "red");
		$(".binvulframe").css("color", "red");
		$(".fdashframe").css("color", "red");
		$(".vjumpframe").css("color", "red");
		$(".djumpframe").css("color", "red");
	}
	else
	{
		$(".fwalkspeed").css("color", "green");
		$(".bwalkspeed").css("color", "green");
		$(".btotalframe").css("color", "green");
		$(".bairframe").css("color", "green");
		$(".bgroundframe").css("color", "green");
		$(".binvulframe").css("color", "green");
		$(".fdashframe").css("color", "green");
		$(".vjumpframe").css("color", "green");
		$(".djumpframe").css("color", "green");
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
	var btotalframe = parseInt($(".btotalframe").html());
	var bairframe = parseInt($(".bairframe").html());
	var bgroundframe = parseInt($(".bgroundframe").html());
	var binvulframe = parseInt($(".binvulframe").html());
	
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

		var regResult = $(".vjumpframe").html().match(regExpAllNumbers);
		var newString = "";
		console.log(regResult);
		
		/* shouldnt ever be 0, but let's be careful just in case */
		if (regResult.length > 1)
		{
			console.log("Loop: " + regResult[0]);
			console.log("Loop: " + regResult[1]);
				
			var result1 = parseInt(regResult[0]);
			perVal = parseInt(result1 * value);
			result1+=perVal;
	
			var result2 = parseInt(regResult[1]);
			perVal = parseInt(result2 * value);
			result2+=perVal;
			newString = result1 + "(" + result2 + ")";
			$(".vjumpframe").html(newString);
		}
	
		var regResult = $(".djumpframe").html().match(regExpAllNumbers);

                if (regResult != null)
                {
                        var newString = "";
                        console.log(regResult);

                        if (regResult.length > 1)
                        {
                                console.log("Loop: " + regResult[0]);
                                console.log("Loop: " + regResult[1]);

                                var result1 = parseInt(regResult[0]);
                                perVal = parseInt(result1 * value);
                                result1+=perVal;

                                var result2 = parseInt(regResult[1]);
                                perVal = parseInt(result2 * value);
                                result2+=perVal;

                                newString = result1 + "(" + result2 + ")";
                                $(".djumpframe").html(newString);
                        }
                }
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
	
		var regResult = $(".vjumpframe").html().match(regExpAllNumbers);
		var newString = "";
		console.log(regResult);
		
		/* shouldnt ever be 0, but let's be careful just in case */
		if (regResult.length > 1)
		{
			console.log("Loop: " + regResult[0]);
			console.log("Loop: " + regResult[1]);
				
			var result1 = parseInt(regResult[0]);
			perVal = parseInt(result1 * value);
			result1+=perVal;
	
			var result2 = parseInt(regResult[1]);
			perVal = parseInt(result2 * value);
			result2+=perVal;
			newString = result1 + "(" + result2 + ")";
			$(".vjumpframe").html(newString);
		}
	
		var regResult = $(".djumpframe").html().match(regExpAllNumbers);

                if (regResult != null)
                {
                        var newString = "";
                        console.log(regResult);

                        if (regResult.length > 1)
                        {
                                console.log("Loop: " + regResult[0]);
                                console.log("Loop: " + regResult[1]);

                                var result1 = parseInt(regResult[0]);
                                perVal = parseInt(result1 * value);
                                result1+=perVal;

                                var result2 = parseInt(regResult[1]);
                                perVal = parseInt(result2 * value);
                                result2+=perVal;

                                newString = result1 + "(" + result2 + ")";
                                $(".djumpframe").html(newString);
                        }
                }

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
	
	return;
}

function traverseDamageFieldsEffects(value)
{
	$('.damage').each(function(){
	
		if ($(this).html() == "Damage")
		{
			$(this).css('color', 'black');
			return;
		}
		
		if (containsNumber($(this).html()))
		{
			$(this).html(createNewDamageString($(this).html(), value));
			if (value > 0)
			{
				$(this).css('color', 'green');
			}
			else
			{
				$(this).css('color', 'red');
			}
		}
	})
	
}

function containsNumber(string)
{
        return /\d/.test(string);
}


function calculateDefenseEffects(value)
{
        console.log("defense reduce: " + value);

        if (value < 0)
        {
                value/=100;

                $('.health').css('color', 'red');
        }
        else
        {
                value/=100;

                $('.health').css('color', 'green');
        }
        console.log("new reduce: " + value);
        $('.health').each(function(){
                console.log($(this).html());

                if ($(this).html() == "Health")
                {
                        $(this).css('color', 'black');
                        return;
                } 
                else
                {
                        var newValue = parseFloat($(this).html());
                        newValue = (newValue * value) + newValue;
                        $(this).html(newValue);
                }
         })
}

function resetValuesWhileKeepingGemConfig()
{
	resetDamageValues();
	resetSpeedValues();
	resetDefenseValues();
	resetAssistGemEffects();
	resetVitalityGemEffects();
}

function resetAssistGemEffects()
{
	$("#additionalEffects").empty();
}

function resetVitalityGemEffects()
{
	$("#additionalEffects").empty();
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
	$(".fdashframe").html(genAttr[7]);
	$(".fwalkspeed").css("color", "black");
        $(".bwalkspeed").css("color", "black");
	$(".btotalframe").css("color", "black");
	$(".bairframe").css("color", "black");
	$(".bgroundframe").css("color", "black");
	$(".binvulframe").css("color", "black");

	$(".pjumpframe").html(genAttr[8]);
	$(".vjumpframe").html(genAttr[9]);
	$(".djumpframe").html(genAttr[10]);

	$(".pjumpframe").css("color", "black");
	$(".vjumpframe").css("color", "black");
	$(".djumpframe").css("color", "black");
	$(".fdashframe").css("color", "black");
	
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
	else if (string.contains("("))
	{
		var numbers = []
		var indexOpen = $(this).html().indexOf('(', 0);
		var indexClose = $(this).html().indexOf(')', 0);
		numbers.push($(this).html().substring(0, indexOpen));
		numbers.push($(this).html().substring(indexClose+1, length($(this).html())));
		return numbers; 
	}
	
	/* note, this covers a small case. Must take into account multiple delimators. Use regular
	expression? 
	*/
	else if (string.contains(","))
	{
			var numbers = []
			var comma = $(this).html().indexOf(',', 0);
			numbers.push($(this).html().substring(0, comma));
			numbers.push($(this).html().substring(comma+1, length($(this).html())));
			return numbers;
	}
}

/* Download / Upload stuff 
THESE FUNCTIONS CURRENTLY DONT WORK */
function downloadGemConfig()
{
	alert("You wish to download your current gem loadout");
}

function uploadGemConfig()
{
	alert("You wish to upload your current gem loadout");
}
	
