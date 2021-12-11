export default class Component {
  constructor({ target, type, id, innerHtml = "" }) {
    this.target = target;
    this.elem = document.createElement(type);
    this.elem.classList.add(id);
    this.elem.innerHTML = innerHtml;
    this.target.appendChild(this.elem);
  }

  addEvent(eventType, callback) {
    this.elem.addEventListener(eventType, (event) => {
      event.preventDefault();
      callback();
    });
  }
}
