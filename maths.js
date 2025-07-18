// greatest common divisor (gcd)
// function gcd(a, b) {
// 	if (b == 0) return a;
// 	return gcd(b, a % b);
// }
// let a = 32,
// 	b = 20;
// console.log(gcd(a, b));

// square root of a number in optimized way
// let n = 100;

// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
// 	if (n % i == 0) process.stdout.write(i + ' ');
// }
// for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
// 	if (n % i == 0) {
// 		if (n / i != i) process.stdout.write(n / i + ' ');
// 	}
// } // time complexity for this ---- O(sqrt(n))

// Prime number
let n = 50;

let arr = new Array(n + 1).fill(true);

for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
	if (arr[i]) {
		for (j = i * i; j <= n; j += i) {
			arr[j] = false;
		}
	}
}

for (let i = 2; i < arr.length; i++) {
	if (arr[i]) process.stdout.write(i + ' ');
}

// find the power of number using recursion
function pow(x, n) {
	if (n == 0) return 1;
	let ans = pow(x, parseInt(n / 2));
	if (n % 2 == 0) return ans * ans;
	return ans * ans * x;
}

console.log(pow(4, 10));
