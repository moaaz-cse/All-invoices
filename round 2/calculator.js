let tableDataRows, xRowLength, yRowlength;
const showRowsX = () => {
  let rowsData = document.getElementById("tableRowsX").value;
  tableDataRows = rowsData;
  console.log(tableDataRows);
  let rowValue = document.getElementById("xData");
  let string = `<span>${rowsData}</span>`;
  rowValue.insertAdjacentHTML("beforeend", string);
  xRowLength = rowValue.childNodes.length;
};
const showRowsY = () => {
  let rowsData = document.getElementById("tableRowsY").value;
  tableDataRows = rowsData;
  console.log(tableDataRows);
  let rowValue = document.getElementById("yData");
  let string = `<div>${rowsData}</div>`;
  rowValue.insertAdjacentHTML("beforeend", string);
  yRowlength = rowValue.childNodes.length;
};

if (xRowLength === yRowlength) {
}
