// recurring function
// function temp(n) {
// 	if (n == 0) return;
// 	temp(n-1);
// 	console.log(n);
// }
// temp(5);

//find factorial using recursion
// function fact(n) {
// 	if (n == 1) return 1;
// 	return n * fact(n - 1);
// }
// console.log(fact(5));

//fibonacci series
// let n = 10;
// let first = 0,
// 	second = 1;

// process.stdout.write(first + ' ' + second + ' ');

// for (let i = 1; i <= n - 1; i++) {
// 	let third = first + second;
// 	first = second;
// 	second = third;
// 	process.stdout.write(third + ' ');
// }

//fibonacci series using recursion
// function febonacci(n, first, second) {
// 	if (n == 0) return;
// 	let third = first + second;
// 	process.stdout.write(third + ' ');
// 	return febonacci(n - 1, second, third);
// }
// let n = 10;
// process.stdout.write(0 + ' ' + 1 + ' ');
// febonacci(n - 2, 0, 1);

// fibonacci series nth term value
function fibo(n) {
	if (n == 0 || n == 1) return n;
	return fibo(n - 1) + fibo(n - 2);
}
let n = 10;
console.log(fibo(n));
