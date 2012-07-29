<html>
	<head>
		<title> SF X T Gem Calculator - Rolento</title>
		<link rel="stylesheet" type="text/css" href="../../css/reset.css" />
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
		<script type="text/javascript" src="../../js/gemEffects.js"></script>
	</head>
	<body>
		<div id='header'> <h1> SF X T Gem Calculator - Rolento</h1> </div>
		<div id='wrapper'>
			<div id='GameContentFrame'>
				<div id='options'>
					<input type="button" onclick="downloadGemConfig()" value="Download"</input>
					<input type="button" onclick="uploadGemConfig()" value="Upload"</input>
					<input type="button" onclick="resetConfiguration();" value="Clear Set"></input>
				</div>
				</br>	
				<div id='playerGemSet'>
						<h3> Gem Set </h3>
						</br>
						<select id="gems1" name="Gem 1">
							<option class="gem" value="none">None</option>
							<option class="gem" value="immenseLvl1">Immense Power Lvl. 1</option>
							<option class="gem" value="immenseLvl2">Immense Power Lvl. 2</option>
							<option class="gem" value="immenseLvl3">Immense Power Lvl. 3</option>
							<option class="gem" value="ironWallLvl1">Iron Wall Lvl. 1</option>
							<option class="gem" value="ironWallLvl2">Iron Wall Lvl. 2</option>
							<option class="gem" value="ironWallLvl3">Iron Wall Lvl. 3</option>
							<option class="gem" value="fortLvl1">Fortitude Lvl. 1 </option>
							<option class="gem" value="fortLvl2">Fortitude Lvl. 2 </option>
							<option class="gem" value="divineSpeedLvl1">Divine Speed Lvl. 1</option>
							<option class="gem" value="divineSpeedLvl2">Divine Speed Lvl. 2</option>
							<option class="gem" value="divineSpeedLvl3">Divine Speed Lvl. 3</option>
                                                        <option class="gem" value="onslaughtLvl1">Onslaught Lvl. 1</option>
                                                        <option class="gem" value="onslaughtLvl2">Onslaught Lvl. 2</option>
                                                        <option class="gem" value="proficiencyLvl1">Proficiency Lvl. 1</option>
                                                        <option class="gem" value="proficiencyLvl2">Proficiency Lvl. 2</option>
                                                        <option class="gem" value="lifeForceLvl1">Life Force Lvl. 1</option>
                                                        <option class="gem" value="harmonizeLvl1">Harmonize Lvl. 1</option>
							<option class="gem" value="easyInput">Easy Input</option>
                                                        <option class="gem" value="superEasyInput">Super Easy Input</option>
                                                        <option class="gem" value="canceAssist">Cancel Assist</option>
                                                        <option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
                                                        <option class="gem" value="autoBlock">Auto Block</option>
						</select>

						 <select id="gems2" name="Gem 2">
                                                        <option class="gem" value="none">None</option>
                                                        <option class="gem" value="immenseLvl1">Immense Power Lvl. 1</option>
                                                        <option class="gem" value="immenseLvl2">Immense Power Lvl. 2</option>
                                                        <option class="gem" value="immenseLvl3">Immense Power Lvl. 3</option>
							<option class="gem" value="ironWallLvl1">Iron Wall Lvl. 1</option>
                                                        <option class="gem" value="ironWallLvl2">Iron Wall Lvl. 2</option>
                                                        <option class="gem" value="ironWallLvl3">Iron Wall Lvl. 3</option>
                                                        <option class="gem" value="fortLvl1">Fortitude Lvl. 1 </option>
                                                        <option class="gem" value="fortLvl2">Fortitude Lvl. 2 </option>
							<option class="gem" value="divineSpeedLvl1">Divine Speed Lvl. 1</option>
							<option class="gem" value="divineSpeedLvl2">Divine Speed Lvl. 2</option>
							<option class="gem" value="divineSpeedLvl3">Divine Speed Lvl. 3</option>
                                                        <option class="gem" value="onslaughtLvl1">Onslaught Lvl. 1</option>
                                                        <option class="gem" value="onslaughtLvl2">Onslaught Lvl. 2</option>
                                                        <option class="gem" value="proficiencyLvl1">Proficiency Lvl. 1</option>
                                                        <option class="gem" value="proficiencyLvl2">Proficiency Lvl. 2</option> 
							<option class="gem" value="lifeForceLvl1">Life Force Lvl. 1</option>
                                                        <option class="gem" value="harmonizeLvl1">Harmonize Lvl. 1</option>
                                                        <option class="gem" value="easyInput">Easy Input</option>
                                                        <option class="gem" value="superEasyInput">Super Easy Input</option>
                                                        <option class="gem" value="canceAssist">Cancel Assist</option>
                                                        <option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
                                                        <option class="gem" value="autoBlock">Auto Block</option>
                                                </select>

						 <select id="gems3" name="Gem 3">
                                                        <option class="gem" value="none">None</option>
                                                        <option class="gem" value="immenseLvl1">Immense Power Lvl. 1</option>
                                                        <option class="gem" value="immenseLvl2">Immense Power Lvl. 2</option>
                                                        <option class="gem" value="immenseLvl3">Immense Power Lvl. 3</option>
							<option class="gem" value="ironWallLvl1">Iron Wall Lvl. 1</option>
                                                        <option class="gem" value="ironWallLvl2">Iron Wall Lvl. 2</option>
                                                        <option class="gem" value="ironWallLvl3">Iron Wall Lvl. 3</option>
                                                        <option class="gem" value="fortLvl1">Fortitude Lvl. 1 </option>
                                                        <option class="gem" value="fortLvl2">Fortitude Lvl. 2 </option>
							<option class="gem" value="divineSpeedLvl1">Divine Speed Lvl. 1</option>
                                                        <option class="gem" value="divineSpeedLvl2">Divine Speed Lvl. 2</option>
                                                        <option class="gem" value="divineSpeedLvl3">Divine Speed Lvl. 3</option>
                                                        <option class="gem" value="onslaughtLvl1">Onslaught Lvl. 1</option>
							<option class="gem" value="onslaughtLvl2">Onslaught Lvl. 2</option>
							<option class="gem" value="proficiencyLvl1">Proficiency Lvl. 1</option>
							<option class="gem" value="proficiencyLvl2">Proficiency Lvl. 2</option>
                                                        <option class="gem" value="lifeForceLvl1">Life Force Lvl. 1</option>
                                                        <option class="gem" value="harmonizeLvl1">Harmonize Lvl. 1</option>
                                                        <option class="gem" value="easyInput">Easy Input</option>
                                                        <option class="gem" value="superEasyInput">Super Easy Input</option>
                                                        <option class="gem" value="canceAssist">Cancel Assist</option>
                                                        <option class="gem" value="autoThrowEscape">Auto Throw Escape</option>
                                                        <option class="gem" value="autoBlock">Auto Block</option>
                                                </select>

						<h4> Additional Effects </h4>
						<ul id="additionalEffects"> </ul>
				</div>
				</br>
				<div id='characterFrame'>
					<div id='characterDisplay'> </div>
					<div id='characterData'>
						
						<h3> General Attributes </h3>
						<table title="General Attributes" id='characterAttr'>
							<?php
                                                		include ('../../php/fileOps.php');

                                                		$fp = openCharacterData("Rolento", "g");

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
						</br>
						<h3> Frame Data </h3>
						</br>
						<table title="Frame Data" id='characterFrames'>
					<?php 
							
						$fp = openCharacterData("Rolento", "f");
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
</html>
