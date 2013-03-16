	<html>
	<head>
		<title> SF X T Gem Calculator - Akuma</title>
		<link rel="stylesheet" type="text/css" href="../../css/reset.css" />
		<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
		<style>
	        #dialog-form { font-size: 62.5%; }
	        
	        input.text { margin-bottom:12px; width:95%; padding: .4em; }
	        fieldset { padding:0; border:0; margin-top:25px; }
	        h1 { font-size: 1.2em; margin: .6em 0; }
	        div#users-contain { width: 350px; margin: 20px 0; }
	        div#users-contain table { margin: 1em 0; border-collapse: collapse; width: 100%; }
	        div#users-contain table td, div#users-contain table th { border: 1px solid #eee; padding: .6em 10px; text-align: left; }
	        .ui-dialog .ui-state-error { padding: .3em; }
	        .validateTips { border: 1px solid transparent; padding: 0.3em; font-size: 14px;}
	        #dialog-form1 select, #dialog-form2 select, #dialog-form3 select { width: 290px; font-size: 12px;}
    	</style>
	</head>
	<body>
		<div id='header'> <h1> SF X T Gem Calculator - Akuma</h1> </div>
		<div id='wrapper'>
			<div id='GameContentFrame'>
				<div id='options'>
					<input type="button" onclick="downloadGemConfig()" value="Download"</input>
					<input type="button" onclick="uploadGemConfig()" value="Upload"</input>
					<input type="button" onclick="resetConfiguration();" value="Clear Set"></input>
				</div>
					
				<div id='playerGemSet'>
						<h3> Gem Set </h3>
						<input type="hidden" name="gemsSlot1" id="gemsSlot1" value=""></input>
						<input type="hidden" name="gemsSlot2" id="gemsSlot2" value=""></input>
						<input type="hidden" name="gemsSlot3" id="gemsSlot3" value=""></input>

						<select id="gems1" name="Gem1">
							<option class="gem" value="none">None</option>
							<option class="gem" value="immenseLevel1">Immense Power Level. 1</option>
							<option class="gem" value="immenseLevel2">Immense Power Level. 2</option>
							<option class="gem" value="immenseLevel3">Immense Power Level. 3</option>
							<option class="gem" value="ironWallLevel1">Iron Wall Level. 1</option>
							<option class="gem" value="ironWallLevel2">Iron Wall Level. 2</option>
							<option class="gem" value="ironWallLevel3">Iron Wall Level. 3</option>
							<option class="gem" value="fortLevel1">Fortitude Level. 1 </option>
							<option class="gem" value="fortLevel2">Fortitude Level. 2 </option>
							<option class="gem" value="divineSpeedLevel1">Divine Speed Level. 1</option>
							<option class="gem" value="divineSpeedLevel2">Divine Speed Level. 2</option>
							<option class="gem" value="divineSpeedLevel3">Divine Speed Level. 3</option>
							<option class="gem" value="onslaughtLevel1">Onslaught Level. 1</option>
							<option class="gem" value="onslaughtLevel2">Onslaught Level. 2</option>
							<option class="gem" value="proficiencyLevel1">Proficiency Level. 1</option>
							<option class="gem" value="proficiencyLevel2">Proficiency Level. 2</option>
							<option class="gem" value="lifeForceLevel1">Life Force Level. 1</option>
							<option class="gem" value="harmonizeLevel1">Harmonize Level. 1</option>
							<option class="gem" value="easyInput">Easy Input</option>
							<option class="gem" value="superEasyInput">Super Easy Input</option>
							<option class="gem" value="canceAssist">Cancel Assist</option>
							<option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
							<option class="gem" value="autoBlock">Auto Block</option>
						</select>

						 <select id="gems2" name="Gem2">
							<option class="gem" value="none">None</option>
							<option class="gem" value="immenseLevel1">Immense Power Level. 1</option>
							<option class="gem" value="immenseLevel2">Immense Power Level. 2</option>
							<option class="gem" value="immenseLevel3">Immense Power Level. 3</option>
							<option class="gem" value="ironWallLevel1">Iron Wall Level. 1</option>
							<option class="gem" value="ironWallLevel2">Iron Wall Level. 2</option>
							<option class="gem" value="ironWallLevel3">Iron Wall Level. 3</option>
							<option class="gem" value="fortLevel1">Fortitude Level. 1 </option>
							<option class="gem" value="fortLevel2">Fortitude Level. 2 </option>
							<option class="gem" value="divineSpeedLevel1">Divine Speed Level. 1</option>
							<option class="gem" value="divineSpeedLevel2">Divine Speed Level. 2</option>
							<option class="gem" value="divineSpeedLevel3">Divine Speed Level. 3</option>
							<option class="gem" value="onslaughtLevel1">Onslaught Level. 1</option>
							<option class="gem" value="onslaughtLevel2">Onslaught Level. 2</option>
							<option class="gem" value="proficiencyLevel1">Proficiency Level. 1</option>
							<option class="gem" value="proficiencyLevel2">Proficiency Level. 2</option> 
							<option class="gem" value="lifeForceLevel1">Life Force Level. 1</option>
							<option class="gem" value="harmonizeLevel1">Harmonize Level. 1</option>
							<option class="gem" value="easyInput">Easy Input</option>
							<option class="gem" value="superEasyInput">Super Easy Input</option>
							<option class="gem" value="canceAssist">Cancel Assist</option>
							<option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
							<option class="gem" value="autoBlock">Auto Block</option>
						</select>

						<select id="gems3" name="Gem3">
							<option class="gem" value="none">None</option>
							<option class="gem" value="immenseLevel1">Immense Power Level. 1</option>
							<option class="gem" value="immenseLevel2">Immense Power Level. 2</option>
							<option class="gem" value="immenseLevel3">Immense Power Level. 3</option>
							<option class="gem" value="ironWallLevel1">Iron Wall Level. 1</option>
							<option class="gem" value="ironWallLevel2">Iron Wall Level. 2</option>
							<option class="gem" value="ironWallLevel3">Iron Wall Level. 3</option>
							<option class="gem" value="fortLevel1">Fortitude Level. 1 </option>
							<option class="gem" value="fortLevel2">Fortitude Level. 2 </option>
							<option class="gem" value="divineSpeedLevel1">Divine Speed Level. 1</option>
							<option class="gem" value="divineSpeedLevel2">Divine Speed Level. 2</option>
							<option class="gem" value="divineSpeedLevel3">Divine Speed Level. 3</option>
							<option class="gem" value="onslaughtLevel1">Onslaught Level. 1</option>
							<option class="gem" value="onslaughtLevel2">Onslaught Level. 2</option>
							<option class="gem" value="proficiencyLevel1">Proficiency Level. 1</option>
							<option class="gem" value="proficiencyLevel2">Proficiency Level. 2</option>
							<option class="gem" value="lifeForceLevel1">Life Force Level. 1</option>
							<option class="gem" value="harmonizeLevel1">Harmonize Level. 1</option>
							<option class="gem" value="easyInput">Easy Input</option>
							<option class="gem" value="superEasyInput">Super Easy Input</option>
							<option class="gem" value="canceAssist">Cancel Assist</option>
							<option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
							<option class="gem" value="autoBlock">Auto Block</option>
						</select>

						<h4> Additional Effects </h4>
						<ul id="additionalEffects"> </ul>
				</div>

				<div id="pop-up-windows">
					<div id="dialog-form1" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons">
						<p class="validateTips">Select Gem Type</p>
						<select id="gemType1" name="GemType1" value="None">
						</select>
					</div>
					<div id="dialog-form2" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons">
						<p class="validateTips">Select Gem Type</p>
						<select id="gemType2" name="GemType2" value="None">
						</select>
					</div>	
					<div id="dialog-form3" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons">
						<p class="validateTips">Select Gem Type</p>
						<select id="gemType3" name="GemType3" value="None">
						</select>
					</div>
				</div>
				<div id='characterFrame'>
					<div id='characterDisplay'> </div>
					<div id='characterData'>
						
						<h3> General Attributes </h3>
						<table title="General Attributes" id='characterAttr'>
							<?php
								include ('../../php/fileOps.php');

								$fp = openCharacterData("Akuma", "g");

								$j = 0;
								
								while(($array = fgetcsv($fp, "0", "\t")) !== FALSE)
								{
									echo "\t\t\t\t\t\t<tr>\n";
									$i = 0;
									while ($i < count($array))
									{
										$data = explode("\t", $array[$i]);
										switch($i)
										{
											case 0:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='healthName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='health'>";
												}
												break;
										
											case 1:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='fwalkspeedName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='fwalkspeed'>";
												}
												break;	
											
											case 2:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='bwalkspeedName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='bwalkspeed'>";
												}
												break;
											
											case 3:
											if ($j == 0)
											{
												echo "\t\t\t\t\t\t\t<td class='binvulframeName'>";
											}
											else
											{
												echo "\t\t\t\t\t\t\t<td class='binvulframe'>";
											}
											break;
											
											case 4:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='bairframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='bairframe'>";
												}
												break;
											
											case 5:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='bgroundframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='bgroundframe'>";
												}
												break;
											
											case 6:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='btotalframeName'>";									}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='btotalframe'>";
												}
												break;
											
											case 7:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='fdashframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='fdashframe'>";
												}
												break;
											
											case 8:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='pjumpframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='pjumpframe'>";
												}
												break;
											
											case 9:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='vjumpframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='vjumpframe'>";
												}
												break;
											
											case 10:
												if ($j == 0)
												{
													echo "\t\t\t\t\t\t\t<td class='djumpframeName'>";
												}
												else
												{
													echo "\t\t\t\t\t\t\t<td class='djumpframe'>";
												}
												break;
										}	
										echo $data[0];
										echo "</td>\n ";
										++$i;
									}
									echo "\t\t\t\t\t\t</tr>\n";
									++$j;
								}
								fclose($fp);
							?>			
						</table>
						
						<h3> Frame Data </h3>
						
						<table title="Frame Data" id='characterFrames'>
					<?php 
							
						$fp = openCharacterData("Akuma", "f");
						while(($array = fgetcsv($fp, "0", "\t")) !== FALSE)
						{
							echo "\t\t\t\t\t\t<tr>\n";
							$i = 0;
							
							while ($i < count($array))
							{	
								$data = explode("\t", $array[$i]);
								
								switch($i)
								{
									case 0:
										echo "\t\t\t\t\t\t\t<td class='move'>";
										break;
									case 1:
										echo "\t\t\t\t\t\t\t<td class='command'>";
										break;
									case 2:
										echo "\t\t\t\t\t\t\t<td class='hit-level'>";
										break;
									case 3:
										echo "\t\t\t\t\t\t\t<td class='damage'>";
										break;
									case 4:
										echo "\t\t\t\t\t\t\t<td class='startup-frame'>";
										break;
									case 5:
										echo "\t\t\t\t\t\t\t<td class='active-frame'>";
										break;
									case 6:
										echo "\t\t\t\t\t\t\t<td class='recovery-frame'>";
										break;
									case 7:
										echo "\t\t\t\t\t\t\t<td class='hit-advantage'>";
										break;
									case 8:
										echo "\t\t\t\t\t\t\t<td class='block-advantage'>";
										break;
									case 9:
										echo "\t\t\t\t\t\t\t<td class='cancelable'>";
										break;
									case 10:
										echo "\t\t\t\t\t\t\t<td class='meter-gain'>";
										break;
									case 11:
										echo "\t\t\t\t\t\t\t<td class='notes'>";
										break;
								}
								echo $data[0];
								echo "</td>\n ";
								++$i;
							}
							echo "\t\t\t\t\t\t</tr>\n";
						}
					?>
					</div>
			</div> 		
		</div>
	</body>
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
	<script type="text/javascript" src="../../js/textManip.js"></script>
	<script type="text/javascript" src="../../js/gemMenu.js"></script>
	<script type="text/javascript" src="../../js/gemEffects.js"></script>
	<script type="text/javascript" src="../../js/underscore.js"></script>
	<script type="text/javascript" src="../../js/gemClass.js"></script>
</html>
