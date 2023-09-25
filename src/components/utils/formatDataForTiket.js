import { add } from "date-fns";

export function flightStartDate(date) {
  const d = new Date(date);
  const res = [d.getHours(), d.getMinutes()]
    .map(function (x) {
      return x < 10 ? "0" + x : x;
    })
    .join(":");
  return res;
}

export function flightEndDate(date, duration) {
  const d = add(new Date(date), { minutes: duration });
  const res = [d.getHours(), d.getMinutes()]
    .map(function (x) {
      return x < 10 ? "0" + x : x;
    })
    .join(":");
  return res;
}
