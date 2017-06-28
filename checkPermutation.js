checkPermutation = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	let obj = {};
	for (const i in str1) {
		if (!obj[str1[i]]) {
			obj[str1[i]] = 1;	
		} else {
			obj[str1[i]]++;
		}
	};
	for (const j in str2) {
		if (!obj[str2[j]]) {
			return false;
		} else if (obj[str2[j]] !== 0) {
			obj[str2[j]]--;
		} else {
			return false;
		}
	}
	return true;
};

checkPermutation("happy", "12345")