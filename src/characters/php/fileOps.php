<?php
	function openCharacterData($characterName, $type)
	{
		if ($characterName == NULL)
		{
			echo "Cant find file\n";
			return;
		}
		if ($type == "f")
		{
			$fileName = $characterName . "FData" . ".csv";
		}
		else
		{
			$fileName = $characterName . "GAttrib" . ".csv";
		}
		$characterFile = fopen($fileName, 'r');
		
		if ($characterFile == NULL)
		{
			echo "Cant open file\n";
                        return;
		}
		
		return $characterFile;
	}
?>
