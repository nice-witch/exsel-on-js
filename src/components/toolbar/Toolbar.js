import { ExselComponent } from "@core/ExselComponent";

export class Toolbar extends ExselComponent {
  static classname = "exsel__toolbar";

  constructor($root) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
    });
  }

  toHTML() {
    return `
      <button class="header__button">
      <span class="material-icons"> format_align_left </span>
      </button>
      <button class="header__button">
        <span class="material-icons"> format_align_center </span>
      </button>
      <button class="header__button">
        <span class="material-icons"> format_align_right </span>
      </button>
      <button class="header__button">
        <span class="material-icons"> format_bold </span>
      </button>
      <button class="header__button">
        <span class="material-icons"> format_italic </span>
      </button>
      <button class="header__button">
        <span class="material-icons"> format_underlined </span>
      </button>
    `;
  }

  onClick(event) {
    console.log(event.target);
  }
}
