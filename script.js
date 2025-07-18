// // let prompt = require('prompt-sync')();

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];

// let i = 0,
// 	j = 0,
// 	k = 0;

// let totalLength = arr1.length + arr2.length;

// let temp = new Array(totalLength);

// while (i < arr1.length && j < arr2.length) {
// 	if (arr1[i] < arr2[j]) {
// 		temp[k] = arr1[i];
// 		i++;
// 		k++;
// 	} else {
// 		temp[k] = arr2[j];
// 		j++;
// 		k++;
// 	}
// }
// while (i < arr1.length) {
// 	temp[k] = arr1[i];
// 	i++;
// 	k++;
// }
// while (j < arr2.length) {
// 	temp[k] = arr2[j];
// 	j++;
// 	k++;
// }

// console.log(temp);

// let num1 = [1, 2, 3, 0, 0, 0];
// let num2 = [2, 5, 6];
// let m = 3,
// 	n = 3;

// var merge = function (num1, num2, m, n) {
// 	let i = m - 1,
// 		j = n - 1,
// 		k = m + n - 1;
// 	while (j >= 0) {
// 		if (i >= 0 && num1[i] > num2[j]) {
// 			num1[k] = num1[i];
// 			k--;
// 			i--;
// 			console.log(num1);
// 		} else {
// 			num1[k] = num2[j];
// 			k--;
// 			j--;
// 			console.log(num1);
// 		}
// 	}
// 	return num1;
// };
// console.log(merge(num1, num2, m, n));

// let prices = [7, 1, 5, 3, 6, 4, 10, 5, 45, 50, 8];

// var maxProfit = function (arr) {
// 	let maxProfit = 0;
// 	let min = arr[0];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < min) min = arr[i];
// 		let profit = arr[i] - min;
// 		maxProfit = Math.max(maxProfit, profit);
// 	}
// 	return maxProfit;
// };

// console.log(maxProfit(prices));

// let nums = [1, 2, 0];

// var sortColors = function (arr) {
// 	let j = 0,
// 		i = 0,
// 		k = arr.length - 1;

// 	while (i <= k) {
// 		if (arr[i] == 0) {
// 			//swap(arr, i, j);
// 			temp = arr[j];
// 			arr[j] = arr[i];
// 			arr[i] = temp;
// 			j++;
// 			i++;
// 		} else if (arr[i] == 2) {
// 			//swap(arr, i, k);
// 			temp = arr[i];
// 			arr[i] = arr[k];
// 			arr[k] = temp;
// 			k--;
// 		} else {
// 			i++;
// 		}
// 	}
// 	return arr;
// };

// console.log(sortColors(nums));

// let nums = [1];

// var maxSubArray = function (arr) {
// 	let sum = 0,
// 		maxSum = -Infinity;

// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		if (maxSum < sum) maxSum = sum;
// 		if (sum < 0) sum = 0;
// 	}
// 	return maxSum;
// };

// console.log(maxSubArray(nums));

// let nums = [3, 2, 3];

// var majorityElement = function (arr) {
// 	let ans = arr[0],
// 		count = 1;
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] == ans) {
// 			count += 1;
// 		} else {
// 			if (count == 0) {
// 				ans = arr[i];
// 				count = 1;
// 			} else {
// 				count -= 1;
// 			}
// 		}
// 	}
// 	return ans;
// };

// console.log(majorityElement(nums));

let height = [4, 2, 0, 3, 2, 5];

var trap = function (arr) {
	let maxLeft = arr[0],
		maxRight = arr[arr.length - 1],
		left = new Array(arr.length),
		right = new Array(arr.length),
		trapWater = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (maxLeft < arr[i]) maxLeft = arr[i];
		left[i] = maxLeft;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		if (maxRight < arr[i]) maxRight = arr[i];
		right[i] = maxRight;
	}

	for (let i = 0; i < arr.length; i++) {
		let min = Math.min(left[i], right[i]);
		trapWater += min - arr[i];
	}

	return trapWater;
};

console.log(trap(height));
