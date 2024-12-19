import { ExselComponent } from "@core/ExselComponent";
import { createTable } from "./table.template";

export class Table extends ExselComponent {
  static classname = "exsel__table";

  toHTML() {
    return createTable();
  }
}
