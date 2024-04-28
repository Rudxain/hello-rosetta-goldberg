'use strict'
/*
quasi-port of this Py script: https://gist.github.com/raymonstah/5462963e2e857d327965
ℹ️: https://raymonstah.github.io/posts/2016-06-19-python-hello-world-with-prime-numbers
*/
console.log(
	[...(
		(
			5n * 7n *
			(6n ** 2n | 1n) * // `37` written as a square plus 1
			149n * 5417n *
			148781n *
			51939996061871n
			<< 2n // bit-shift rather than `2n * 2n`
		)
			.toString(1 << (2 + 2)) // hex
			// split into chunks of nibble-pairs
			.matchAll(/.{2}/g) // `matchAll` instead of `match`, to abuse spread-syntax and `map`
	)]
		.map(v => String.fromCharCode(parseInt(v[0], 2 ** 4)))
		.join('')
)
