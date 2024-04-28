'use strict'
/*
This is a port of [this Python script](https://gist.github.com/raymonstah/5462963e2e857d327965).
ℹMore [info here](https://raymonstah.github.io/posts/2016-06-19-python-hello-world-with-prime-numbers).

The main diff is the way the hex string is converted to an array of hex-nibble-pairs:
I used `matchAll` instead of `match` to make the code more obfuscated by forcing myself to use spread-syntax and `map`.

Oher differences are the way `37` is written as a square plus 1, the omission of `2n * 2n` in favor of bit-shift, and `16` written with shifts or powers.
*/
console.log(
	[...(
		(
			5n * 7n *
			(6n ** 2n | 1n) *
			149n * 5417n *
			148781n *
			51939996061871n
			<< 2n
		)
			.toString(1 << (2 + 2))
			.matchAll(/.{2}/g) //split nibbles in joined pairs
	)]
		.map(v => String.fromCharCode(parseInt(v[0], 2 ** 4)))
		.join('')
)
