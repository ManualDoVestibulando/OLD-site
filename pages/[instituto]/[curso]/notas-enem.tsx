import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NotaEnemTable from "../../../src/components/NotaEnemTable";

import { getData } from "dataprovider/lib";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  CursoEntity,
  InstitutoEntity,
  ManualDoVestibulandoEntity,
  NotaEnemEntity,
} from "core/src/Entity";
import Layout from "../../../src/components/Layout";

type EnemPageType = {
  notas: NotaEnemEntity[];
  curso: CursoEntity;
  instituto: InstitutoEntity;
};

const EnemPage = ({ notas, curso, instituto }: EnemPageType) => (
  <Layout>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        {curso.nome} ({instituto.sigla}) - Enem
      </Typography>
    </Box>
    <NotaEnemTable notas={notas} />
  </Layout>
);
export default EnemPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: ManualDoVestibulandoEntity = await getData();
  const campusInstitutos = data.campus.flatMap((campus) => campus.institutos);
  const instituto = campusInstitutos.find(
    (instituto) => instituto.sigla == params.instituto
  );
  const curso = instituto.cursos.find((curso) => curso.nome == params.curso);
  const notas = curso.notas.enem;

  return {
    props: {
      instituto,
      curso,
      notas,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ManualDoVestibulandoEntity = await getData();
  const campusInstitutos = data.campus.flatMap((campus) => campus.institutos);
  const unidadesCursosList = campusInstitutos.flatMap((instituto) =>
    instituto.cursos.flatMap((curso) => ({
      instituto: instituto.sigla,
      curso: curso.nome,
    }))
  );

  return {
    paths: unidadesCursosList.map((e) => ({ params: e })),
    fallback: false,
  };
};
