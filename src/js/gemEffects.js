/* arrays used when we have to reset values. Useful for remembering original values of stats */

/* TODO: CLEAN UP CODE. MAKE SMALLER FUNCTIONS SO THINGS ARE EASIER TO READ/FOLLOW*/

var damageValues = [];
var genAttr = [];
var meterGainValues = [];
var gemInfo = [];

var regExpAllNumbers = /[0-9]+/g;
var regExpAllMultipliers = /\d+(?!x)\d+/g;
//var regExpDamage = /[\d]+(,|x|f)|[\d]+/g;
var regExpDamage = /[\d]+(.|,|x|f)|[\d]+/g;

var UserGem1 = null;
var UserGem2 = null;
var UserGem3 = null;

/* READY FUNCTION */
$(document).ready(function(){
	/* there has to be an easier way of doing this */
	$('#characterData .damage').each(function() 
	{
		damageValues.push($(this).html());
	});

	$( "#dialog-form1" ).dialog({
		autoOpen: false,
		height: 300,
		width: 350,
		modal: true,
		buttons: 
		{
			"Submit": 
				function() 
				{
					$( this ).dialog( "close" );
					UserGem1.gemInfo = UserGem1.selectedGemVersion($("#gemType1").val());
					calculateGemEffects();
				},
			Cancel: 
				function() 
				{
					$( this ).dialog( "close" );
				}
		},
		close: function() {

		}
	});

	$( "#dialog-form2" ).dialog({
		autoOpen: false,
		height: 300,
		width: 350,
		modal: true,
		buttons: 
		{
			"Submit": 
				function() 
				{
					$( this ).dialog( "close" );
					UserGem2.gemInfo = UserGem2.selectedGemVersion($("#gemType2").val());
					calculateGemEffects();
				},
			Cancel: 
				function() 
				{
					$( this ).dialog( "close" );
				}
		},
		close: function() {

		}
	});

	$( "#dialog-form3" ).dialog({
		autoOpen: false,
		height: 300,
		width: 350,
		modal: true,
		buttons: 
		{
			"Submit": 
				function() 
				{
					$( this ).dialog( "close" );
					UserGem3.gemInfo = UserGem3.selectedGemVersion($("#gemType3").val());
					calculateGemEffects();
				},
			Cancel: 
				function() 
				{
					$( this ).dialog( "close" );
				}
		},
		close: function() {

		}
	});
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



/* watch for any changes to the gem options and call a function immediately */
	$('#gems1').on('change', function(){
		var gem, gemType;

		gem = $("#gems1").val();
		gemType = '';

		/* put this into a function 2/3/2013 */
		if (gem !== "none")
		{
			$.getJSON('../../json/gems.json', function(data) 
			{
				/* data is the entire gems json object with about 5 arrays */
				$.each(data, function(key, val) {
					UserGem1 = createPopUpWindow(gem, val, "1", UserGem1);
				});
			
				/* have this return a value before the calculate gemEffects function gets called. Maybe this needs a callback??? */
				$( "#dialog-form1" ).dialog("open");
			});
		}
		else
		{
			$("#gemType1").val("None");
		}
	});

	$('#gems2').on('change', function(){
		var gem, gemType;

		gem = $("#gems2").val();
		gemType = '';

		/* put this into a function 2/3/2013 */
		if (gem !== "none")
		{
			$.getJSON('../../json/gems.json', function(data) 
			{
				$.each(data, function(key, val) 
				{
					UserGem2 = createPopUpWindow(gem, val, "2", UserGem2);
				});
			
			
				/* have this return a value before the calculate gemEffects function gets called. Maybe this needs a callback??? */
				$( "#dialog-form2" ).dialog("open");
			});
		}
		else
		{
			$("#gemType2").val("None");
		}
	});

	$('#gems3').on('change', function(){
		var gem, gemType;

		gem = $("#gems3").val();
		gemType = '';

		/* put this into a function 2/3/2013 */
		if (gem !== "none")
		{
			$.getJSON('../../json/gems.json', function(data) 
			{
				$.each(data, function(key, val) 
				{
					UserGem3 = createPopUpWindow(gem, val, "3", UserGem3);
				});
			
			
				/* have this return a value before the calculate gemEffects function gets called. Maybe this needs a callback??? */
				$( "#dialog-form3" ).dialog("open");
			});
		}
		else
		{
			$("#gemType3").val("None");
		}
		calculateGemEffects();
	});
});


