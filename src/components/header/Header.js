import { ExselComponent } from "@core/ExselComponent";

export class Header extends ExselComponent {
  static classname = "exsel__header";

  toHTML() {
    return `
      <input type="text" value="Новая таблица" class="header__input" />

      <div>
        <button class="header__button">
          <span class="material-icons"> delete_outline </span>
        </button>
        <button class="header__button">
          <span class="material-icons"> logout </span>
        </button>
      </div>
    `;
  }
}
