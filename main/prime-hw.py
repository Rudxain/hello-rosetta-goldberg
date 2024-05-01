#!/usr/bin/env python3

if __name__ == '__main__':
	# https://gist.github.com/raymonstah/5462963e2e857d327965#file-helloworld-py
	print(''.join([chr(x) for x in [int(x,16) for x in \
		[str(hex(2 * 2 * 5 * 7 * 37 * 149 * 5417 * 148781 \
		* 51939996061871)[i:(i+2)]) \
		for i in range(25)][2::2]]]))
