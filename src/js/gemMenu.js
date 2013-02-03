function fileToArray(gemFile)
{
	var data = eval('(' + gemFile + ')');
	
	document.getElementById("test").innerHTML=data;
}

function immenseLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[0].level1[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 2: " + 
		array[0].Attack[0].ImmensePower[0].level1[1].ver2[4])); 
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 3: " + 
		array[0].Attack[0].ImmensePower[0].level1[2].ver3[4]));
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 4: " + 
		array[0].Attack[0].ImmensePower[0].level1[3].ver4[4]));
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 5: " + 
		array[0].Attack[0].ImmensePower[0].level1[4].ver5[4]));
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 6: " + 
		array[0].Attack[0].ImmensePower[0].level1[5].ver6[4]));
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 7: " + 
		array[0].Attack[0].ImmensePower[0].level1[6].ver7[4]));

	return;
}

function immenseLevel2DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[1].level2[0].ver1[4]));
		
	$("#gemType").append($("<option></option>").attr("value","ver2").text("Version 2: " + 
		array[0].Attack[0].ImmensePower[1].level2[1].ver2[4]));
}

function immenseLevel3DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[2].level3[0].ver1[4]));
}


function ironWallLevel1DropDown(array)
{
	$("#gemType").empty();
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[0].IronWall[0].level1[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 2: " + 
		array[1].Defense[0].IronWall[0].level1[1].ver2[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 3: " + 
		array[1].Defense[0].IronWall[0].level1[2].ver3[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 4: " + 
		array[1].Defense[0].IronWall[0].level1[3].ver4[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 5: " + 
		array[1].Defense[0].IronWall[0].level1[4].ver5[4]));
}

function ironWallLevel2DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[0].IronWall[1].level2[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 2: " + 
		array[1].Defense[0].IronWall[1].level2[1].ver2[4]));
}

function ironWallLevel3DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[0].IronWall[2].level3[0].ver1[4]));
}

function fortLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[1].Fortitude[0].level1[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 2: " + 
		array[1].Defense[1].Fortitude[0].level1[1].ver2[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 3: " + 
		array[1].Defense[1].Fortitude[0].level1[2].ver3[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 4: " + 
		array[1].Defense[1].Fortitude[0].level1[3].ver4[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 5: " + 
		array[1].Defense[1].Fortitude[0].level1[4].ver5[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 6: " + 
		array[1].Defense[1].Fortitude[0].level1[5].ver6[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 7: " + 
		array[1].Defense[1].Fortitude[0].level1[6].ver7[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 8: " + 
		array[1].Defense[1].Fortitude[0].level1[7].ver8[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 9: " + 
		array[1].Defense[1].Fortitude[0].level1[8].ver9[4]));
}

function fortLevel2DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));
}

/* wrong */
function divineSpeedLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));
}

/* wrong */
function divineSpeedLevel2DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));
}

/* wrong */
function divineSpeedLevel3DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));
}

function onslaughtLevel1DropDown(array)
{

}

function onslaughtLevel2DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[2].CrossGauge[0].bindslaught[1].level2[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 2: " + 
		array[2].CrossGauge[0].bindslaught[1].level2[1].ver2[4]));
}

function proficiencyLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[0].ver1[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 2: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[1].ver2[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 3: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[2].ver3[4]));
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 4: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[3].ver4[4]));
}

function proficiencyLevel3DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[2].CrossGauge[1].Proficiency[1].level3[0].ver1[4]));
}

function lifeForceLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[3].Vitality[0].LifeForce[0].level1[0].ver1[4]));
}

function harmonizeLevel1DropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[3].Vitality[1].Harmonize[0].level1[0].ver1[4]));	
}

function easyInputDropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[4].Assist[0].EasyInput[0].level1[0].ver1[4]));
}

function superEasyInputDropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[4].Assist[1].SuperEasyInput[0].level1[0].ver1[4]));
}

function canceAssistDropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[4].Assist[2].CancelAssist[0].level1[0].ver1[4]));
}

function autoThrowEscapeDropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[4].Assist[3].AutoThrowEscape[0].level1[0].ver1[4]));
}

function autoBlockDropDown(array)
{
	$("#gemType").append($("<option></option>").attr("value","ver1").text("Version 1: " + 
		array[4].Assist[4].AutoBlock[0].level1[0].ver1[4]));
}

function createPopUpWindow(gemtype, array)
{
	$("#gemType").empty();
	switch (gemtype)
	{
		case "immenseLevel1":

			immenseLevel1DropDown(array);				
			
			break;
		case "immenseLevel2":

			immenseLevel2DropDown(array);

			break;
		case "immenseLevel3":

			immenseLevel3DropDown(array);

			break;
		case "ironWallLevel1":

			ironWallLevel1DropDown(array);				

			break;
		case "ironWallLevel2":

			ironWallLevel2DropDown(array);


			break;
		case "ironWallLevel3":

			ironWallLevel3DropDown(array);
			break;

		case "fortLevel1":

			fortLevel1DropDown(array);
			break;

		case "fortLevel2":
			fortLevel2DropDown(array);

			break;

		case "divineSpeedLevel1":

			divineSpeedLevel1DropDown(array);

			break;
		case "divineSpeedLevel2":

			divineSpeedLevel2DropDown(array);
			break;

		case "divineSpeedLevel3":
			
			divineSpeedLevel3DropDown(array);
			break;

		/* update array index once speed gem object gets put into json file 1/1/2013 */
		case "onslaughtLevel1":
					
			onslaughtLevel1DropDown(array);
			break;

		case "onslaughtLevel2":
			
			onslaughtLevel2DropDown(array);
			break;

		case "proficiencyLevel1":

			proficiencyLevel1DropDown(array);
			break;

		/* make sure this is correct. Why is there only a level 3 in the website, but no level 2?
			Capcom, you're fucking up 1/1/2013
		*/
		case "proficiencyLevel2":

			proficiencyLevel2DropDown(array);
			break;

		case "lifeForceLevel1":

			lifeForceLevel1DropDown(array);
			break;

		case "harmonizeLevel1":

			harmonizeLevel1DropDown(array);
			break;

		case "easyInput":

			easyInputDropDown(array);
			break;

		case "superEasyInput":
			
			superEasyInputDropDown(array);
			break;

		case "canceAssist":
			
			canceAssistDropDown(array);
			break;

		case "autoThrowEscape":
			
			autoThrowEscapeDropDown(array);
			break;

		case "autoBlock":
			
			autoBlockDropDown(array);
			break;
	}
}