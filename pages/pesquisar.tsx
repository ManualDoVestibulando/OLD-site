import Layout from "../src/components/Layout";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import Search, { SearchOption } from "../src/components/Search";
import { InstitutoEntity, ManualDoVestibulandoEntity } from "core/src/Entity";
import { GetStaticProps } from "next";
import { getData } from "dataprovider/lib";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(8),
  },
  search: {
    margin: theme.spacing(8, 0),
  },
}));

type PesquisaPageType = {
  options: SearchOption[];
};

const PesquisaPage = ({ options }: PesquisaPageType) => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h2" align="center" className={classes.title}>
        Procure seu curso abaixo
      </Typography>
      <Grid
        container
        className={classes.search}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Search options={options} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: ManualDoVestibulandoEntity = await getData();
  const institutos = data.institutos;
  const options: SearchOption[] = institutos.flatMap((instituto) =>
    instituto.cursos.flatMap((curso) => ({
      title: `${curso.nome} - ${instituto.nome}`,
      href: `${instituto.nome}/${curso.nome}`,
    }))
  );

  return {
    props: {
      options,
    },
  };
};

export default PesquisaPage;
