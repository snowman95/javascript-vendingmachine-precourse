import component from "./component.js";

export default class tableRow extends component {
  constructor({ target, type, id, innerHtml = "", tableHeader = "", key }) {
    super({ target, type, id: `${id}-${key}-item`, innerHtml });
    this.id = id;
    this.key = key;
    this.tableHeader = tableHeader;
    this.rowDataElements = [];
    this.elem.classList.add(`${id}-item`);
  }

  update(props) {
    if (this.rowDataElements.length > 0) {
      const keys = Object.keys(this.tableHeader);
      props.map((text, index) => {
        const td = this.rowDataElements.find(
          (row) => row.elem.id === `${this.id}-${keys[index]}-${this.key}`
        );
        td.elem.innerText = text;
      });
    } else {
      this.createNewRow(props);
    }
  }

  createNewRow(props) {
    const keys = Object.keys(this.tableHeader);
    props.map((text, index) => {
      const td = new component({
        target: this.elem,
        type: "td",
        id: `${this.id}-${keys[index]}-${props[index]}`,
        innerHtml: `${text}`,
      });
      td.elem.classList.add(`${this.id}-${keys[index]}`);
      this.rowDataElements = [...this.rowDataElements, td];
    });
  }
}
