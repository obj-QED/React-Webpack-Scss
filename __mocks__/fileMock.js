// __mocks__/fileMock.js
module.exports = 'test-file-stub';

'use strict';

Object.defineProperty(window, 'matchMedia', {
	value: () => ({
		matches: false,
		addListener: () => {},
		removeListener: () => {}
	})
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => ({
		getPropertyValue: () => {}
	})
});


module.exports = window;