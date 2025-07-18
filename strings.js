let prompt = require('prompt-sync')();

// let string = prompt('Enter a string: ');
// console.log(string);

// let i = 0,
// 	j = string.length - 1;

// let palindrome = true;

// while (i < j) {
// 	if (string[i] != string[j]) {
// 		palindrome = false;
// 		break;
// 	}
// 	i++;
// 	j--;
// }
// console.log(palindrome);

// let toggle = '';

// for (let i = 0; i < string.length; i++) {
// 	let ch = string.charCodeAt(i);

// 	if (ch >= 65 && ch <= 90) toggle += String.fromCharCode(ch + 32);
// 	else if (ch >= 97 && ch <= 122) toggle += String.fromCharCode(ch - 32);
// }
// console.log(toggle);

let string = prompt('Enter a string: ');
console.log(string);

let arr = new Array(128).fill(0);

for (let i = 0; i < string.length; i++) {
	let index = string.charCodeAt(i);
	arr[index] += 1;
}
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		console.log(String.fromCharCode(i) + ' appears ' + arr[i] + ' times.');
	}
}
// console.log(arr);