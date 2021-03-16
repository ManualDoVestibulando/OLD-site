import { DataGrid } from "@material-ui/data-grid";

import { NotaEnemEntity } from "core/src/Entity";

const columns = [
  { field: "modalidade", headerName: "Modalidade", width: 130 },
  {
    field: "lista_de_espera",
    headerName: "Ficou na lista de espera?",
    width: 180,
  },
  { field: "final", headerName: "Nota Final", width: 130 },
  { field: "ano", headerName: "Ano", width: 130 },
];

type NotaTableType = {
  notas: NotaEnemEntity[];
};

const NotaTable = ({ notas }: NotaTableType) => {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={notas}
        columns={columns}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
};

export default NotaTable;
