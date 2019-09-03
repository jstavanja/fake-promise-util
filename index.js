'use strict';

const sleep = delayInMs => new Promise(resolve => setTimeout(resolve, delayInMs));

module.exports = {
	success: async (returnValue = true, delay = 0) => {
		await sleep(delay);
		return returnValue;
	},
	fail: async (errorMessage = 'Yikes.', delay = 0) => {
		await sleep(delay);
		throw new Error(errorMessage);
	}
};
