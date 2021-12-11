import component from "./component.js";
import tableRow from "./tableRow.js";

export default class table extends component {
  constructor({ target, type, id, innerHtml = "", tableHeader = {} }) {
    super({ target, type, id, innerHtml });
    this.id = id;
    this.tableHeader = tableHeader;
    this.tableRows = [];
    this.createHeader();
  }
  createHeader() {
    const keys = Object.keys(this.tableHeader);
    keys.map((key) => {
      new component({
        target: this.elem,
        type: "th",
        id: `${this.id}-${key}-header`,
        innerHtml: `${this.tableHeader[key]}`,
      });
    });
  }

  update(props = []) {
    const tr = this.tableRows.find(
      (row) => row.elem.id === `${this.id}-${props[0]}-item`
    );
    if (tr) tr.update(props);
    else this.tableRows.push(this.createNewRow(props));
  }

  createNewRow(props) {
    const tr = new tableRow({
      target: this.elem,
      type: "tr",
      id: `${this.id}`,
      tableHeader: this.tableHeader,
      key: props[0],
    });
    tr.update(props);
    return tr;
  }
}
