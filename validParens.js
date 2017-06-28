validParens = (n) => {
	let arr = [];
	helper = (cores, n, arr) => {
		let core = "";
		let leftShell = "";
		let rightShell = "";
		for (let i = 0; i < cores; i++) {
			//concat ES6 shorthand - find out 
			core += "()";
		}
		for (let j = 0; j < n - cores; j++) {
			leftShell += "(";
			rightShell += ")";
		}
		arr.push(`${leftShell} ${core} ${rightShell}`);
		if (cores === n) {
			return;
		}
		helper(cores + 1, n, arr);
	};
	helper(1, n, arr);
	return arr;
};
validParens(3)
//recursion
function validParens(n) {
	var arr = [];
	var helper = function(cores, n, arr) {
		var core = ""
		var leftShell = ""
		var rightShell = ""
		// if (cores === 1) {
		// 	var str = "()";
		// } else {

		// }
		for(var i = 0; i < cores; i++){
			core += " () "
		}
		for(var i = 0; i < n-cores; i++){
			leftShell += "("
			rightShell += ")"
		}
		arr.push(leftShell + core + rightShell);
		if(cores === n) { 
			return; 
		}
		helper(cores + 1, n, arr);
	};
	helper(1, n, arr);
	return arr;
};

validParens(4)