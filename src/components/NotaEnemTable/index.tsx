import { DataGrid, ValueFormatterParams } from "@material-ui/data-grid";

import { NotaEnemEntity } from "core/src/Entity";

const removeZero = (params: ValueFormatterParams) => params.value || "-";

const columns = [
  { field: "ano", headerName: "Ano", width: 80 },
  { field: "final", headerName: "Nota Final", width: 130 },
  { field: "modalidade", headerName: "Modalidade", width: 130 },
  {
    field: "lista_de_espera",
    headerName: "Ficou na lista de espera?",
    width: 80,
  },

  {
    field: "ciencias",
    headerName: "Ciencias Naturais",
    width: 120,
    valueFormatter: removeZero,
  },

  {
    field: "matematica",
    headerName: "Matematica e Ciencias Extas",
    width: 120,
    valueFormatter: removeZero,
  },

  {
    field: "linguas",
    headerName: "Linguas",
    width: 120,
    valueFormatter: removeZero,
  },

  {
    field: "sociais",
    headerName: "Ciencias Socias",
    width: 120,
    valueFormatter: removeZero,
  },

  {
    field: "redação",
    headerName: "Redação",
    width: 120,
    valueFormatter: removeZero,
  },

  {
    field: "redação_c1",
    headerName: "C1 Redação",
    width: 80,
    valueFormatter: removeZero,
  },

  {
    field: "redação_c2",
    headerName: "C2 Redação",
    width: 80,
    valueFormatter: removeZero,
  },

  {
    field: "redação_c3",
    headerName: "C3 Redação",
    width: 80,
    valueFormatter: removeZero,
  },

  {
    field: "redação_c4",
    headerName: "C4 Redação",
    width: 80,
    valueFormatter: removeZero,
  },

  {
    field: "redação_c5",
    headerName: "C5 Redação",
    width: 80,
    valueFormatter: removeZero,
  },
];

type NotaTableType = {
  notas: NotaEnemEntity[];
};

const NotaTable = ({ notas }: NotaTableType) => {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid rows={notas} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
};

export default NotaTable;
