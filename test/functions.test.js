// IMPORT MODULES under test here:
import { divideThenMultiply, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, myFunction, returnAsAnArray, returnAsAString } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = `Bunny rabbit!!!`;

    const actual = myFunction('Bunny rabbit');

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should do math', (expect) => {
    const expected = 21;
    const expected1 = 12;
    const expected2 = 10;

    const actual1 = multiplyBy12ThenHalve(2);
    const actual = multiplyBySeven(3);
    const actual2 = divideThenMultiply(8, 4, 5);
    
    expect.equal(actual1, expected1, '12 true = 12 true');
    expect.equal(actual, expected, 'true = true');
    expect.equal(actual2, expected2, 'divide then multiple = divide then multiple');
});

test('this test should do strings and arrays', (expect) => {
    const expected = [5, 6, 7];

    const actual = returnAsAnArray(5, 6, 7);

    expect.deepEqual(actual, expected, 'true = true');
});

test('this test should return a string.', (expect) => {
    const expected = '123';
    const expected1 = 'Hello! Your lucky number for the day is 12';

    const actual = returnAsAString(1, 2, 3);
    const actual1 = makeLuckyGreeting(6, 6);

    expect.equal(actual1, expected1, 'lucky = lucky');
    expect.equal(actual, expected, 'true = true');
});

