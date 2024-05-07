// code your solution here
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "N/A"},
  {year: "2016", result: "W"},
  {year: "2016", result: "L"},
  {year: "2016", result: "L"},

]

function superbowlWin(records) {
  const win = records.find(record => record.result === "W");
  return win ? win.year : undefined;
}
