import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';7
import { NotaFuvestEntity } from "core/src/Entity";

// const columns: ColDef[] = [
//   { field: 'modalidade', headerName: 'Modalidade'},
//   { field: 'classificação', headerName: 'Clasificação'},
//   { field: 'fase1', headerName: '1° Fase'},
//   // { field: 'dia1', headerName: '2° Fase - Dia 1'},
//   // { field: 'dia2', headerName: '2° Fase - Dia 2'},
//   // { field: 'redação', headerName: '2° Fase - Redação'},
//   // { field: 'ano', headerName: 'Ano'},
//   // { field: 'notaFinal', headName: 'Nota Final'},
// ];

const columns: ColDef[] = [
  { field: 'classificação', headerName: 'Classificação', width: 180 },
  { field: 'fase1', headerName: '1° Fase', width: 130 },
  { field: 'dia1', headerName: 'Dia 1', width: 130 },
  { field: 'dia2', headerName: 'Dia 2', width: 130 },
  { field: 'redação', headerName: 'Redação', width: 130 },
  { field: 'final', headerName: 'Nota Final', width: 130 },
  { field: 'ano', headerName: 'Ano', width: 130 },
];

type NotaTableType = {
  notas: NotaFuvestEntity[];
};

const NotaTable = ({ notas }: NotaTableType) => {
  console.log("notas:", notas)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={notas} columns={columns} pageSize={20} checkboxSelection />
    </div>
  );
};

export default NotaTable
