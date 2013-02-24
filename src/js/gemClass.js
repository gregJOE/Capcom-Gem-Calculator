function gemClass(category, gemType, gemObject) {
	this.category = category;
	this.gemType = gemType;
	this.gemInfo = gemObject;

	this.getGemJson = function()
	{
		return this.gemInfo;
	};

	this.selectedGemVersion = function(version) {
		switch (version) {
			case "0":
				return this.gemInfo.ver1;

			case "1":
				return this.gemInfo.ver2;

			case "2":
				return this.gemInfo.ver3;

			case "3":
				return this.gemInfo.ver4;

			case "4":
				return this.gemInfo.ver5;

			case "5":
				return this.gemInfo.ver6;								

			case "6":
				return this.gemInfo.ver7;

			case "7":
				return this.gemInfo.ver8;

			case "8":
				return this.gemInfo.ver8;

			case "9":
				return this.gemInfo.ver10;				

		}
	};
}

