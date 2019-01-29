import { formatDate, formatCalenderDate } from './formatDate';

test('Should format date with 2 digit day', () => {
    expect(formatDate("Fri Jan 25 2019 15:06:36 GMT+0530")).toBe("25 January 2019");
});

test('Should format date with 1 digit day', () => {
    expect(formatDate("Fri Sep 01 2019 15:06:36 GMT+0530")).toBe("1 September 2019");
});

test('Should format calendar date with 2 digit day', () => {
    expect(formatCalenderDate("Fri Jan 25 2019 15:06:36 GMT+0530")).toBe("2019-01-25");
});

test('Should format calendar date with 1 digit day', () => {
    expect(formatCalenderDate("Fri Jan 3 2019 15:06:36 GMT+0530")).toBe("2019-01-03");
});

test('Should format calendar date with 2 digit month', () => {
    expect(formatCalenderDate("Fri Nov 3 2019 15:06:36 GMT+0530")).toBe("2019-11-03");
});
