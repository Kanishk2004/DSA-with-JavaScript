// pivot and partition approach

// we need two pointers, one for first and one for the last
let arr = [8, 2, 1, 9, 5, 12, 4, 20];

function getPivotIndex(arr, first, last) {
	let pivot = arr[first];
	let i = first + 1,
		j = last;
	while (i <= j) {
		while (i <= last && arr[i] <= pivot) i++;
		while (j >= first && arr[j] > pivot) j--;

		if (i < j) {
			swap(arr, i, j);
		}
	}
	swap(arr, j, first);
	return j;
}

function quickSort(arr, first, last) {
	if (first >= last) return;
	let pIndex = getPivotIndex(arr, first, last);
	quickSort(arr, first, pIndex - 1);
	quickSort(arr, pIndex + 1, last);
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
