const sleep = (delayInMs: number) =>
	new Promise((resolve) => setTimeout(resolve, delayInMs));

async function success<T>(returnValue: T, delay: number = 0): Promise<T> {
	await sleep(delay);
	return returnValue;
}

const FakePromise = {
	success,
	fail: async (errorMessage: string, delay: number = 0) => {
		await sleep(delay);
		throw new Error(errorMessage);
	},
};

export default FakePromise;
