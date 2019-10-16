import taxFunctions from './taxFunctions'

// ========== Tax ========== 
test('Canadian tax function', () => {
    expect(taxFunctions.tax(1)).toBe("0.15");
    expect(taxFunctions.tax(2)).toBe("0.30");
    expect(taxFunctions.tax(50000)).toBe("7630.35");
    expect(taxFunctions.tax(100000)).toBe("18141.10");
    expect(taxFunctions.tax(150000)).toBe("31211.10");
    expect(taxFunctions.tax(250000)).toBe("61796.25");
});