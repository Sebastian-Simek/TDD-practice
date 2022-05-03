// IMPORT MODULES under test here:
import { multiplyBySeven, myFunction } from '../functions.js';

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

    const actual = multiplyBySeven(3);
    
    expect.equal(actual, expected, 'true = true');
});
