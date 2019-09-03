import test from 'ava';
import fakePromiseUtil from '.';

test('Success function returns the specified value', async t => {
	const successValue = 'success';
	const actualValue = await fakePromiseUtil.success(successValue, 100);
	t.is(actualValue, successValue);
});

test('Success function adds delay if specified', async t => {
	const delay = 500;
	const start = new Date().getTime();

	await fakePromiseUtil.success('', delay);

	const end = new Date().getTime();
	const duration = end - start;

	t.true(duration >= delay);
});

test('Fail function rejects with provided error message', async t => {
	const errorMessage = 'fail';
	try {
		await fakePromiseUtil.fail(errorMessage, 100);
	} catch (error) {
		t.is(error.message, errorMessage);
	}
});

test('Fail function adds delay if specified', async t => {
	const delay = 500;
	const start = new Date().getTime();

	try {
		await fakePromiseUtil.fail('', delay);
	} catch (error) {}

	const end = new Date().getTime();
	const duration = end - start;

	t.true(duration >= delay);
});
