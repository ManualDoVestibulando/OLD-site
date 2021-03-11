import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { getNotas, getCursos } from 'dataprovider/lib'
import { NotaFuvest } from 'core/src/NotaFuvest'
import { GetStaticProps } from 'next'
import { URLSearchParams } from 'url';

type Notas = {
  fuvest: NotaFuvest[];
}

const Index = ({cursos} : {cursos: string[]}) => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Manual do Vestibulando
      </Typography>
      <ul>
        {cursos.map((v) => <li>{v}</li>)}
      </ul>
    </Box>
  </Container>
)
export default Index

export const getStaticProps: GetStaticProps = async (context) => {
  const notas: Notas = await getNotas()
  const unidades = getCursos(notas.fuvest)
  const cursos = generateCursoList(unidades)

  return {
    props: {
      cursos
    }, // will be passed to the page component as props
  }
}
const generateCursoList = (unidades: Map<string, string[]>) => {
  const acc: string[] = []
  for (const unidade of unidades.keys()) {
    unidades.get(unidade)
    .forEach(curso => acc.push(`${unidade}/${curso}`))
  }
  return acc;
}
