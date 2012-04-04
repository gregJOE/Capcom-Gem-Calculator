<?php
	function openCharacterData($characterName)
	{
		if ($characterName == NULL)
		{
			echo "Cant find file\n";
			return;
		}
			
		$characterFile = fopen("./data/characters/Ryu.csv", 'r');
		
		if ($characterFile == NULL)
		{
			echo "Cant open file\n";
                        return;
		}
		
		return $characterFile;
	}
?>
