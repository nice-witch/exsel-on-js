import { ExselComponent } from "@core/ExselComponent";

export class Formula extends ExselComponent {
  static classname = "exsel__formula";

  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }

  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log(this);
  }
}
