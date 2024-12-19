import { Exsel } from "@/components/exsel/Exsel";
import { Header } from "@/components/header/Header";
import { Toolbar } from "@/components/toolbar/Toolbar";
import { Formula } from "@/components/formula/Formula";
import { Table } from "@/components/table/Table";
import "./style/index.scss";

const exsel = new Exsel("#app", {
  components: [Header, Toolbar, Formula, Table],
});

exsel.render();
