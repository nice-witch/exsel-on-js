const CHART = {
  A: 65,
  Z: 90,
};

function creatCell() {
  return `
    <div class="cell" contenteditable spellcheck="false"></div>
  `;
}

function creatCol(element) {
  return `<div class="column">${element}</div>`;
}

function creatRow(index, content) {
  return `
    <div class="table__row">
      <div class="row-info">${index}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, idx) {
  return String.fromCharCode(CHART.A + idx);
}

export function createTable(rowCount = 20) {
  const colCount = CHART.Z - CHART.A + 1;
  const rows = [];

  const cols = new Array(colCount).fill("").map(toChar).map(creatCol).join("");
  rows.push(creatRow("", cols));

  for (let i = 0; i < rowCount; i++) {
    const cell = new Array(colCount).fill("").map(creatCell).join("");
    rows.push(creatRow(i + 1, cell));
  }

  return rows.join("");
}
