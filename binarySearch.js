let arr = [-1, 0, 3, 5, 8, 9, 12, 15, 23];
let target = 9;

function search(arr, first, last, target) {
	// Base case: check if search range is invalid FIRST
	if (first > last) return -1; // Return -1 for "not found" (standard convention)
	
	// Calculate mid only when we have a valid range
	let mid = Math.floor(first + (last - first) / 2);
	
	// Check if we found the target
	if (arr[mid] == target) return mid;
	
	// Recursively search left or right half
	if (arr[mid] > target) return search(arr, first, mid - 1, target);
	else return search(arr, mid + 1, last, target);
}

let index = search(arr, 0, arr.length - 1, 9);
console.log(`Found at index: ${index}`);