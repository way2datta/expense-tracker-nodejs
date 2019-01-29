import { formatMoney } from './formatMoney';

test('Should format 1 digit money', () => {
    expect(formatMoney(3)).toBe("$3.00");
});

test('Should format 2 digit money', () => {
    expect(formatMoney(12.34)).toBe("$12.34");
});

test('Should format 3 digit money', () => {
    expect(formatMoney(123.45)).toBe("$123.45");
});

test('Should format 4 digit money', () => {
    expect(formatMoney(1234.56)).toBe("$1,234.56");
});

test('Should format 5 digit money', () => {
    expect(formatMoney(12345.67)).toBe("$12,345.67");
});