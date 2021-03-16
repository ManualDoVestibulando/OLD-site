import { DataGrid } from "@material-ui/data-grid";

import { NotaFuvestEntity } from "core/src/Entity";

const columns = [
  { field: "modalidade", headerName: "Modalidade", width: 130 },
  { field: "classificação", headerName: "Classificação", width: 180 },
  { field: "fase1", headerName: "1° Fase", width: 130 },
  { field: "dia1", headerName: "Dia 1", width: 130 },
  { field: "dia2", headerName: "Dia 2", width: 130 },
  { field: "redação", headerName: "Redação", width: 130 },
  { field: "final", headerName: "Nota Final", width: 130 },
  { field: "ano", headerName: "Ano", width: 130 },
];

type NotaTableType = {
  notas: NotaFuvestEntity[];
};

const NotaTable = ({ notas }: NotaTableType) => {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid rows={notas} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
};

export default NotaTable;
