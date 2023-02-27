import {
  buildDateWithoutTZ,
  removeHoursFromDate,
} from "src/app/features/shared/utils/convertDates";

it("should return date without hours", () => {
  const date = new Date(2022, 8, 5, 21);
  const res = removeHoursFromDate(date);
  expect(res.toTimeString().includes("00:00:00")).toBeTrue();
});

it("should return date without change of timezone", () => {
  const date = "2001-10-1";
  const userTimezoneOffset = new Date().getTimezoneOffset();
  console.log(userTimezoneOffset);
  const expected = new Date(2001, 9, 1, userTimezoneOffset / 60);
  expect(buildDateWithoutTZ(date)).toEqual(expected);
});
