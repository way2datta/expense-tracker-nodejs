import { formatDate } from './formatDate';

test('Should format date with 2 digit day', () => {
  expect(formatDate("Fri Jan 25 2019 15:06:36 GMT+0530")).toBe("25 January 2019");
});

test('Should format date with 1 digit day', () => {
  expect(formatDate("Fri Sep 01 2019 15:06:36 GMT+0530")).toBe("1 September 2019");
});