isUnique = (str) => {
	let obj = {};
	for (const i in str) {
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		} else {
			return false;
		}
	}
	return true;
};

isUnique("Rstr")