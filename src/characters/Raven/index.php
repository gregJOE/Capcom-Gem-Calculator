<html>
	<head>
		<title> SF X T Gem Calculator - Ryu</title>
		<link rel="stylesheet" type="text/css" href="/css/reset.css" />
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
		<script type="text/javascript" src="/js/gemEffects.js"></script>
	</head>
	<body>
		<div id='header'> <h1> SF X T Gem Calculator - Ryu</h1> </div>
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
							<option class="gem" value="defense">Defense</option>
							<option class="gem" value="speed">Speed</option>
							<option class="gem" value="cross gauge">Cross Gauge</option>
							<option class="gem" value="vitality">Vitality</option>
							<option class="gem" value="assist">Assist</option>
						</select>

						 <select id="gems2" name="Gem 2">
                                                        <option class="gem" value="none">None</option>
                                                        <option class="gem" value="immenseLvl1">Immense Power Lvl. 1</option>
                                                        <option class="gem" value="immenseLvl2">Immense Power Lvl. 2</option>
                                                        <option class="gem" value="immenseLvl3">Immense Power Lvl. 3</option>
                                                        <option class="gem" value="defense">Defense</option>
                                                        <option class="gem" value="speed">Speed</option>
                                                        <option class="gem" value="cross gauge">Cross Gauge</option>
                                                        <option class="gem" value="vitality">Vitality</option>
                                                        <option class="gem" value="assist">Assist</option>
                                                </select>

						 <select id="gems3" name="Gem 3">
                                                        <option class="gem" value="none">None</option>
                                                        <option class="gem" value="immenseLvl1">Immense Power Lvl. 1</option>
                                                        <option class="gem" value="immenseLvl2">Immense Power Lvl. 2</option>
                                                        <option class="gem" value="immenseLvl3">Immense Power Lvl. 3</option>
                                                        <option class="gem" value="defense">Defense</option>
                                                        <option class="gem" value="speed">Speed</option>
                                                        <option class="gem" value="cross gauge">Cross Gauge</option>
                                                        <option class="gem" value="vitality">Vitality</option>
                                                        <option class="gem" value="assist">Assist</option>
                                                </select>
				</div>
				</br>
				<div id='characterFrame'>
					<div id='characterDisplay'> </div>
					<div id='characterData'>
						
						<h3> General Attributes </h3>
						<table title="General Attributes" id='characterAttr'> </table>
						</br>
						<h3> Frame Data </h3>
						</br>
						<table title="Frame Data" id='characterFrames'>
					<?php 
						include ('../../php/fileOps.php');
							
						$fp = openCharacterData("Raven");
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
