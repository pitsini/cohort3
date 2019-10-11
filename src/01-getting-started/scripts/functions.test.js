import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("Negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(5, 1)).toBe(4);
    expect(functions.subtract(100, 30)).toBe(70);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(50, 5)).toBe(250);
    expect(functions.multiply(100, 30)).toBe(3000);
});

test('Does that divide function work?', () => {
    expect(functions.divide(50, 5)).toBe(10);
    expect(functions.divide(100, 10)).toBe(10);
});