import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import NextLink from "next/link";

import { getData } from "dataprovider/lib";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  CursoEntity,
  InstitutoEntity,
  ManualDoVestibulandoEntity,
} from "core/src/Entity";
import Layout from "../../../src/components/Layout";
import { makeStyles } from "@material-ui/core";

type CursoPageType = {
  curso: CursoEntity;
  instituto: InstitutoEntity;
};

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const CursoPage = ({ curso, instituto }: CursoPageType) => {
  const classes = useStyles();
  const cards = [
    {
      title: "Notas Fuvest",
      href: `/${instituto.sigla}/${curso.nome}/notas-fuvest`,
      description: "Notas e classificações dos ingressantes pela fuvest",
    },
    {
      title: "Notas Enem",
      href: `/${instituto.sigla}/${curso.nome}/notas-enem`,
      description: "Notas e classificações dos ingressantes pelo sisu",
    },
  ];
  return (
    <Layout>
      <Container className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {curso.nome} ({instituto.sigla})
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          {instituto.descrição}
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} justify="center">
          {cards.map((c) => (
            <NextLink key={c.href} href={c.href}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {c.title}
                    </Typography>
                    <Typography>{c.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </NextLink>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
export default CursoPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: ManualDoVestibulandoEntity = await getData();
  const campusInstitutos = data.campus.flatMap((campus) => campus.institutos);
  const instituto = campusInstitutos.find(
    (instituto) => instituto.sigla == params.instituto
  );
  const curso = instituto.cursos.find((curso) => curso.nome == params.curso);

  return {
    props: {
      instituto,
      curso,
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
