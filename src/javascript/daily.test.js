import functions from './daily.js'

test('Compare parameter', () => {
    expect(functions.assertEquals(10, 10)).toBe(true);
    expect(functions.assertEquals(-1, -1)).toBe(true);   
    expect(functions.assertEquals("10", "10")).toBe(true);
    expect(functions.assertEquals("John", "John")).toBe(true); 
    expect(functions.assertEquals(10, -10)).toBe(false);
    expect(functions.assertEquals("10", 10)).toBe(false);
    expect(functions.assertEquals("John", "john")).toBe(false);
});
