import { DomListener } from "@core/DomListener";

export class ExselComponent extends DomListener {
  constructor($root, option = {}) {
    super($root, option.listeners);
    this.name = option.name;
  }

  // возвращает шаблон компонента
  toHTML() {
    return "";
  }

  init() {
    this.initDOMListeners();
  }

  remove() {
    this.removeDOMListeners();
  }
}
