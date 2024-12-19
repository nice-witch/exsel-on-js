import { capitalize } from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided fpr DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = "on" + capitalize(listener);

      if (!this[method])
        throw new Error(
          `method is not implimented in ${this.name || ""} component`
        );
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = "on" + capitalize(listener);
      this.$root.remove(listener, this[method]);
    });
  }
}
