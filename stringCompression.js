stringCompression = (str) => {
	let newStr = [];
	let strCount = 0;
	for (let i = 0; i < str.length; i++) {
		strCount++;
		if (str.charAt(i) !== str.charAt(i + 1)) {
			newStr.push(str.charAt(i));
			newStr.push(strCount);
			strCount = 0;
		}
	}
	return newStr.join("");
};

stringCompression("aabbccdd");