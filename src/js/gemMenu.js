function fileToArray(gemFile)
{
	var data = eval('(' + gemFile + ')');
	
	document.getElementById("test").innerHTML=data;
}

function insertGemJsonInfo(info, index)
{
	if (gemInfo.length !== 0)
	{
		 [];
	}
	console.log ("index " + index);
	gemInfo[index] = info;
	console.log(gemInfo[index]);
}
function immenseLevel1DropDown(array, slot)
{	
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[0].level1[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[0].Attack[0].ImmensePower[0].level1[1].ver2[4])); 
	$("#gemType" + slot).append($("<option></option>").attr("value","2").text("Version 3: " + 
		array[0].Attack[0].ImmensePower[0].level1[2].ver3[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","3").text("Version 4: " + 
		array[0].Attack[0].ImmensePower[0].level1[3].ver4[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","4").text("Version 5: " + 
		array[0].Attack[0].ImmensePower[0].level1[4].ver5[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","5").text("Version 6: " + 
		array[0].Attack[0].ImmensePower[0].level1[5].ver6[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","6").text("Version 7: " + 
		array[0].Attack[0].ImmensePower[0].level1[6].ver7[4]));

	
}

function immenseLevel2DropDown(array, slot)
{

	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[1].level2[0].ver1[4]));
		
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[0].Attack[0].ImmensePower[1].level2[1].ver2[4]));

	
}

function immenseLevel3DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[0].Attack[0].ImmensePower[2].level3[0].ver1[4]));	
}


function ironWallLevel1DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[0].IronWall[0].level1[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[1].Defense[0].IronWall[0].level1[1].ver2[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","2").text("Version 3: " + 
		array[1].Defense[0].IronWall[0].level1[2].ver3[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","3").text("Version 4: " + 
		array[1].Defense[0].IronWall[0].level1[3].ver4[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","4").text("Version 5: " + 
		array[1].Defense[0].IronWall[0].level1[4].ver5[4]));

	
}

function ironWallLevel2DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[0].IronWall[1].level2[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[1].Defense[0].IronWall[1].level2[1].ver2[4]));

	
}

function ironWallLevel3DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[0].IronWall[2].level3[0].ver1[4]));

	
}

function fortLevel1DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[1].Fortitude[0].level1[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[1].Defense[1].Fortitude[0].level1[1].ver2[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","2").text("Version 3: " + 
		array[1].Defense[1].Fortitude[0].level1[2].ver3[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","3").text("Version 4: " + 
		array[1].Defense[1].Fortitude[0].level1[3].ver4[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","4").text("Version 5: " + 
		array[1].Defense[1].Fortitude[0].level1[4].ver5[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","5").text("Version 6: " + 
		array[1].Defense[1].Fortitude[0].level1[5].ver6[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","6").text("Version 7: " + 
		array[1].Defense[1].Fortitude[0].level1[6].ver7[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","7").text("Version 8: " + 
		array[1].Defense[1].Fortitude[0].level1[7].ver8[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","8").text("Version 9: " + 
		array[1].Defense[1].Fortitude[0].level1[8].ver9[4]));

	
}

function fortLevel2DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));

	
}

/* wrong */
function divineSpeedLevel1DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));

	
}

/* wrong */
function divineSpeedLevel2DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));

	
}

/* wrong */
function divineSpeedLevel3DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[1].Defense[1].Fortitude[1].level2[0].ver1[4]));

	
}

function onslaughtLevel1DropDown(array, slot)
{
	
}

function onslaughtLevel2DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[2].CrossGauge[0].Onslaught[1].level2[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[2].CrossGauge[0].Onslaught[1].level2[1].ver2[4]));
	
}

function proficiencyLevel1DropDown(array, slot)
{

	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[0].ver1[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","1").text("Version 2: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[1].ver2[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","2").text("Version 3: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[2].ver3[4]));
	$("#gemType" + slot).append($("<option></option>").attr("value","3").text("Version 4: " + 
		array[2].CrossGauge[1].Proficiency[0].level1[3].ver4[4]));

	
}

function proficiencyLevel3DropDown(array, slot){
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[2].CrossGauge[1].Proficiency[1].level3[0].ver1[4]));

	
}

function lifeForceLevel1DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[3].Vitality[0].LifeForce[0].level1[0].ver1[4]));

	
}

function harmonizeLevel1DropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[3].Vitality[1].Harmonize[0].level1[0].ver1[4]));

		
}

function easyInputDropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[4].Assist[0].EasyInput[0].level1[0].ver1[4]));

	
}

function superEasyInputDropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[4].Assist[1].SuperEasyInput[0].level1[0].ver1[4]));

	
}

function canceAssistDropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[4].Assist[2].CancelAssist[0].level1[0].ver1[4]));

	
}

function autoThrowEscapeDropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[4].Assist[3].AutoThrowEscape[0].level1[0].ver1[4]));

	
}

function autoBlockDropDown(array, slot)
{
	$("#gemType" + slot).append($("<option></option>").attr("value","0").text("Version 1: " + 
		array[4].Assist[4].AutoBlock[0].level1[0].ver1[4]));

	
}

function createPopUpWindow(gemtype, array, slot, userGem)
{
	$("#gemType" + slot).empty();
	switch (gemtype)
	{
		case "immenseLevel1":
			userGem = new gemClass("Attack", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			immenseLevel1DropDown(array, slot);				
			break;

		case "immenseLevel2":
			userGem = new gemClass("Attack", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			immenseLevel2DropDown(array, slot);
			break;

		case "immenseLevel3":
			userGem = new gemClass("Attack", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			immenseLevel3DropDown(array, slot);
			break;

		case "ironWallLevel1":
			userGem = new gemClass("Defense", gemtype, array[1].Defense[0].IronWall[0].level1[0]);
			ironWallLevel1DropDown(array, slot);			
			break;

		case "ironWallLevel2":
			userGem = new gemClass("Defense", gemtype, array[1].Defense[0].IronWall[1].level2[0]);
			ironWallLevel2DropDown(array, slot);
			break;

		case "ironWallLevel3":
			userGem = new gemClass("Defense", gemtype, array[1].Defense[0].IronWall[2].level3[0]);
			ironWallLevel3DropDown(array, slot);
			break;

		case "fortLevel1":
			userGem = new gemClass("Defense", gemtype, array[1].Defense[1].Fortitude[0].level1[0]);
			fortLevel1DropDown(array, slot);
			break;

		case "fortLevel2":
			userGem = new gemClass("Defense", gemtype, array[1].Defense[1].Fortitude[1].level2[0]);
			fortLevel2DropDown(array, slot);
			break;

		case "divineSpeedLevel1":
			userGem = new gemClass("Speed", gemtype, array[2].Attack[0].ImmensePower[0].level1[0]);
			divineSpeedLevel1DropDown(array, slot);
			break;

		case "divineSpeedLevel2":
			userGem = new gemClass("Speed", gemtype, array[2].Attack[0].ImmensePower[0].level1[0]);
			divineSpeedLevel2DropDown(array, slot);
			break;

		case "divineSpeedLevel3":
			userGem = new gemClass("Speed", gemtype, array[2].Attack[0].ImmensePower[0].level1[0]);
			divineSpeedLevel3DropDown(array, slot);
			break;

		/* update array index once speed gem object gets put into json file 1/1/2013 */
		case "onslaughtLevel1":
			userGem = new gemClass("CrossGauge", gemtype, array[3].Attack[0].ImmensePower[0].level1[0]);		
			onslaughtLevel1DropDown(array, slot);
			break;

		case "onslaughtLevel2":
			
			userGem = new gemClass("CrossGauge", gemtype, array[3].Attack[0].ImmensePower[0].level1[0]);
			onslaughtLevel2DropDown(array, slot);
			break;

		case "proficiencyLevel1":

			userGem = new gemClass("Vitality", gemtype, array[3].Attack[0].ImmensePower[0].level1[0]);
			proficiencyLevel1DropDown(array, slot);
			break;

		/* make sure this is correct. Why is there only a level 3 in the website, but no level 2?
			Capcom, you're fucking up 1/1/2013
		*/
		case "proficiencyLevel2":
			userGem = new gemClass("Vitality", gemtype, array[3].Attack[0].ImmensePower[0].level1[0]);
			proficiencyLevel2DropDown(array, slot);
			break;

		case "lifeForceLevel1":

			userGem = new gemClass("Defense", gemtype, array[4].Attack[0].ImmensePower[0].level1[0]);
			lifeForceLevel1DropDown(array, slot);
			break;

		case "harmonizeLevel1":
			userGem = new gemClass("Defense", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			harmonizeLevel1DropDown(array, slot);
			break;

		case "easyInput":
			userGem = new gemClass("Assist", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			easyInputDropDown(array, slot);
			break;

		case "superEasyInput":
			userGem = new gemClass("Assist", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			superEasyInputDropDown(array, slot);
			break;

		case "canceAssist":
			userGem = new gemClass("Assist", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			canceAssistDropDown(array, slot);
			break;

		case "autoThrowEscape":
			userGem = new gemClass("Assist", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			autoThrowEscapeDropDown(array, slot);
			break;

		case "autoBlock":
			userGem = new gemClass("Assist", gemtype, array[0].Attack[0].ImmensePower[0].level1[0]);
			autoBlockDropDown(array, slot);
			break;
	}
	return userGem;
}

function findSelectedGemInformation(gem, type, version){
}