/* DAMAGE GEM FUNCTIONS */
function traverseDamageFields(gemEffect)
{
	console.log(gemEffect);
	$('.damage').each(function(){
	
		if ($(this).html() == "Damage")
		{
			$(this).css('color', 'black');
			return;
		}
		console.log($(this).html());
		if (containsNumber($(this).html()))
		{
			$(this).html(createNewDamageString($(this).html(), gemEffect));
			if (gemEffect > 0)
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

function retraverseDamageFieldsGems()
{
	traverseDamageFields(UserGem1.gemInfo[1].Attack);
	//traverseDamageFields(UserGem2.gemInfo[1].Attack);
	//traverseDamageFields(UserGem3.gemInfo[1].Attack);
		
	return;
}
/* DEFENSE GEM FUNCTIONS */

/* SPEED GEM FUNCTIONS */

/* HEALTH GEM FUNCTIONS */

/* INPUT GEM FUNCTIONS */

/* USER CONFIG STUFF */
	
function calculateGemEffects()
{
	console.log("calculate");
	resetValuesWhileKeepingGemConfig();
	if (UserGem1 !== null)
	{
		switch (UserGem1.category)
		{
			case "Attack":
				traverseDamageFields(UserGem1.gemInfo[1].Attack);
				break;
			case "Defense":
				if (UserGem1.gemInfo[1].Defense !== undefined)
				{
					console.log(UserGem1.gemInfo[1].Defense);
					traverseDefenseFieldsEffects(UserGem1.gemInfo[1].Defense);
				}
				else
				{
					traverseDefenseFieldsEffects(UserGem1.gemInfo[1].DamageReduction); 
				}
				break;
			case "CrossGauge":
				/*traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeAcquisition);
				traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeUsageReduction); */
				break;
			case "Vitality":
				/*traverseDamageFields(UserGem1.gemInfo[1].VitalityGradualRestoration);
				traverseDamageFields(UserGem1.gemInfo[1].VitalityInstantRestoration);*/
				break;
			case "Assist":
				/*traverseDamageFields(UserGem1.gemInfo[1].Attack);*/
				break;								
		}
	}

	if (UserGem2 !== null)
	{
		switch (UserGem2.category)
		{
			case "Attack":
				traverseDamageFields(UserGem2.gemInfo[1].Attack);
				break;
			case "Defense":
				/* traverseHealthFields(UserGem1.gemInfo[1].Defense);
				traverseHealthFields(UserGem1.gemInfo[1].DamageReduction); 
				*/
				break;
			case "CrossGauge":
				/*traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeAcquisition);
				traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeUsageReduction); */
				break;
			case "Vitality":
				/*traverseDamageFields(UserGem1.gemInfo[1].VitalityGradualRestoration);
				traverseDamageFields(UserGem1.gemInfo[1].VitalityInstantRestoration);*/
				break;
			case "Assist":
				/*traverseDamageFields(UserGem1.gemInfo[1].Attack);*/
				break;								
		}
	}

	if (UserGem3 !== null)
	{
		switch (UserGem3.category)
		{
			case "Attack":
				traverseDamageFields(UserGem3.gemInfo[1].Attack);
				break;
			case "Defense":
				/* traverseHealthFields(UserGem1.gemInfo[1].Defense);
				traverseHealthFields(UserGem1.gemInfo[1].DamageReduction); 
				*/
				break;
			case "CrossGauge":
				/*traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeAcquisition);
				traverseDamageFields(UserGem1.gemInfo[1].CrossGaugeUsageReduction); */
				break;
			case "Vitality":
				/*traverseDamageFields(UserGem1.gemInfo[1].VitalityGradualRestoration);
				traverseDamageFields(UserGem1.gemInfo[1].VitalityInstantRestoration);*/
				break;
			case "Assist":
				/*traverseDamageFields(UserGem1.gemInfo[1].Attack);*/
				break;								
		}
	}
	return;	
}

/* these effect functions exist because gems have secondary effects on
certain character features */

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

function traverseDefenseFieldsEffects(value)
{
	$('.health').each(function(){
		
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

	/* UserGem1 = clear */
	/* UserGem2 = clear */
	/* UserGem3 = clear */
	return;
}

function resetValuesWhileKeepingGemConfig()
{
	resetDamageValues();
	//resetSpeedValues();
	resetDefenseValues();
	//resetAssistGemEffects();
	//resetVitalityGemEffects();
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