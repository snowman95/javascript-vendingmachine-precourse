import table from "./table.js";
import coinTableRow from "./coinTableRow.js";

export default class coinTable extends table {
  constructor({ target, type, id, innerHtml = "", tableHeader = {} }) {
    super({ target, type, id, innerHtml, tableHeader });
  }
  createHeader() {
    super.createHeader();
  }

  update(stateList = []) {
    // stateList = 로컬스토리지 전체 데이터
    if (!stateList || stateList.length === 0) {
      return;
    }
    stateList.forEach((data) => {
      const key = data.id;
      const tr = this.tableRows.find(
        (row) => row.elem.id === `${this.id}-item-${key}`
      );
      if (tr) tr.update(data);
      else this.tableRows.push(this.createNewRow(data));
    });
  }

  createNewRow(state) {
    const tr = new coinTableRow({
      target: this.elem,
      type: "tr",
      id: `${this.id}`,
      key: state.id,
    });
    tr.update(state);
    return tr;
  }
}
