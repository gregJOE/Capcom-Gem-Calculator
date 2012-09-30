function fileToArray(gemFile)
{
	var data = eval('(' + gemFile + ')');
	
	document.getElementById("test").innerHTML=data;
}
